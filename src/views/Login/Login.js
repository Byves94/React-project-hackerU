import React from "react";
import './login.css';


function Login() {
    let username = "";
    let password = "";
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("users/users.json", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                let user;
                let trueLogin = false;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].userName.toLowerCase() === username.toLowerCase() && data[i].password.toLowerCase() === password.toLowerCase()) {
                        trueLogin = true;
                        user = data[i];
                        break;
                    }
                }
                if (trueLogin) {
                    alert("Success! You are logged in.");
                    localStorage.setItem("user", JSON.stringify(user));
                    window.open("/", "_self");
                }
                else
                    alert("Please check your login information");
            })
    }
    return (
        <form onSubmit={handleSubmit} method="post" className="login-form">
            {/* <div class="imgcontainer"> */}
            {/* <img src="img_avatar2.png" alt="Avatar" class="avatar" /> */}
            {/* </div> */}

            <div className="container">
                <label ><b>Username</b></label>
                <input type="text" placeholder="Enter Username" className="login-username" onChange={(text) => { username = text.currentTarget.value }} required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" className="login-pass" onChange={(text => { password = text.currentTarget.value })} required />

                <button type="submit">Login</button>
            </div>
        </form>
    );
}


export default Login;