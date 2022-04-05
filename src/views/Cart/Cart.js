import { Button } from "@mui/material";
import './Cart.css';
import ItemShow from "./ItemShow.js";

function Cart() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let totalPrice;
    const clearCart = () => {
        localStorage.removeItem('cart');
        alert('Cart has been cleared');
        window.open('/Cart','_self');
    }
    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {(cart !== null) ?
                <ul className="items">
                    {cart.map(item => { totalPrice = + item.price; return <ItemShow key={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />; })}
                </ul> :
                <p>Your cart is empty</p>}
            {totalPrice > 0 ? <div className="price">Total price: {totalPrice}$</div> : <></>}
            <Button variant="contained" color='secondary' size="large" onClick={clearCart}>clearCart</Button>
        </div>
    )
}

export default Cart;