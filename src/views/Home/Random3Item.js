import { useState } from "react";
import products from "../../Data/products"
import { NavLink } from "react-router-dom";

 const Random3Item = () => {
//     let randomProduct1 = randomItem();
//     let randomProduct2 = randomItem();
//     let randomProduct3 = randomItem();
const [Product1, SetProduct1] = useState(() => randomItem());
const [Product2, SetProduct2] = useState(() => randomItem());
const [Product3, SetProduct3] = useState(() => randomItem());
let path1 = `/Shop/${Product1.name}`;
let path2 = `/Shop/${Product2.name}`;
let path3 = `/Shop/${Product3.name}`;

while (Product1.name == Product2.name || Product2.name == Product3.name || Product1.name == Product3.name) {
    SetProduct1(() => randomItem());
    SetProduct2(() => randomItem());
    SetProduct3(() => randomItem());
}

return (
    <>
        <div>
            <NavLink to={path1}><img src={(Product1.image)} alt={Product1.name} height="200" /></NavLink>
            <br />
            {Product1.name}
            <br />
            {Product1.price}$
        </div>
        <div>
            <NavLink to={path2}><img src={(Product2.image)} alt={Product2.name} height="200" /></NavLink>
            <br />
            {Product2.name}
            <br />
            {Product2.price}$
        </div>
        <div>
            <NavLink to={path3}><img src={(Product3.image)} alt={Product3.name} height="200" /></NavLink>
            <br />
            {Product3.name}
            <br />
            {Product3.price}$
        </div>
    </>
)
}

const randomItem = () => {
    return products[Math.floor(Math.random() * products.length)];
}

export default Random3Item;