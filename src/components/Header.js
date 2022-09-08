import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        navigate('/');
    }

    return(
        <div className="ui container grid header">
            <div className="six wide column login-title">
                Go-Chat
            </div>
            <div className="four wide column">
                <h1 className="user-name-title">{localStorage.getItem('userName')}</h1>
                <div className="ui grid">
                    <div className="eight wide column">
                        <h4 className="home-link" onClick={() => navigate('/home')}>Home</h4>
                    </div>
                    <div className="eight wide column">
                        <h4 className="add-friend-link" onClick={() => navigate('/add_friend')}>Add Friend</h4>
                    </div>
                </div>
            </div>
            <div className="six wide column logout">
                <button className="ui red button" onClick={()=>logout()}>Logout</button>
            </div>
        </div>
    );
}
export default Header;