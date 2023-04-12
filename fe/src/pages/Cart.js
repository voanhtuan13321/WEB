import React from 'react'
import ProductCart from '../components/ProductCart';
import dataSachs from '../data/dataSach'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import { useState,useEffect } from 'react';
import LichSuMuaHang from './LichSuMuaHang';
import GioHang from './GioHang';

const Cart = () => {
  const [sachs,setSachs] = useState(dataSachs)
  // Lấy tất cả trong giỏ hàng
  const [data,setData] = useState('')

  useEffect(()=>{
    axios.get()
  })

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className='container py-5'>

        <>
          <GioHang/>
        </>

        <>
          <LichSuMuaHang/>
        </>



        <h3>Các sản phẩm khác</h3>
        <section className='popular-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular</h3>
            </div>
            <Slider {...settings}>
              {
                sachs.map((item,index)=>(
                  <div className='col-2' key={index}>
                    <ProductCart item={item}/>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </section>
        
    </div>
    

   
    
  )
}

export default Cart