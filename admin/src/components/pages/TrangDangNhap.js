import React, { useState } from 'react'
import axios from 'axios'
import { Link,  useNavigate} from "react-router-dom";
import api from '../urlApi';
const TrangDangNhap = () => {
    const navigate = useNavigate();

    const [input,setInput] = useState({
        taiKhoan:'',
        matKhau:''
    })
    console.log(input);

    function handleInput(e){
        let nameKey = e.target.name;
        let nameValue = e.target.value;
        setInput(state => ({...state,[nameKey]:nameValue}))
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            taiKhoan:input.taiKhoan,
            matKhau:input.matKhau
        }
            

            axios.post(api.login,data)
            .then(res => {
                if(res.data.status === 'ok'){
                    navigate('/admin')
                }
                else{
                    navigate('')
                }
                console.log(res);

            })
            .catch(errors => console.log(errors))
        

    }

    return (
        <div className='d-flex justify-content-center py-5'>
            <form className="form" onSubmit={handlerSubmit}>
                <p className="form-title">Login</p>
                <div className="input-container">
                    <input type="text" name='taiKhoan' onChange={handleInput} placeholder="Nhập tài khoản" />
                    <span></span>
                </div>
                <div className="input-container">
                    <input type="password" name='matKhau'  onChange={handleInput} placeholder="Enter password" />
                </div>
                <button type="submit" className="submit">
                Đăng nhập
                </button>
                <p className="signup-link">
                    No account?
                    <Link to='/dang_ki'>Đăng kí</Link>
                    <Link >?Quên mật khấu</Link>
                </p>
            </form>
        </div>
    )
}

export default TrangDangNhap
