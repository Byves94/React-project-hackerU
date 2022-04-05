import { NavLink } from "react-router-dom";
import './header.css';
import currentUser, { isUserOnline } from '../../Data/userInfo';
import LoginInfo from './LoginInfo.js';


function Header() {
    return (
        <>
            <header className="App-header" >
                <NavLink to="/" className="title">
                    B u y D u c k s
                </NavLink>
                {isUserOnline() ? (<LoginInfo user={currentUser} />) :
                    <nav className="login">
                        <NavLink to="/Login" >Login</NavLink> | <NavLink to="/">Register</NavLink>
                    </nav>}
                <nav className="shopping">
                    <NavLink to="/Shop">Shop</NavLink> | <NavLink to="/Cart">Cart</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header;