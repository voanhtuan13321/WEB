import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='d-flex justify-content-center p-5'>
          <form className="form text-center p-5">
              <p className="form-title">Đăng kí</p>
              <div className="input-container">
                  <input type="text" name='ten' placeholder="Tên" />
              </div>
              <div className="input-container">
                  <input type="password" name='email' placeholder="Enter password" />
              </div>
              <div className="input-container">
                  <input type="password" name='soDienThoai' placeholder="Số điện thoại" />
              </div>
              <div className="input-container">
                  <input type="password" name='diaChi' placeholder="Địa chỉ" />
              </div>
              <div className="input-container">
                  <input type="password" name='taiKhoan' placeholder="Tài khoản" />
              </div>
              <div className="input-container">
                  <input type="password" name='matKhau' placeholder="Mật khẩu" />
              </div>
              <button type="submit" className="submit btn">
              Đăng kí
              </button>
              <p className="signup-link">
                  <Link to='/dang_nhap'>Đăng nhập</Link>
              </p>
          </form>
      </div>
  )
}

export default Register