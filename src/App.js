import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import ContactUs from './Components/Contact/Contact';
import ShopOurBooks from './Components/ShopOurBooks/ShopOurBooks';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          {/* <Route path='/' element={<Shop />} /> */}

          {/* <Route path='/men' element={<ShopCategory banner={banner_mens} category="About Us" />} /> */}

          {/* <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} /> */}

          {/* <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} /> */}

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Contact-us' element={<ContactUs />} />
          <Route path='/ShopOurBooks' element={<ShopOurBooks />} />
          <Route path="/DetailsPage/*" element={<Product />}>
          <Route path=":productId" element={<DetailsPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
