import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleProfile = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, bienSo: '51H-123.45', hangXe: 'VinFast VF8', pin: '82', cong: 'CCS2' }
  ]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Quản lý Phương tiện cá nhân</h2>
        <Link to="/" style={{ textDecoration: 'none', color: '#0056b3', fontWeight: 'bold' }}>← Trở về Bản đồ</Link>
      </div>

      <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '20px' }}>
        <h3>Thêm xe mới</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input type="text" placeholder="Biển số (VD: 59A-12345)" style={inputStyle} />
          <input type="text" placeholder="Hãng/Dòng xe" style={inputStyle} />
          <input type="number" placeholder="Dung lượng pin (kWh)" style={inputStyle} />
          <select style={inputStyle}>
            <option>Chuẩn sạc CCS2</option>
            <option>Chuẩn sạc Type 2</option>
          </select>
          <button style={{ padding: '10px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+ Thêm phương tiện</button>
        </div>
      </div>

      <h3>Danh sách xe của tôi</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#343a40', color: 'white', textAlign: 'left' }}>
            <th style={tdStyle}>Biển số</th>
            <th style={tdStyle}>Dòng xe</th>
            <th style={tdStyle}>Pin (kWh)</th>
            <th style={tdStyle}>Chuẩn cổng sạc</th>
            <th style={tdStyle}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(v => (
            <tr key={v.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tdStyle}><strong>{v.bienSo}</strong></td>
              <td style={tdStyle}>{v.hangXe}</td>
              <td style={tdStyle}>{v.pin} kWh</td>
              <td style={tdStyle}>{v.cong}</td>
              <td style={tdStyle}><button style={{ color: '#dc3545', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const inputStyle = { padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flex: 1, minWidth: '150px' };
const tdStyle = { padding: '12px' };

export default VehicleProfile;