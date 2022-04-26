import React from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductInfo.css';
import _cart from "../../Data/cart";
import currentUser from "../../Data/userInfo";

function ProductInfo() {
    let { productName } = useParams();
    let currentObj = getCurrentObj(productName);

    const addToCart = () => {
        let user = JSON.parse(currentUser);
        let cartName = `${user.userName}'s cart`;
        
        if (currentUser !== null) {
            let tempObj = getCurrentObj(productName);
            tempObj.idCart = _cart.length;
            _cart.push(tempObj);
            console.log(_cart)
            localStorage.setItem(cartName, JSON.stringify(_cart));
            alert('Item added');
        }
        else {
            alert('Need to sign in to add to cart');
        }
    }


    return (
        <div className="product-info">
            <img src={(currentObj.image)} alt={currentObj.name} height="600" />
            <br />
            <h1 className="header">{currentObj.name}</h1>
            <br />
            <div className="description">{currentObj.description}</div>
            <Button variant="contained" endIcon={<AddShoppingCartIcon />} color='secondary' size="large" onClick={addToCart}>Add to cart</Button>
            <div className="price">{currentObj.price}$</div>
        </div>
    );
};

const getCurrentObj = (name) => {
    let currentObj;
    let _products = localStorage.getItem('products');
    let products = JSON.parse(_products)
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            currentObj = products[i];
            break;
        }
    }
    return currentObj;
}

export default ProductInfo;