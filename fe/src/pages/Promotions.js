import React,{useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react';
import api from '../../src/urlApi'
const Promotions = () => {
    const [suKien,setSuKien] = useState([])

        useEffect(()=>{
        axios.get(api.suKien)
        .then(res=>{
          console.log(res);
          setSuKien(res.data.data)
        })
        .catch(errors=>console.log(errors));
    },[]);



  return (
    <div className='container-xxl py-5'>
        <div className='row'>
            {
                suKien.map(item => {
                    return (
                        <div className='col-4 py-2'>
                            <div className=' p-5 border border-secondary text-center'>
                                <p>
                                    {item.tieuDe}
                                </p>
                                <p>
                                    {item.noiDung}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Promotions