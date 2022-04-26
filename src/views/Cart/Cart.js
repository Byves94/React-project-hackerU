import React, { useState } from "react";
import { Button } from "@mui/material";
import currentUser from "../../Data/userInfo";
import './Cart.css';
import ItemShow from "./ItemShow.js";

function Cart() {
    let user = JSON.parse(currentUser);
    let cartName = `${user.userName}'s cart`;
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem(cartName)))
    let totalPrice = 0;

    const clearCart = () => {
        localStorage.removeItem(cartName);
        alert('Cart has been cleared');
        setCart(JSON.parse(localStorage.getItem(cartName)))
    }
    const removeFromCart = () => {
        setCart(JSON.parse(localStorage.getItem(cartName)))
    }

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {(cart !== null) ?
                <ul className="items">
                    {cart.map(item => { totalPrice += item.price; return <ItemShow key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} idCart={item.idCart} removeItem={removeFromCart} />; })}
                </ul> :
                <p>Your cart is empty</p>}
            {totalPrice > 0 ? <div className="price">Total price: {totalPrice.toFixed(2)}$</div> : <></>}
            <Button variant="contained" color='secondary' size="large" onClick={clearCart}>clearCart</Button>
        </div>
    )
}

export default Cart;