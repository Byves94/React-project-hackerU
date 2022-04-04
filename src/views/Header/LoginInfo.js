import './LoginInfo.css'

function LoginInfo(props) {
    let obj = JSON.parse(props.user)
    const logOut = () => {
        localStorage.clear();
        window.open("/","_self");
    }

    return (
        <div className="login-info">
            {obj.userName}
            <br/>
            {obj.Email}
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default LoginInfo;