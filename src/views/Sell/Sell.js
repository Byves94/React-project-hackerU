import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Sell.css";

function Sell() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState();

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(itemDescription);
        console.log(itemName)
        console.log(itemPrice)
        console.log(selectedFile)

        const formData = new FormData();
        formData.append('name', selectedFile.name);
        formData.append('file', selectedFile,);

        console.log(formData);
        axios
            .post('./images', formData)
            .then((res) => {
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"))


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
            <input type="text" id='name' onChange={e => setItemName(e.target.value)} required></input> <br />

            <label htmlFor="img">Image:</label> <br />
            <input type="file" accept=".jpg,.png" id='file' onChange={e => setSelectedFile(e.target.files[0])}></input> <br />

            <label htmlFor="description">Description:</label> <br />
            <input type="text" id='description' onChange={e => setItemDescription(e.target.value)} required></input> <br />

            <label htmlFor="price">Price:</label> <br />
            <input type="number" id='price' onChange={e => setItemPrice(e.target.value)} required></input> <br />

            <button type="submit">Add Item</button>
        </form>
    </div>
}

export default Sell;