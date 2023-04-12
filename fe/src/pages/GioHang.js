import React from 'react'

const GioHang = () => {
  return (
    <div>
        <h3>Giỏ hàng của bạn</h3>
        <div className='pb-5'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sách</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
            </tbody>
            <tfoot><button>Thanh toán</button></tfoot>
        </table>
        </div>
    </div>
  )
}

export default GioHang
