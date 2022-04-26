import React from "react";
import { Link } from "react-router-dom";
import activeCarts from "./activeCarts";
import "./ManageCarts.css";

// export let {activeCarts} = [];
function ManageCarts() {

    console.log(activeCarts)
    // let nameValues = [];

    // fetch("users/users.json", {
    //     method: "GET",
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let userString;
    //         let user;
    //         let _activeCarts = [];
    //         let _nameValues = [];
    //         for (let i = 0; i < data.length; i++) {
    //             userString = `${data[i].userName}'s cart`;
    //             user = JSON.parse(localStorage.getItem(userString));
    //             if (user !== null) {
    //                 user.Key = `${data[i].userName}`;
    //                 _activeCarts.push(user);
    //                 _nameValues.push(user.Key);
    //             }
    //         }
    //         // console.log(_activeCarts[0].Key)
    //         // console.log(JSON.stringify(_activeCarts))
    //         localStorage.setItem('tempNames',JSON.stringify(_nameValues));
    //         localStorage.setItem('allCarts',JSON.stringify(_activeCarts));
    //         // console.log(JSON.stringify(_activeCarts));
    //         // console.log(typeof(activeCarts[0]));
    //         // activeCarts.map(item => console.log(item));
    //     });
    // activeCarts = JSON.parse(localStorage.getItem('allCarts'));
    // nameValues = JSON.parse(localStorage.getItem('tempNames'));
    // for (let i=0;i<activeCarts.length;i++){
    //     activeCarts[i].Key = nameValues[i];
    // }
    // localStorage.removeItem('allCarts');
    // localStorage.removeItem('tempNames');
    // console.log(activeCarts);
    return (
        <div className="Manage-carts">
            <h1>Manage Carts</h1>
            <ul>
                {activeCarts.map((item, i) => {
                    let path = `/ManageCarts/${item.Key}`
                    return <li key={i} className='users-list'>
                        <Link to={path}>{item.Key}'s Cart</Link>
                    </li>
                })}
            </ul>
            <p></p>
        </div>
    )
}

export default ManageCarts;