import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TrangDangKi = () => {
    const [input,setInput] = useState({})

    function handleInput(e){
        let nameKey = e.target.name;
        let nameValue = e.target.value;
        setInput(state => ({...state,[nameKey]:nameValue}))
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <div className='container-xxl  py-5 '>
        <div className="row justify-content-center">
            <div className='col-4'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to='/'>Đăng nhap</Link>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default TrangDangKi
