import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingHistory = () => {
  // Mock data mô phỏng trạng thái giao dịch
  const [history, setHistory] = useState([
    { id: 'DC001', trạm: 'Trạm sạc ĐH TN&MT', tru: 'IOT-TS1-P1', time: '14:30 15/10/2026', status: 'Đang giữ chỗ', price: 0 },
    { id: 'DC002', trạm: 'Vincom Gò Vấp', tru: 'IOT-TS2-P2', time: '10:00 14/10/2026', status: 'Chờ thanh toán', price: 150000 },
    { id: 'DC003', trạm: 'Trạm sạc ĐH TN&MT', tru: 'IOT-TS1-P3', time: '08:00 10/10/2026', status: 'Đã hoàn thành', price: 120000 },
  ]);

  const handleCancel = (id) => {
    if (window.confirm('Bạn có chắc muốn hủy giữ chỗ này?')) {
      setHistory(history.map(item => item.id === id ? { ...item, status: 'Đã hủy' } : item));
      alert('Đã hủy giữ chỗ thành công, giải phóng trụ sạc!');
    }
  };

  const handlePayment = (id) => {
    alert(`Đang chuyển hướng sang cổng thanh toán VNPay cho hóa đơn ${id}...`);
    setHistory(history.map(item => item.id === id ? { ...item, status: 'Đã hoàn thành' } : item));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Lịch sử Đặt chỗ & Sạc xe</h2>
        <Link to="/" style={{ textDecoration: 'none', color: '#0056b3', fontWeight: 'bold' }}>← Trở về Bản đồ</Link>
      </div>
      
      {history.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '15px', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h3 style={{ margin: 0, color: '#333' }}>Mã: {item.id} - {item.trạm}</h3>
            <span style={{ fontWeight: 'bold', color: item.status === 'Đang giữ chỗ' ? '#fd7e14' : item.status === 'Chờ thanh toán' ? '#dc3545' : item.status === 'Đã hủy' ? '#6c757d' : '#28a745' }}>
              {item.status}
            </span>
          </div>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>Trụ sạc: <strong>{item.tru}</strong> | Thời gian: {item.time}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>Tổng phí: <strong>{item.price.toLocaleString()} VNĐ</strong></p>
          
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            {item.status === 'Đang giữ chỗ' && (
              <button onClick={() => handleCancel(item.id)} style={{ padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy giữ chỗ</button>
            )}
            {item.status === 'Chờ thanh toán' && (
              <button onClick={() => handlePayment(item.id)} style={{ padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Thanh toán ngay</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;