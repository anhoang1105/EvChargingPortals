import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dữ liệu giả lập quản lý trạm sạc
  const stations = [
    { id: 'TS001', name: 'Trạm sạc ĐH TN&MT (Tân Bình)', status: 'Hoạt động', ioTStatus: 'Bình thường (35°C)', available: 3 },
    { id: 'TS002', name: 'Trạm sạc ĐH TN&MT (Nhà Bè)', status: 'Quá tải', ioTStatus: 'Cảnh báo nhiệt (65°C) ⚠️', available: 0 },
    { id: 'TS003', name: 'Trạm sạc Vincom Đồng Khởi', status: 'Bảo trì', ioTStatus: 'Mất kết nối ❌', available: 0 },
  ];

  return (
    <div className="admin-layout">
      {/* SIDEBAR BÊN TRÁI */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>EV Admin Panel</h2>
          <button className="menu-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>
        <nav className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="admin-menu-item active">Bảng điều khiển</div>
          <div className="admin-menu-item">Quản lý trạm sạc</div>
          <div className="admin-menu-item">Giám sát IoTs & Nhiệt độ</div>
          <div className="admin-menu-item">Dự báo quá tải (AI)</div>
          <Link to="/" className="admin-menu-item back-link">← Về trang Bản đồ</Link>
        </nav>
      </aside>

      {/* NỘI DUNG CHÍNH BÊN PHẢI */}
      <main className="admin-content">
        <h1 className="page-title">Tổng quan hệ thống</h1>
        
        {/* Thống kê nhanh */}
        <section className="dashboard-cards">
          <div className="card">
            <h3>Tổng số trạm sạc</h3>
            <p>12 Trạm</p>
          </div>
          <div className="card">
            <h3>Trụ đang hoạt động</h3>
            <p className="text-success">45 Trụ</p>
          </div>
          <div className="card">
            <h3>Cảnh báo IoTs</h3>
            <p className="text-danger">2 Cảnh báo</p>
          </div>
        </section>

        {/* Khu vực Widgets: AI & IoTs */}
        <section className="dashboard-widgets">
          <article className="widget-box">
            <h3>🔔 Nhật ký sự kiện IoTs</h3>
            <ul className="log-list">
              <li className="log-item error"><span>14:30</span> TS002 (Nhà Bè): Cảm biến trụ #2 báo quá nhiệt 65°C. Đã ngắt sạc.</li>
              <li className="log-item warning"><span>14:15</span> TS003 (Vincom): Mất kết nối mạng LAN.</li>
              <li className="log-item info"><span>14:05</span> TS001 (Tân Bình): Xe 51H-123.45 hoàn tất sạc.</li>
            </ul>
          </article>

          <article className="widget-box">
            <h3>🧠 AI Dự báo tải hệ thống (Hôm nay)</h3>
            <div className="ai-chart-mock">
              <div className="bar-group"><div className="bar" style={{height: '30%'}}></div><span>08:00</span></div>
              <div className="bar-group"><div className="bar warning" style={{height: '70%'}}></div><span>12:00</span></div>
              <div className="bar-group"><div className="bar danger" style={{height: '95%'}}></div><span>18:00</span></div>
              <div className="bar-group"><div className="bar" style={{height: '40%'}}></div><span>22:00</span></div>
            </div>
            <p className="chart-caption">Mô hình dự báo nguy cơ quá tải cao lúc 18:00</p>
          </article>
        </section>

        {/* Quản lý danh sách trạm sạc */}
        <section className="station-management">
          <div className="action-bar">
            <h2>Danh sách trạm sạc</h2>
            <div className="action-buttons">
              <button className="btn btn-warning">Nhập CSV</button>
              <button className="btn btn-success">Xuất Excel</button>
              <button className="btn btn-primary">+ Thêm mới</button>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Tên Trạm</th>
                  <th>Trống</th>
                  <th>Trạng thái</th>
                  <th>Cảm biến (IoTs)</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {stations.map(st => (
                  <tr key={st.id}>
                    <td><strong>{st.id}</strong></td>
                    <td>{st.name}</td>
                    <td>{st.available}</td>
                    <td className={`status-${st.status === 'Hoạt động' ? 'active' : 'inactive'}`}>
                      {st.status}
                    </td>
                    <td style={{ color: st.ioTStatus.includes('Bình thường') ? '#333' : '#dc3545', fontWeight: 'bold' }}>
                      {st.ioTStatus}
                    </td>
                    <td>
                      <button className="text-btn edit-btn">Sửa</button>
                      <button className="text-btn delete-btn">Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;