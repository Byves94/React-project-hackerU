import React from "react";
import products from "../../Data/products";
import RandomItem from "./RandomItem";

const Random3Item = () => {
    let product1 = randomItem();
    let product2 = randomItem();
    let product3 = randomItem();

    while (product1.name === product2.name) {
        product2 = randomItem();
        // SetProduct2(() => randomItem());
    }

    while (product2.name === product3.name || product1.name === product3.name) {
        // SetProduct3(() => randomItem());
        product3 = randomItem();
    }

    let path1 = `/Shop/${product1.name}`;
    let path2 = `/Shop/${product2.name}`;
    let path3 = `/Shop/${product3.name}`;

    return (
        <>
            <RandomItem product={product1} linkPath={path1} />
            <RandomItem product={product2} linkPath={path2} />
            <RandomItem product={product3} linkPath={path3} />
        </>
    )
}

const randomItem = () => {
    return products[Math.floor(Math.random() * products.length)];
}

export default Random3Item;