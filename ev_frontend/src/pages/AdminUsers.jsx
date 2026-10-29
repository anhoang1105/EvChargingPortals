import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 'KH01', name: 'Nguyễn Văn A', email: 'vana@gmail.com', viPham: 0, status: 'Hoạt động' },
    { id: 'KH02', name: 'Trần Thị B', email: 'tranb@gmail.com', viPham: 3, status: 'Bị khóa (Ban)' },
    { id: 'KH03', name: 'Hoàng C', email: 'hoangc@gmail.com', viPham: 1, status: 'Hoạt động' },
  ]);

  const toggleBan = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const newStatus = u.status === 'Hoạt động' ? 'Bị khóa (Ban)' : 'Hoạt động';
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  return (
    <div className="admin-layout">
      {/* Gọi thanh Menu dùng chung thay vì code cứng */}
      <AdminSidebar />
      
      <main className="admin-content">
        <h1 className="page-title">Quản lý Khách hàng & Cảnh báo lạm dụng</h1>
        
        <div className="table-wrapper" style={{ marginTop: '20px' }}>
          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '12px' }}>Mã KH</th>
                <th style={{ padding: '12px' }}>Họ Tên</th>
                <th style={{ padding: '12px' }}>Email/SĐT</th>
                <th style={{ padding: '12px' }}>Số lần hủy/quá hạn</th>
                <th style={{ padding: '12px' }}>Trạng thái</th>
                <th style={{ padding: '12px' }}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}><strong>{u.id}</strong></td>
                  <td style={{ padding: '12px' }}>{u.name}</td>
                  <td style={{ padding: '12px' }}>{u.email}</td>
                  <td style={{ padding: '12px' }}><strong style={{ color: u.viPham >= 3 ? 'red' : 'black' }}>{u.viPham} lần</strong></td>
                  <td style={{ padding: '12px', color: u.status === 'Hoạt động' ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>{u.status}</td>
                  <td style={{ padding: '12px' }}>
                    <button 
                      onClick={() => toggleBan(u.id)}
                      style={{ padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: u.status === 'Hoạt động' ? '#dc3545' : '#28a745', color: 'white' }}>
                      {u.status === 'Hoạt động' ? 'Khóa tài khoản' : 'Mở khóa'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;