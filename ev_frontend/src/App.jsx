import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import AuthPage from './pages/AuthPage';
import BookingHistory from './pages/BookingHistory';
import VehicleProfile from './pages/VehicleProfile';

import AdminDashboard from './pages/AdminDashboard';
import AdminStations from './pages/AdminStations';
import AdminIoT from './pages/AdminIoT';
import AdminAI from './pages/AdminAI';
import AdminUsers from './pages/AdminUsers'; // Trang tạo ở lượt trước, nhớ bọc <AdminSidebar /> vào trong file này nhé
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/history" element={<BookingHistory />} />
        <Route path="/vehicles" element={<VehicleProfile />} />
        
        {/* Các trang phân hệ Quản trị */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/stations" element={<AdminStations />} />
        <Route path="/admin/iot" element={<AdminIoT />} />
        <Route path="/admin/ai" element={<AdminAI />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </Router>
  );
}

export default App;