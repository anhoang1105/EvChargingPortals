import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminIoT = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <h1 className="page-title">Giám sát IoTs & Cảnh báo an toàn</h1>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <p>Trang này sẽ hiển thị biểu đồ nhiệt độ thời gian thực và danh sách chi tiết các trụ sạc đang bị lỗi phần cứng.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminIoT;