import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../urlApi';
import { Link,useNavigate } from 'react-router-dom';

const TrangThongKe = () => {

  const [data,setData] = useState([])


    useEffect(()=>{
        axios.get(api.lichSuMua)
        .then(res => {
            setData(res.data.data)
        })
        .catch(error =>{
            console.log(error);
        })
    })

    const renderCuaHang = () => {
      return data.map((item,index)=>{
        return(
          <tr key={index}>
          {/* {console.log(item)} */}
            <th scope="row">{index}</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>
            <button>Sửa</button>
            </td>
          </tr>
        ) 
      })
    }



  return (
    <>
      



      <div className='py-5'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Tên sách</th>
                <th scope="col">Tác giả</th>
                <th scope="col">Dia chỉ</th>
                <th scope="col">Website</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {renderCuaHang()}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default TrangThongKe
