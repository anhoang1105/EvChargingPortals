import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tạm thời bỏ qua gọi API, chuyển thẳng về trang chủ sau khi nhập form
    alert(isLogin ? "Đăng nhập thành công!" : "Đăng ký thành công!");
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f9' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '350px' }}>
        <h2 style={{ textAlign: 'center', color: '#28a745' }}>⚡ EV SmartCharge</h2>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{isLogin ? 'Đăng nhập' : 'Tạo tài khoản mới'}</h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {!isLogin && (
            <input type="text" placeholder="Họ và tên" required style={inputStyle} />
          )}
          <input type="email" placeholder="Email hoặc Số điện thoại" required style={inputStyle} />
          <input type="password" placeholder="Mật khẩu" required style={inputStyle} />
          
          <button type="submit" style={btnStyle}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
          <span style={{ color: '#0056b3', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
          </span>
        </p>
      </div>
    </div>
  );
};

const inputStyle = { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' };
const btnStyle = { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };

export default AuthPage;