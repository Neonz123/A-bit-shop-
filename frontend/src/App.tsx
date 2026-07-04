// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


// Import your page components (create them next)
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sale from './pages/Sale';
import NewArrivals from './pages/NewArrivals';
import Brands from './pages/Brands';
import Cart from './pages/Cart';
// import ProtectedRoute from './components/ProtectRoute/ProtectRoute';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail'; // Assuming you have a ProductDetail page


const App: React.FC = () => {
  return (
    <BrowserRouter>
     <Navbar />
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/new" element={<NewArrivals />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cart" element={<Cart />} />
      
    <Route
  path="/profile"
  element={
   
      <Profile />
  }
/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
