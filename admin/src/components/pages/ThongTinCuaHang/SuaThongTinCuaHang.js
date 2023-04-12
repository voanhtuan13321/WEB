import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../urlApi';

const SuaThongTinCuaHang = () => {

  const item = JSON.parse(localStorage.getItem('cuahang'))
  const [input,setInput] = useState({
    id:item.id,
    tenCuaHang:item.tenCuaHang,
    moTa:item.moTa,
    soDienThoai:item.soDienThoai,
    diaChi:item.diaChi,
    website:item.website,
    email:item.email
  })

  console.log(input);
  const [a,setA] = useState(false)

 

  const handleInput = (e) => {
    let nameKey = e.target.name;
    let nameValue = e.target.value;
    setInput(state => ({...state,[nameKey]:nameValue}))
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
   
    const data = {
        id:input.id,
        tenCuaHang:input.tenCuaHang,
        moTa:input.moTa,
        soDienThoai:input.soDienThoai,
        diaChi:input.diaChi,
        website:input.website,
        email:input.email
    }
    axios.post(api.cuaHang,data)
    .then(res => {
      console.log(res);
      setA(!a)
    })
    .catch(errors => console.log(errors))
  }

  
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center'>
          <form onSubmit={handlerSubmit} className="width-500">
            <p className="form-title py-4">Thêm thông tin của hàng</p>
            <div className='d-flex'>
              <div className='pr-5'>
                <div className="input-container">
                  <label className="input_label">
                    Nhà xuất bản
                  </label>
                  <input type="text" name='tenCuaHang' value={input.tenCuaHang} onChange={handleInput} placeholder="Nhập tên cửa hàng" />
                  <span></span>
                </div>
                <div className="input-container">
                  <label className="input_label">
                    Nhà xuất bản
                  </label>
                  <input type="text" name='moTa' value={input.moTa} onChange={handleInput} placeholder="Nhập mô tả" />
                </div>
                  <label className="input_label">
                    Nhà xuất bản
                  </label>
                <div className="input-container">
                  <input type="text" name='soDienThoai' value={input.soDienThoai} onChange={handleInput} placeholder="Nhập số điện thoại" />
                </div>
              </div>
              <div>
                  <div className="input-container">
                    <label className="input_label">
                      Nhà xuất bản
                    </label>
                    <input type="text" name='diaChi' value={input.diaChi} onChange={handleInput} placeholder="Nhập số điạ chỉ"/>
                  </div>
                  <div className="input-container">
                    <label className="input_label">
                      Nhà xuất bản
                    </label>
                    <input type="text" name='website' value={input.website} onChange={handleInput} placeholder="Website" />
                  </div>
                  <div className="input-container pb-3">
                    <label className="input_label">
                      Nhà xuất bản
                    </label>
                    <input type="text" name='email' value={input.email} onChange={handleInput} placeholder="Email" />
                  </div>
              </div>
            </div>

            <button type="submit" className="rounded-pill btn bg-secondary btn-width">
              Cập nhật
            </button>
          </form>
        </div>
    </div>
  )
}

export default SuaThongTinCuaHang
