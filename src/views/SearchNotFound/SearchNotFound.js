import { Link } from "react-router-dom";
import './SearchNotFound.css';

function SearchNotFound() {
    return (
        <div className="Search-not-found">
        Couldn't found your search <br/>
        <Link to="/Shop">Go to Shop</Link>
        </div>
    )
}

export default SearchNotFound;