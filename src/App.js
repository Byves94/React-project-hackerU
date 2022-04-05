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

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Shop/:productName' element={<ProductInfo />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='SearchNotFound' element={<SearchNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
