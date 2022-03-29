import React from "react";
import './login.css';

function Login() {
    return (
        <form action="action_page.php" method="post" className="login-form">
            {/* <div class="imgcontainer"> */}
                {/* <img src="img_avatar2.png" alt="Avatar" class="avatar" /> */}
            {/* </div> */}

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" className="login-username" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" className="login-pass" required />

                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;