import React, {useState} from "react";
import './login.css';


function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    fetch('users.json')
        .then(res =>  res.json())
        .then(data => console.log(data))
    return (
        <form action="action_page.php" method="post" className="login-form">
            {/* <div class="imgcontainer"> */}
            {/* <img src="img_avatar2.png" alt="Avatar" class="avatar" /> */}
            {/* </div> */}

            <div className="container">
                <label ><b>Username</b></label>
                <input type="text" placeholder="Enter Username" className="login-username" onChange={(text) => {setUserName(text.target.value);console.log(username)}} required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" className="login-pass" onChange={(text => {setPassword(text.target.value);console.log(password)})} required />

                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;