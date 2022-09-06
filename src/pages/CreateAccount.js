import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { httpCreateAccount } from "../actions";

const CreateAccount = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('hidden');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('hidden');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmedPassword, setErrorConfirmedPassword] = useState('hidden');

    // useEffect(() => {
    //     if(localStorage.getItem('Logged_In') !== 'true') {
    //         navigate('/');
    //     }
    // })

    const handleSubmit = (e) => {
        if(!email.match(/\S+@\S+\.\S+/)) {
            setErrorEmail('');
            return;
        }
        if(password.length < 8 || !password.match(/[~`!@#$%^&*?.]/)) {
            setErrorPassword('');
            return;
        }
        if(password !== confirmPassword) {
            setErrorConfirmedPassword('');
            return;
        }
        const temp = {
            firstName : firstname,
            lastname : lastname,
            email : email,
            password : password,
            userName : username
        }
        axios.post(`http://localhost:8080/create_profile`, temp);
        navigate('/')
        // httpCreateAccount(firstname, lastname, email, username,password);
    
    }

    return(
        <div className="create-account-box">
            <div className="login-title">
                Go-Chat
            </div>
            <form className="ui form login" onSubmit={handleSubmit}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" value={`${firstname}`} onChange={(e)=>setFirstname(e.target.value)} placeholder="First Name" />      
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={`${lastname}`} onChange={(e)=>setLastname(e.target.value)} placeholder="Last Name" />                
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" value={`${email}`} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setErrorEmail('hidden')} placeholder="Email" />
                    <div className={`error ${errorEmail}`}>
                        Invalid email:
                    </div>
                </div>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" value={`${username}`} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" value={`${password}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setErrorPassword('hidden')} placeholder="Password" />
                    <div className={`error ${errorPassword}`}>
                        Invalid password: must contain 8 characters and 1 special character
                    </div>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" value={`${confirmPassword}`} onChange={(e)=>setConfirmPassword(e.target.value)} onFocus={()=>setErrorConfirmedPassword('hidden')} placeholder="Confirm Password" />
                    <div className={`error ${errorConfirmedPassword}`}>
                        Passwords must match:
                    </div>
                </div>
                <div className="btn-div">
                    <button className="ui button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default CreateAccount;