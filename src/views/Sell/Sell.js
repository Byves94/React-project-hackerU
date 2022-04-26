import React from "react";
import axios from "axios";
import { useState } from "react";
import products from "../../Data/products";
import "./Sell.css";

function Sell() {

    const [selectedFile, setSelectedFile] = useState(null);

    const fileChange = e => setSelectedFile(e.target.files[0]);

    const handleSubmission = (e) => {
        e.preventDefault();
        let itemName = document.getElementById('name').value;
        let itemDescription = document.getElementById('description').value;
        let itemPrice = document.getElementById('price').value;
        console.log(itemDescription);
        console.log(itemName)
        console.log(itemPrice)
        console.log(selectedFile)
        const formData = new FormData();

        formData.append('file',
            selectedFile,
            selectedFile.name
        );
        console.log(formData);
        axios.post("/images", formData, {
            headers: {
              "Content-Type": selectedFile.type,
            },
          });

        // fetch(
        //     '/public/images',
        //     {
        //         method: 'GET',
        //     }
        // )
        //     .then((response) => console.log(response))
        //     .then((result) => {
        //         console.log('Success:', result);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });


        //     let newObj = {
        //         id: products.length+1,
        //         name: itemName,
        //         image:"/images/" + file,
        //         price: itemPrice,
        //         description: itemDescription
        //     }
        //     products.push(newObj);
        //     console.log(products)
        //     localStorage.setItem("products", products);
    }

    return <div className="sell">
        <h1>Sell</h1>
        <form onSubmit={handleSubmission}>
            <label htmlFor="name">Name:</label> <br />
            <input type="text" id='name' required></input> <br />

            <label htmlFor="img">Image:</label> <br />
            <input type="file" accept=".jpg,.png" id='file' onChange={fileChange}></input> <br />

            <label htmlFor="description">Description:</label> <br />
            <input type="text" id='description' required></input> <br />

            <label htmlFor="price">Price:</label> <br />
            <input type="number" id='price' required></input> <br />

            <button type="submit">Add Item</button>
        </form>
    </div>
}

export default Sell;