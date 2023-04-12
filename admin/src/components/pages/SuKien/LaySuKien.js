import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import api from '../../urlApi'
const LaySuKien = () => {
    const [suKien,setSuKien] = useState([])

    useEffect(()=>{
      axios.get(api.suKien)
        .then(res=>{
          console.log(res);
        })
        .catch(errors=>console.log(errors));
    },[]);

    // const renderSuKien = () => {
    //     return danhMuc.map((item,index)=>{
    //       return(
    //         <tr>
    //           <th scope="row">{index}</th>
    //           <td>{item.ten}</td>
    //           <td>{item.moTa}</td>
    //           <td>
    //             <Link to={'/admin/sua_danh_muc/'+ item.idDanhMuc}>Sửa</Link>
    //             <button>Xóa</button>
    //           </td>
    //         </tr>
    //       )
          
    //     })
        
    //   }

  return (
    <div>
      <div className='py-5'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Nội dung</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr> */}
            {/* {renderSuKien()} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LaySuKien
