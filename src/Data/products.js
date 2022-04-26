let products = [
{
    id: 1,
    name: "Yellow duck",
    image: "/images/Yellow-Duck.jpg",
    price: 10,
    description: "Yellow duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 2,
    name: "Red duck",
    image: "/images/Red-Duck.jpg",
    price: 11,
    description: "Red duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 3,
    name: "Blue duck",
    image: "/images/Blue-Duck.jpg",
    price: 14,
    description: "Blue duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 4,
    name: "Green duck",
    image: "/images/Green-Duck.jpg",
    price: 9.7,
    description: "Green duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 5,
    name: "Pink duck",
    image: "/images/Pink-Duck.jpg",
    price: 10.15,
    description: "Pink duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 6,
    name: "Purple duck",
    image: "/images/Purple-Duck.jpg",
    price: 15,
    description: "Purple duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 7,
    name: "Black duck",
    image: "/images/Black-Duck.jpg",
    price: 9,
    description: "Black duck for your shower! never feel alone and have all the fun u can get with him!"
},
{
    id: 8,
    name: "White duck",
    image: "/images/White-Duck.jpg",
    price: 9.9,
    description: "White duck for your shower! never feel alone and have all the fun u can get with him!"
}
];

localStorage.setItem("products",JSON.stringify(products));
// let storage = localStorage.getItem("products");

export default products;

