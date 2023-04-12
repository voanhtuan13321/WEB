import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import api from '../../urlApi';
import {useNavigate} from "react-router-dom";

const LayDanhMuc = () => {
  const navigate = useNavigate();
  const [danhMuc,setDanhMuc] = useState([]);


  useEffect(()=>{
    axios.get(api.getDanhMuc)
    .then(res=>{   
      setDanhMuc(res.data.data)
      })
    .catch(errors=>console.log(errors));
  },[]);


  function checkId(e){
    let getId=e.target.value;
    axios.delete(api.getDanhMucId + getId)
    .then(res=>{
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }

    const renderDanhMuc = () => {
      return danhMuc.map((item,index)=>{
        return(
          <tr>
            <th scope="row">{index}</th>
            <td>{item.ten}</td>
            <td>{item.moTa}</td>
            <td>
              <Link to={'/admin/sua_danh_muc/'+ item.idDanhMuc}>Sửa</Link>
              <button value={item.idDanhMuc}  onClick={checkId}>Xóa</button>
            </td>
          </tr>
        )
        
      })
      
    }


  return (
    <div className='py-5'>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên</th>
          <th scope="col">Mô tả</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {renderDanhMuc()}
      </tbody>
    </table>
  </div>
  )
}

export default LayDanhMuc
