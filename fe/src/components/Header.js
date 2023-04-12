import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {BsSearch,BsFillCartDashFill} from 'react-icons/bs'
import {AiOutlineLogin} from 'react-icons/ai'
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline: <a href="tel:+91 0763553858">+12345679</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Dev Corner</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2"><BsSearch/></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-end'>
                {/* <div>
                <Link className='d-flex align-items-center text-white'>
                    <img src="images/" alt=''/>
                    <p className='mb-0'>Compare<br/> Product</p>
                  </Link>
                </div>
                <div>
                <Link className='d-flex align-items-center text-white'>
                    <img src="images/"/>
                    <p className='mb-0'>Compare<br/> Product</p>
                  </Link>
                </div> */}
                <div className=''>
                  <Link to='/dang_nhap' className='d-flex align-items-center text-white'>
                    <AiOutlineLogin/>
                    <p className='mb-0'>Đăng nhập</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center text-white'>
                    <BsFillCartDashFill/>
                    <div className='d-flex flex-colum'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-15'>
                <div>
                  <div className="dropdown">
                    <button 
                      className="btn btn-secondary dropdown-toggle" 
                      type="button" 
                      id="dropdownMenuButton1" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false">
                        <span className='me-5 d-inline-block'>Danh mục sách</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-link'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className='text-white' to='/'>Trang chủ</NavLink>
                    <NavLink className='text-white' to='/sukienkhuyenmai'>Sự kiện, khuyến mãi</NavLink>
                    <NavLink className='text-white' to='/'>Blogs</NavLink>
                    <NavLink className='text-white' to='/'>Liên hệ</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
