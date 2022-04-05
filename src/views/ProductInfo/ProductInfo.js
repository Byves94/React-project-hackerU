import { useParams } from "react-router-dom";
import products from "../../Data/products";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductInfo.css';
import _cart from "../../Data/cart";

export default function ProductInfo() {
    let { productName } = useParams();
    let currentObj = getCurrentObj(productName);

    const addToCart = () => {
        _cart.push(currentObj);
        localStorage.setItem('cart', JSON.stringify(_cart));
        alert('Item added');
        console.log(_cart)
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
    )
}

const getCurrentObj = (name) => {
    let currentObj;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            currentObj = products[i];
            break;
        }
    }
    return currentObj;
}