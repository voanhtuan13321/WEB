
import { Link } from 'react-router-dom'

const Navbar = () => {
  const quanli = [
    {
      key:'Quản lí danh mục',
      label:'/admin/trang_quan_ly_danhmuc'
    },
    {
      key:'Quản lí sản phẩm',
      label:'/admin/trang_quan_ly_san_pham'
    },
    {
      key:'Thống kê',
      label:'/admin/thong_ke'
    },
    {
      key:'Quản lí sự kiện',
      // icon:
      label:'/admin/trang_su_kien'
    },{
      key:'Quản lý người dùng',
      // icon:
      label:'/admin/trang_quan_ly_nguoi_dung'
    },{
      key:'Thông tin cửa hàng',
      // icon:
      label:'/admin/trang_thong_tin_cua_hang'
    }
  ]

  return (
    // <div className='border border-primary'>
    //   <ul>
    //     {
    //       quanli.map((item,index)=>{
    //         return(
    //           <li key={index} className='py-2'>
    //             <Link to={item.label}>
    //               {item.key}
    //             </Link>
    //           </li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>
    <div
  className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
  style={{ width: 280 }}
>
  <a
    href="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  >
    <svg className="bi me-2" width={40} height={32}>
      <use xlinkHref="#bootstrap" />
    </svg>
    <span className="fs-4">Sidebar</span>
  </a>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <a href="#" className="nav-link active" aria-current="page">
        <svg className="bi me-2" width={16} height={16}>
          <use xlinkHref="#home" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <a href="#" className="nav-link text-white">
        <svg className="bi me-2" width={16} height={16}>
          <use xlinkHref="#speedometer2" />
        </svg>
        Dashboard
      </a>
    </li>
    <li>
      <a href="#" className="nav-link text-white">
        <svg className="bi me-2" width={16} height={16}>
          <use xlinkHref="#table" />
        </svg>
        Orders
      </a>
    </li>
    <li>
      <a href="#" className="nav-link text-white">
        <svg className="bi me-2" width={16} height={16}>
          <use xlinkHref="#grid" />
        </svg>
        Products
      </a>
    </li>
    <li>
      <a href="#" className="nav-link text-white">
        <svg className="bi me-2" width={16} height={16}>
          <use xlinkHref="#people-circle" />
        </svg>
        Customers
      </a>
    </li>
  </ul>
  <hr />  
  <div className="dropdown">
    <a
      href="#"
      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/mdo.png"
        alt=""
        width={32}
        height={32}
        className="rounded-circle me-2"
      />
      <strong>mdo</strong>
    </a>
    <ul
      className="dropdown-menu dropdown-menu-dark text-small shadow"
      aria-labelledby="dropdownUser1"
    >
      <li>
        <a className="dropdown-item" href="#">
          New project...
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Settings
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Profile
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Sign out
        </a>
      </li>
    </ul>
  </div>
</div>

    
  )
}

export default Navbar