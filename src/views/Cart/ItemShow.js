import React from 'react';
import { Link } from "react-router-dom";
import currentUser from '../../Data/userInfo';


const ItemShow = ({ image, name, price, idCart, removeItem }) => {
  let path = `/Shop/${name}`;
  let user = JSON.parse(currentUser);
  let cartName = `${user.userName}'s cart`;
  let currentCart = JSON.parse(localStorage.getItem(cartName));
  const removeFromCart = () => {
    if (idCart === 0)
      currentCart.splice(idCart, idCart + 1)
    // else if ()
    else
      currentCart.splice(idCart, idCart)
    for (let i = 0; i < currentCart.length;i++){
      currentCart[i].idCart = i;
    }
    if (currentCart.length === 0)
      localStorage.removeItem(cartName)
    else
      localStorage.setItem(cartName, JSON.stringify(currentCart));
    alert('Item removed');
    removeItem();
  }

  return (
    <li className="item">
      <div className="image">
        <Link to={path}><img src={(image)} alt={name} height="150" /></Link>
        <button onClick={removeFromCart}>Remove item</button>
      </div>
      <div className="description">
        <h4><Link to={path}>{name}</Link></h4>
      </div>
      <div className="price">
        {price}$
      </div>
    </li>
  );
}

export default ItemShow;