import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import currentUser, { isUserOnline } from '../../Data/userInfo';
import LoginInfo from './LoginInfo.js';


function Header() {
    const loginValidate = (e) => {
        if (!isUserOnline()) {
            e.preventDefault();
            alert('Must login to enter cart');
        }
    }
    return (
        <>
            <header className="App-header" >
                <NavLink to="/" className="title">
                    B u y D u c k s
                </NavLink>
                {isUserOnline() ? (<LoginInfo user={currentUser} />) :
                    <nav className="login">
                        <NavLink to="/Login" >Login</NavLink>
                    </nav>}
                <nav className="shopping">
                    <NavLink to="/Shop">Shop</NavLink> |<NavLink to="/Cart" onClick={loginValidate}>Cart</NavLink>
                </nav>
            </header>
        </>
    )
}



export default Header;