import React from 'react';
import { NavLink } from "react-router-dom";
import { isUserAdmin } from "../../Data/userInfo";
import { isUserOnline } from '../../Data/userInfo';
import './footer.css';

function Footer() {
    const loginValidate = (e) => {
        if (!isUserOnline()) {
            e.preventDefault();
            alert('Must login to enter cart');
        }
    }
    return (
        <footer>
            <div className="contant-info">
                <div className="footer-title">Contant and info:</div>
                Web-developer : Yves Barzelai <br />
                Email : Byves94@gmail.com <br />
                Phone : 0542131294 <br />
            </div >
            <img src={require('./duck-background.png')} alt="white duck" className="img1" />
            <nav className="footer-shop">    
                    <NavLink to="/Shop" className="footer-shop-title" >Shop:</NavLink> <br/>
                    <NavLink to="/Shop" >Buy</NavLink> <br/>
                    <NavLink to="/Cart" onClick={loginValidate}>Cart</NavLink> 
            </nav>
            <img src={require('./duck-background.png')} alt="white duck" className="img2"/>
            {isUserAdmin() ? 
            <div className="admin">
                <div className="admin-title">Admin:</div>
                <nav>
                    <NavLink to="/ManageCarts">Manage carts</NavLink>
                </nav>
            </div> : <></>}
        </footer >
    );
}

export default Footer;