import React from 'react'
import Header from '../layout/Header'
import Navbar from '../layout/Navbar'
import { Outlet } from 'react-router-dom'
const TrangChu = () => {
  // const []

  return (
    <>
      <Header/>
      <section className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='border border-primary'>
              <Navbar/>
            </div>
          </div>
          <div className='col-9'>
            <Outlet/>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrangChu