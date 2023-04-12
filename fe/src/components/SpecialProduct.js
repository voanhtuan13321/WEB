import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <>
        <div className='col-4 mb-3'>
            <div className='special-product-cart'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src="images/watch.jpg" className='img-fluid'/>
                    </div>
                    <div className="special-product-content">
                        <h5 className='brand'>Havels</h5>
                        <h6 className='title'>
                            Samsung Galaxy Node10+ Monile Phone; Sim...
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='red-p'>$100 <strike>$200</strike></span>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5 day</b>
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle bg-warning p-2'>1</span>:
                                <span className='badge rounded-circle bg-warning p-2'>1</span>:
                                <span className='badge rounded-circle bg-warning p-2'>1</span>
                            </div>
                        </div>
                        <div className='prod-count my-3'>
                                <p>Product : 5</p>
                                <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                        <Link className='button'>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SpecialProduct