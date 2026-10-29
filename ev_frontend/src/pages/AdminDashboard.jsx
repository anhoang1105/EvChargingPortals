import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <h1 className="page-title">Tổng quan hệ thống</h1>
        
        <section className="dashboard-cards">
          <div className="card">
            <h3 style={{ color: '#666', fontSize: '14px' }}>Tổng số trạm sạc</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>12 Trạm</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#666', fontSize: '14px' }}>Trụ đang hoạt động</h3>
            <p className="text-success" style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>45 Trụ</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#666', fontSize: '14px' }}>Cảnh báo IoTs</h3>
            <p className="text-danger" style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>2 Cảnh báo</p>
          </div>
        </section>

        <section className="dashboard-widgets" style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <article className="widget-box" style={{ flex: 1, background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>🔔 Nhật ký sự kiện IoTs</h3>
            <ul className="log-list" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ color: '#dc3545', margin: '10px 0' }}><strong>14:30</strong> TS002 (Nhà Bè): Cảm biến trụ #2 báo quá nhiệt 65°C. Đã ngắt sạc.</li>
              <li style={{ color: '#fd7e14', margin: '10px 0' }}><strong>14:15</strong> TS003 (Vincom): Mất kết nối mạng LAN.</li>
              <li style={{ color: '#007bff', margin: '10px 0' }}><strong>14:05</strong> TS001 (Tân Bình): Xe 51H-123.45 hoàn tất sạc.</li>
            </ul>
          </article>

          <article className="widget-box" style={{ flex: 1, background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>🧠 AI Dự báo tải hệ thống (Hôm nay)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '150px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center' }}><div style={{ width: '30px', height: '50px', background: '#28a745', margin: '0 auto' }}></div><span style={{ fontSize: '12px' }}>08:00</span></div>
              <div style={{ textAlign: 'center' }}><div style={{ width: '30px', height: '100px', background: '#ffc107', margin: '0 auto' }}></div><span style={{ fontSize: '12px' }}>12:00</span></div>
              <div style={{ textAlign: 'center' }}><div style={{ width: '30px', height: '130px', background: '#dc3545', margin: '0 auto' }}></div><span style={{ fontSize: '12px' }}>18:00</span></div>
              <div style={{ textAlign: 'center' }}><div style={{ width: '30px', height: '70px', background: '#28a745', margin: '0 auto' }}></div><span style={{ fontSize: '12px' }}>22:00</span></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '10px' }}>Mô hình dự báo nguy cơ quá tải cao lúc 18:00</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;