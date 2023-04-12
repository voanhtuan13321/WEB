import React from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {
  return (
    <div className='col-3'>
      <div className='blog-cart'>
        <div className='cart-image'>
            <img src='images/blog-1.jpg' className='img-fluid'/>
        </div>
        <div className='blog-content'>
            <p className='date'>1 Desc 2022</p>
            <h5 className='title'>.............................</h5>
            <p className='desc'>loree......................</p>
            <Link to='' className='button'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCart
