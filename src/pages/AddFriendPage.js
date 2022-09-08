import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { useNavigate } from "react-router";
import { httpGetAllUsers } from "../actions";

const AddFriendPage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('loggedIn') !== 'true') {
            navigate('/');
        }
    })

    useEffect(() => {
        async function getUsers() {
            const temp = await httpGetAllUsers(localStorage.getItem('userId'));
            setUsers(temp);
            console.log(temp); // remove after testing
        }
        getUsers();
    },[])

    const renderUserList = () => {
        if(!users) return;
        return users.map((list) => {
            return (
                <div key={list.id} className="ui container">
                    <UserCard name={list.firstName} lastname={list.lastName} id={list.id} />
                </div>
            );
        })
    }

    
    return(
        <div>
            <Header />
            <div className="ui container">
                {renderUserList()}
            </div>  
        </div>
    );
}
export default AddFriendPage;