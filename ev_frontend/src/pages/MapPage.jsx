import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup as LeafletPopup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import './MapPage.css';

const MapPage = () => {
  // Quản lý trạng thái giao diện
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Dữ liệu giả lập (Mock data) của hệ thống trạm sạc
  const mockStations = [
    { 
      id: 1, 
      name: 'Trạm sạc ĐH TN&MT (Tân Bình)', 
      address: '236B Lê Văn Sỹ, Phường 1, Tân Bình, TP.HCM',
      lat: 10.7995, 
      lng: 106.6662, 
      status: 'Còn 3 trụ trống',
      aiForecast: '🟢 Dự báo: Trạm thường vắng khách vào giờ này',
      price: '3.159 VNĐ/kWh', 
      connectors: ['CCS2', 'Type 2'], 
      distance: '2.5 km'
    },
    { 
      id: 2, 
      name: 'Trạm sạc ĐH TN&MT (Nhà Bè)', 
      address: 'Xã Hiệp Phước, Huyện Nhà Bè, TP.HCM',
      lat: 10.6125, 
      lng: 106.7450, 
      status: 'Đầy (Đang chờ: 2)',
      aiForecast: '🔴 Cảnh báo: Khả năng quá tải kéo dài đến 18:00',
      price: '3.159 VNĐ/kWh', 
      connectors: ['CCS2', 'CHAdeMO'], 
      distance: '15 km'
    }
  ];

  const centerPosition = [10.7035, 106.7030]; 

  const handleOpenBooking = (station) => {
    setSelectedStation(station);
    setShowBookingModal(true);
  };

  return (
    <div className="page-wrapper">
      {/* THANH ĐIỀU HƯỚNG (NAVBAR) */}
      <header className="top-navbar">
        <div className="nav-brand">⚡ EV SmartCharge</div>
        <button className="mobile-menu-btn" onClick={() => setIsNavOpen(!isNavOpen)}>☰</button>
        <nav className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          {/* Đã bọc bằng thẻ Link và thêm textDecoration: 'none' để bỏ gạch chân */}
          <Link to="/history" className="nav-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Lịch sử đặt chỗ</Link>
          <Link to="/vehicles" className="nav-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Phương tiện của tôi</Link>
          <Link to="/login" className="nav-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Đăng nhập</Link>
          <Link to="/admin" className="nav-btn primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Vào trang Quản trị</Link>
        </nav>
      </header>

      {/* KHU VỰC NỘI DUNG CHÍNH */}
      <main className="map-container-layout">
        
        {/* CỘT TRÁI: Tìm kiếm & Danh sách trạm */}
        <section className="sidebar">
          <h2 style={{ color: '#0056b3', marginTop: 0 }}>Tìm trạm sạc</h2>
          <input type="text" placeholder="Nhập tên đường, khu vực..." className="search-input" />
          
          <div className="filter-section">
            <select className="filter-dropdown">
              <option>Tất cả cổng sạc</option>
              <option>CCS2 (Sạc nhanh)</option>
              <option>Type 2 (Sạc thường)</option>
            </select>
            <label className="filter-checkbox">
              <input type="checkbox" /> Chỉ hiện trạm còn trống
            </label>
          </div>

          {/* Render danh sách trạm */}
          {mockStations.map((station) => (
            <article key={station.id} className="station-card">
              <div className="card-header">
                <h3>{station.name}</h3>
                <span className="distance-badge">{station.distance}</span>
              </div>
              
              <div className="card-body">
                <p>📍 {station.address}</p>
                <p>💰 Đơn giá: <strong>{station.price}</strong></p>
                <div className="connector-tags">
                  {station.connectors.map(c => <span key={c} className="tag">{c}</span>)}
                </div>
                <p className="status-text">Trạng thái: <strong>{station.status}</strong></p>
                <p className={`ai-forecast ${station.id === 2 ? 'warning' : 'good'}`}>
                  {station.aiForecast}
                </p>
              </div>

              <button className="book-btn" onClick={() => handleOpenBooking(station)}>
                Đặt chỗ ngay
              </button>
            </article>
          ))}
        </section>

        {/* CỘT PHẢI: Bản đồ WebGIS */}
        <section className="map-view">
          <MapContainer center={centerPosition} zoom={11}>
            <TileLayer 
              attribution='&copy; Google Maps' 
              url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" 
            />
            {mockStations.map((station) => (
              <Marker key={station.id} position={[station.lat, station.lng]}>
                <LeafletPopup>
                  <strong>{station.name}</strong><br />
                  {station.status}<br />
                  <span style={{fontSize: '12px', color: '#666'}}>{station.aiForecast}</span>
                </LeafletPopup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>

      {/* POPUP: Đặt chỗ trạm sạc */}
      {showBookingModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Xác nhận đặt chỗ</h3>
            <p className="selected-station-text">Trạm: <strong>{selectedStation?.name}</strong></p>
            
            <div className="form-group">
              <label>Biển số xe (VD: 51H-123.45)</label>
              <input type="text" placeholder="Nhập biển số xe..." />
            </div>
            
            <div className="form-group">
              <label>Thời gian dự kiến đến</label>
              <input type="time" />
            </div>
            
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowBookingModal(false)}>Hủy bỏ</button>
              <button className="btn-submit" onClick={() => { 
                alert('Đặt chỗ thành công!'); 
                setShowBookingModal(false); 
              }}>Xác nhận Đặt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;