import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>EV Admin Panel</h2>
        <button className="menu-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
      <nav className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/admin" className={`admin-menu-item ${location.pathname === '/admin' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          Bảng điều khiển
        </Link>
        
        <Link to="/admin/stations" className={`admin-menu-item ${location.pathname === '/admin/stations' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          Quản lý trạm sạc
        </Link>
        
        <Link to="/admin/iot" className={`admin-menu-item ${location.pathname === '/admin/iot' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          Giám sát IoTs & Nhiệt độ
        </Link>

        <Link to="/admin/ai" className={`admin-menu-item ${location.pathname === '/admin/ai' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          Dự báo quá tải (AI)
        </Link>
        
        <Link to="/admin/users" className={`admin-menu-item ${location.pathname === '/admin/users' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          Quản lý Khách hàng
        </Link>
        
        <Link to="/" className="admin-menu-item back-link" style={{ textDecoration: 'none', display: 'block', color: '#ffc107', marginTop: '20px' }}>
          ← Về trang Bản đồ
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;