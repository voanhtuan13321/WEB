import React from 'react'
import { Link } from 'react-router-dom'
const ThayDoiTaiKhoanMatKhau = () => {


    return (
        <div className='container  py-5 '>
            <div className="row justify-content-center">
                <div className='col-4 py-5 border border-secondary text-center'>
                    <b>Đăng kí</b>
                <form className='pt-5'>
                    <div className="mb-3">
                    <label className="form-label">Tên</label>
                        <input type="email"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Email</label>
                      <input type="email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input type="text"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Địa chỉ</label>
                        <input type="password"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Tài khoản</label>
                        <input type="password"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input type="password"/>
                    </div>
                    <div className='text-center'>
                        <button  type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link className='' to='/dang_nhap'>Đăng nhap</Link>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
      )
}

export default ThayDoiTaiKhoanMatKhau
