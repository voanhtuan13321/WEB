import React from 'react'
import { Link } from 'react-router-dom';
const ProductCart = (props) => {
  const {hinhAnh,idSach} = props.item

  return (
    <>
      <Link to={'/sanphamchitiet/' + idSach} className='product-cart position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link ><img src="images/wish.svg"/></Link>
        </div>
        <div className='product-image mb-4'>
          <img src={hinhAnh} alt='product' className='img-fluid'/>
        </div>
          <h5 className='fs-6 product-title position-absolute top-0 start-10'>
            20%
          </h5>
        <div className='product-details'>
          <h6 className='brand'>Tên Sách : </h6>
          <h5 className='product-title'>
            Sách giáo khoa
          </h5>
          <p className='price'>Giá : 100Đ</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
              <img src="images/add-cart.svg"/>
            </Link>
            <Link>
              <img src="images/view.svg"/>
            </Link>
            <Link>
              <img src="images/prodcompare.svg"/>
            </Link>
            <Link>
              <img src="images/add-cart.svg"/>
            </Link>
          </div>
        </div>
      </Link>
    </>
      
  )
}

export default ProductCart