import { NavLink } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="contant-info">
                <div className="footer-title">Contant and info:</div>
                Web-developer : Yves Barzelai <br />
                Email : Byves94@gmail.com <br />
                Phone : 0542131294 <br />
            </div >
            <img src={require('./duck-background.png')} alt="white duck" />
            <div className="footer-shop">
                <nav className="footer-shop-title">
                    <NavLink to="/Shop" >Shop:</NavLink>
                </nav>
                Buy <br/>
                Cart
            </div>
        </footer >
    );
}

export default Footer;