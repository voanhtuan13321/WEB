import React, { useState ,useEffect} from 'react'
import ProductCart from '../components/ProductCart';
import dataSachs from '../data/dataSach'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import api from '../urlApi';
import axios from 'axios'
const Home = () => {
  const [data,setData] = useState([])

  const [sachs,setSachs] = useState(dataSachs)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };


  // useEffect(()=>{
  //   axios.get(api.sach)
  //   .then((res)=>{
  //     setData(res.data.data);
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   })
  // })




  return (
    <>
    {/*  */}
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner'>
                <img className='img-fluid rounded-3 height-vh' src='https://cdn0.fahasa.com/media/magentothem/banner7/PLATINUM_NCC1980_T42023_Slide_840x320.png'/>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-12 justify-content-between align-items-center'>
                <div className='small-banner'>
                  <img className='img-fluid rounded-3' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2023/FahasaT4w2_mainbanner_Subbanner_392x156.jpg'/>
                </div>
                <div className='small-banner'>
                  <img className='img-fluid rounded-3' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2023/FahasaT4w2_mainbanner_Subbanner_392x156.jpg'/>

                </div>
                <div className='small-banner'>
                  <img className='img-fluid rounded-3' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2023/FahasaT4w2_mainbanner_Subbanner_392x156.jpg'/>

                </div>
                <div className='small-banner'>
                  <img className='img-fluid rounded-3' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2023/FahasaT4w2_mainbanner_Subbanner_392x156.jpg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danh mục sản phẩm */}
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className=''><h5>Danh mục sản phẩm</h5></div>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service-02.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service-03.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service-04.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
                <div className='d-flex align-item-center gap-15'>
                  <img className='image' src="images/service-05.png"/>
                  <div className=''>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all oder over</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      <section className='py-5'>
        <div className='container-xxl'>
          <div className='row'>
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
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cammera</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Phần sách .... */}
      <section className='featured-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Tên phần sách..</h3>
            </div>



            <> 
              <Slider {...settings}>
                {
                  data.map((item,index)=>(
                    <div className='col-2' key={index}>
                      <ProductCart item={item}/>
                    </div>
                    
                  ))
                }
              </Slider>
              <div className='col-12 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary'>Xem thêm</button>
              </div>
            </>
            



          </div>
        </div>
      </section>
      {/* Phần sách .... */}

      {/* Phần sách .... */}
      <section className='featured-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Tên phần sách..</h3>
            </div>



            <> 
              <Slider {...settings}>
                {
                  sachs.map((item,index)=>(
                    <div className='col-2' key={index}>
                      <ProductCart item={item}/>
                    </div>
                    
                  ))
                }
              </Slider>
              <div className='col-12 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary'>Xem thêm</button>
              </div>
            </>
            



          </div>
        </div>
      </section>
      {/* Phần sách .... */}

      {/* Phần sách .... */}
      <section className='featured-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Tên phần sách..</h3>
            </div>



            <> 
              <Slider {...settings}>
                {
                  sachs.map((item,index)=>(
                    <div className='col-2' key={index}>
                      <ProductCart item={item}/>
                    </div>
                    
                  ))
                }
              </Slider>
              <div className='col-12 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary'>Xem thêm</button>
              </div>
            </>
            



          </div>
        </div>
      </section>
      {/* Phần sách .... */}


      {/* Phần sách .... */}
      <section className='featured-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Tên phần sách..</h3>
            </div>
            <> 
              <Slider {...settings}>
                {
                  sachs.map((item,index)=>(
                    <div className='col-2' key={index}>
                      <ProductCart item={item}/>
                    </div>
                    
                  ))
                }
              </Slider>
              <div className='col-12 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary'>Xem thêm</button>
              </div>
            </>
           
          </div>
        </div>
      </section>
      {/* Phần sách .... */}

    </>
  )
}

export default Home