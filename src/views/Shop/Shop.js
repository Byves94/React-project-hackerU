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
            {/* {products.map(item => <ProductShow name={item.name} image={item.image} description={item.description} price={item.price} />)} */}
            </div>
        </>
    );
}

export default Shop;