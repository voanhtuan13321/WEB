import React,{useState,useEffect} from 'react'
import ProductCart from '../components/ProductCart';
import dataSachs from '../data/dataSach'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../../src/urlApi'
const ProductDetails = () => {

  const params = useParams();
  const [sachs,setSachs] = useState(dataSachs)

  // lấy id người mua ra
  // localStorage.getItem

  // useEffect(()=>{
  //   axios.get(api.sachId + params.idSach)
  //   .then((res)=>{
  //     console.log(res);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // })


  // const buttonAdd = (value) => {
  //   console.log(value);
  // }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className='container py-5'>
      {/* {
        sachs.map((item,index)=>{ */}
          {/* <div className='row'>
            <div className='col-4'>
              <div className=''>
                <img className='img-fluid' src='https://cdn0.fahasa.com/media/catalog/product/n/g/nghigiaulamgiau_110k-01_bia-1.jpg'/>
              </div>
            </div>
            <div className='col-8 text-center'>
              <div className='d-flex justify-content-evenly'>
                <div className='p-5'>
                  <p>Tên :</p>
                  <p>Nhà cung cấp :</p>
                  <p>Nhà xuất bản :</p>
                  <p>Tác giả  :</p>
                  <p>Giá sách  :</p>
                </div>
                <div className='p-5'>
                  <p>Mô tả  :</p>
                  <p>Ngày thêm :</p>
                  <p>Ngày xuất bản</p>
                  <p>Ngày cập nhật</p>
                  <p>Số lượng</p>
                </div>
              </div>
              <button>Thêm vào giỏ hàng</button>
            </div>
          </div> */}

        <div className="">
          <div className="row">
            <div className='col-4'>
            <div className=''>
                <img className='img-fluid' src='https://cdn0.fahasa.com/media/catalog/product/n/g/nghigiaulamgiau_110k-01_bia-1.jpg'/>
              </div>            
            </div>
            <div className='col-8'>
              <div className="des-detail">
                <h1 className="title" itemProp="name">
                  Luật Hấp Dẫn Trong Tình Yêu
                </h1>
                
                <div className="author-tran">
                  <div className="author-list">
                    <h2 className="author"> Caterina Yolaine &nbsp;</h2>
                  </div>
                </div>

                
                  <div>
                    <div><p>Văn học nước ngoài</p></div>
                    <p> Nhà xuất bản</p>
                    <p>Mô tả : Nhà xuất bản</p>
                    <p> Khuyến mãi 20%</p>
                    <p>
                      Đánh giá : 10
                    </p>
                    <p><h3>Giá tiền : 100đ</h3></p>
                  </div>
        
                  <div className="">
                    <div className="">
                      <div className="d-flex">
                        <div>
                          Số lượng:
                        </div>
                        <button>Cộng</button>
                        <div className="">
                              <input
                                defaultValue={1}
                                name="quantity"
                              />
                        </div>
                        <button>Trừ</button>
                      </div>
                      <div className="mt-5">
                        <input
                          type="hidden"
                          id="productid"
                          name="productid"
                          defaultValue={1}
                        />
                        
                        <div className='d-flex'>
                          <button className="byn btn-primary ">Thêm vào giỏ hàng </button>
                          <button className="btn btn-primary">Mua ngay</button>
                        </div>
                      </div>
                      <div className='mt-5'>Đánh giá sản phẩm</div>
                    </div>        
                </div> 
              </div>
            </div>
            
          </div>
          
        </div>

        {/* })
      } */}
      
      <h3 className='pt-5'>Các sản phẩm khác</h3>
          {/* Phần sách .... */}
          <section className='featured-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Tên phần sách..</h3>
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
            


             <div className='col-12 d-flex align-items-center justify-content-center pt-5'>
              <button className=''>Xem thêm</button>
            </div>
          </div>
        </div>
      </section>
      {/* Phần sách .... */}
    
</div>
  )
}

export default ProductDetails