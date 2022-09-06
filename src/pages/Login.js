import React, { useState } from "react";
// import axios from "axios";
import { httpLogin } from "../actions";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('hidden');
    const [passwordError, setPasswordError] = useState('hidden');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username === '' || password === '') return;
        const result = await httpLogin(username, password);
        if(result.status === true && result.user_Id !== 0) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("userId", result.userId);
            localStorage.setItem("userName", result.userName);
            navigate('/home');
        }
        // else throw error that login is incorrect
    }

    const sendToCreateAccount = () => {
        navigate('/create_account');
    }

    return(
        <div className="loginbox">
            <div className="login-title">
                Go-Chat
            </div>
            <form className="ui form login" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" value={`${username}`} onChange={(e)=>setUsername(e.target.value)} onFocus={()=>setUsernameError('hidden')} placeholder="username" />
                    <div className={`error ${usernameError}`}>
                        Invalid username
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" value={`${password}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setPasswordError('hidden')} placeholder="Password" />
                    <div className={`error ${passwordError}`}>
                        Invalid password: must contain 8 characters and 1 special character
                    </div>
                </div>
                <div className="btn-div">
                    <button className="ui button" type="submit">Login</button>
                </div>
            </form>
            <div className="btn-div b">
                <button className="ui button" type="" onClick={sendToCreateAccount}>Create Account</button>
            </div>
        </div>
        
    );
}
export default Login;