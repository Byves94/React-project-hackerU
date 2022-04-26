import { Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemShowManage from "./ItemShowManage";
import activeCarts from "./activeCarts";
import "./SpecifiCart.css";

function SpecifiCart() {
    let { productName: Name } = useParams();
    let currentObj = getCurrentObj(Name);
    let totalPrice = 0;
    let path = `${Name}'s cart`;
    let [currentCart, setCurrentCart] = useState(JSON.parse(localStorage.getItem(path)));

    const clearCart = () => {
        console.log(path)
        localStorage.removeItem(path);
        alert('Cart has been cleared');
        setCurrentCart(JSON.parse(localStorage.getItem(path)))
    }

    const removeFromCart = () => {
        setCurrentCart(JSON.parse(localStorage.getItem(path)))
    }

    return (
        <div className="cart">
            <h1>{Name}'s Cart</h1>
            {(currentCart !== null) ?
                <ul className="items">
                    {currentCart.map(item => { totalPrice += item.price; return <ItemShowManage key={item.id} name={item.name} price={item.price} description={item.description} image={item.image} idCart={item.idCart} user={currentObj} removeItem={removeFromCart} />; })}
                </ul> :
                <p>{Name}'s cart is empty</p>}
            {totalPrice > 0 ? <div className="price">Total price: {totalPrice.toFixed(2)}$</div> : <></>}
            <Button variant="contained" color='secondary' size="large" onClick={clearCart} >clearCart</Button>
        </div>
    )
}

const getCurrentObj = (name) => {
    let currentObj;
    for (let i = 0; i < activeCarts.length; i++) {
        if (activeCarts[i].Key === name) {
            currentObj = activeCarts[i];
            break;
        }
    }
    return currentObj;
}




export default SpecifiCart;