import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminAI = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <h1 className="page-title">Mô hình AI & Phân tích chuỗi thời gian</h1>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <p>Trang này sẽ hiển thị các thiết lập thuật toán, tập dữ liệu huấn luyện và lịch sử điều hướng người dùng.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminAI;