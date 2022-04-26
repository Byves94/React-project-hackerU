import './LoginInfo.css'
import React from 'react';


function LoginInfo(props) {
    let obj = JSON.parse(props.user)
    const logOut = () => {
        localStorage.removeItem('user');
        window.open("/","_self");
    }

    return (
        <>
        <div className="login-info">
            <img src={obj.profilePic} alt={obj.userName} className='pfp' height='50'/>
            <div>{obj.userName}
            <br/>
            {obj.Email}
            </div>
        </div>
        <button onClick={logOut} className='logout'>LogOut</button>
        </>
    )
}

export default LoginInfo;