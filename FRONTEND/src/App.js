import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ShopAll from './Pages/ShopAll';
import Men from './Pages/Men';
import Women from './Pages/Women';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import IconCarousel from './Components/TextWithIconsCarousel/TextWithIconsCarousel';
import Footer from './Components/Footer/Footer';
import { WhatsAppChatWidget } from './Components/WhatsAppChat/WhatsAppChatWidget';
import AboutUs from './Components/AboutUs/AboutUs';
import TermsAndConditions from './Components/AboutUs/TermsAndConditions';
import PrivacyPolicy from './Components/AboutUs/PrivacyPolicy';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import NotFound from './Pages/NotFound';
import PrivateRoute from './Components/PrivateRoute';
import ForgotPassword from './Components/account/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/account/ResetPassword/ResetPassword';
import AdminDashboard from './Pages/AdminDashboard'; // Ensure this import is correct


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/product/:productId" element={<ProductDisplay />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <WhatsAppChatWidget />
        <IconCarousel />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
