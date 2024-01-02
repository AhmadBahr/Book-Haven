import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Profile from './Components/Profile/Profile'
import ShopOurBooks from'./Components/ShopOurBooks/ShopOurBooks'




function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner}category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner={kids_banner}category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path="/signup" component={<LoginSignup/>} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/ShopOurBooks' element={<ShopOurBooks/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
