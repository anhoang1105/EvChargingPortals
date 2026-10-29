import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminStations = () => {
  const [stations, setStations] = useState([
    { id: 'TS001', name: 'Trạm sạc ĐH TN&MT (Tân Bình)', available: 3, status: 'Hoạt động', ioTStatus: 'Bình thường (35°C)' },
    { id: 'TS002', name: 'Trạm sạc ĐH TN&MT (Nhà Bè)', available: 0, status: 'Quá tải', ioTStatus: 'Cảnh báo nhiệt (65°C) ⚠️' },
  ]);

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <h1 className="page-title">Quản lý danh mục trạm sạc</h1>
        
        <section className="station-management" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div className="action-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>Danh sách trạm sạc (Dữ liệu tĩnh)</h2>
            <div className="action-buttons" style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '8px 15px', background: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Nhập CSV</button>
              <button style={{ padding: '8px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Xuất Excel</button>
              <button style={{ padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>+ Thêm mới</button>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '12px' }}>Mã</th>
                  <th style={{ padding: '12px' }}>Tên Trạm</th>
                  <th style={{ padding: '12px' }}>Trống</th>
                  <th style={{ padding: '12px' }}>Trạng thái</th>
                  <th style={{ padding: '12px' }}>Cảm biến (IoTs)</th>
                  <th style={{ padding: '12px' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {stations.map(st => (
                  <tr key={st.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}><strong>{st.id}</strong></td>
                    <td style={{ padding: '12px' }}>{st.name}</td>
                    <td style={{ padding: '12px' }}>{st.available}</td>
                    <td style={{ padding: '12px', color: st.status === 'Hoạt động' ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>{st.status}</td>
                    <td style={{ padding: '12px', color: st.ioTStatus.includes('Bình thường') ? '#333' : '#dc3545', fontWeight: 'bold' }}>{st.ioTStatus}</td>
                    <td style={{ padding: '12px' }}>
                      <button style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Sửa</button>
                      <button style={{ color: '#dc3545', background: 'none', border: 'none', cursor: 'pointer' }}>Xóa</button>
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

export default AdminStations;