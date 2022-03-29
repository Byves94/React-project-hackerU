import React from 'react';
import ProductShow from './ProductShow.js';
import products from '../../Data/products.js';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className='product-list'>
      {products.map(item => <ProductShow name={item.name} image={item.image} description={item.description} price={item.price} key={item.id} />)}
    </div>
  );
}

export default ProductList;