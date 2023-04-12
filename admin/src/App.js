
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import TrangChu from './components/pages/TrangChu';
import TrangQuanLyDanhMuc from './components/pages/DanhMuc/TrangQuanLyDanhMuc'
import TrangQuanLyNguoiDung from './components/pages/NguoiDung/TrangQuanLyNguoiDung';
import TrangQuanLySanPham from './components/pages/SanPham/TrangQuanLySanPham'
import TrangSuKien from './components/pages/SuKien/TrangSuKien'
import TrangThongKe from './components/pages/LichSuMua/TrangThongKe'
import TrangDangNhap from './components/pages/TrangDangNhap';
import TrangDangKi from './components/pages/TrangDangKi';
import SuaDanhMuc from './components/pages/DanhMuc/SuaDanhMuc';
import LayDanhMuc from './components/pages/DanhMuc/LayDanhMuc';
import LaySuKien from './components/pages/SuKien/LaySuKien';
import SuaSuKien from './components/pages/SuKien/SuaSuKien';
import TrangThongTinCuaHang from './components/pages/ThongTinCuaHang/TrangThongTinCuaHang';
import SuaThongTinCuaHang from './components/pages/ThongTinCuaHang/SuaThongTinCuaHang';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TrangDangNhap/>}/>
        <Route path='/dang_ki' element={<TrangDangKi/>}/>
        <Route path='/admin' element={<TrangChu/>}>

            <Route path='/admin/trang_thong_tin_cua_hang' element={<TrangThongTinCuaHang/>}/> 
            <Route path='/admin/trang_sua_cua_hang' element={<SuaThongTinCuaHang/>}/> 

            <Route path='/admin/trang_quan_ly_nguoi_dung' element={<TrangQuanLyNguoiDung/>}/> 

            <Route path='/admin/trang_quan_ly_san_pham' element={<TrangQuanLySanPham/>}/> 

            <Route path='/admin/trang_su_kien' element={<TrangSuKien/>}/> 
            <Route path='/admin/lay_su_kien' element={<LaySuKien/>}/> 
            <Route path='/admin/sua_su_kien' element={<SuaSuKien/>}/> 

            <Route path='/admin/trang_thong_ke' element={<TrangThongKe/>}/>

            <Route index path='/admin/trang_quan_ly_danhmuc' element={<TrangQuanLyDanhMuc/>}/> 
            <Route path='/admin/sua_danh_muc' element={<SuaDanhMuc/>}/> 



            <Route path='/admin/thong_ke' element={<TrangThongKe/>}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
