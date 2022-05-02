import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './views/Header/Header.js';
import Home from './views/Home/Home.js'
import './App.css';
import Footer from './views/Footer/Footer.js';
import Login from './views/Login/Login.js';
import Shop from './views/Shop/Shop.js';
import ProductInfo from './views/ProductInfo/ProductInfo.js';
import SearchNotFound from './views/SearchNotFound/SearchNotFound.js';
import Cart from './views/Cart/Cart.js';
import Sell from './views/Sell/Sell.js';
import NotAnAdmin from './views/NotAnAdmin/NotAnAdmin.js';
import { isUserAdmin } from './Data/userInfo.js';
import ManageCarts from './views/ManageCarts/ManageCarts.js';
import SpecifiCart from './views/ManageCarts/SpecifiCart.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Shop/:productName' element={<ProductInfo />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/SearchNotFound' element={<SearchNotFound />} />
        <Route path="/Sell" element={isUserAdmin() ? <Sell/> : <NotAnAdmin/>}/>
        <Route path="/ManageCarts" element={isUserAdmin() ? <ManageCarts/> : <NotAnAdmin/>}/>
        <Route path="ManageCarts/:productName" element={isUserAdmin() ? <SpecifiCart/> : <NotAnAdmin/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
