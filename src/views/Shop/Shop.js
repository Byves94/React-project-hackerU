import ProductList from "./ProductList.js";
import SearchBar from "../../Searchbar/Searchbar";
import "./Shop.css";


function Shop() {
    return (
        <>
            <SearchBar />
            <h1 className="Shop-title">The Shop</h1>
            <div className="Shop-body">
            <ProductList/>
            </div>
        </>
    );
}

export default Shop;