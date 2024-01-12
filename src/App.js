import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import ContactUs from './Components/Contact/Contact';
import ShopOurBooks from './Components/ShopOurBooks/ShopOurBooks' 
import DetailsPage from './Components/DetailsPage/DetailsPage';
import Navbar from './Components/Navbar/Navbar';
import Arabi21 from './Components/Arabi21/Arabi21';
import About from './Components/About/About';
import OurCatalogues from './Components/Catalogues/OurCatalogues';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Contact-us' element={<ContactUs />} />
          <Route path="/shop" element={<ShopOurBooks />} />
          <Route path="/DetailsPage/*" element={<Product />}>
            <Route path=":productId" element={<DetailsPage />} />
          </Route>
          <Route path="/Arabi21" element={<Arabi21 />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurCatalogues" element={<OurCatalogues />} />
          <Route path="/Home" element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
