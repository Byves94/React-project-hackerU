import { NavLink } from "react-router-dom";
import './header.css';


function Header() {
    return (
        <>
            <header className="App-header" >
                <NavLink to="/" className="title">
                    B u y D u c k s
                </NavLink>
                <nav className="login">
                    <NavLink to="/Login" >Login</NavLink> | <NavLink to="/">Register</NavLink>
                </nav>
                <nav className="shopping">
                    <NavLink to="/Shop">Shop</NavLink> | <NavLink to="/">Cart</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header;