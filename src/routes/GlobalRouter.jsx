import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing/Index';
import Home from '../views/Home/Index';
import Detail from '../views/Detail/Index';
import Cart from '../views/Cart/Index';
import Checkout from '../views/Checkout/Index';
import Order from '../views/Order/Index';

const GlobalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}
export default GlobalRouter;