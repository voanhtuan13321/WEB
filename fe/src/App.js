import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Promotions from './pages/Promotions';
import ThayDoiTaiKhoanMatKhau from './pages/ThayDoiTaiKhoanMatKhau';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='dang_nhap' element={<Login/>}/>
            <Route path='dang_ki' element={<Register/>}/>
            <Route path='sanphamchitiet/:id' element={<ProductDetails/>}/>
            <Route path='sukienkhuyenmai' element={<Promotions/>}/>
            <Route path='thaydoitaikhoan' element={<ThayDoiTaiKhoanMatKhau/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
