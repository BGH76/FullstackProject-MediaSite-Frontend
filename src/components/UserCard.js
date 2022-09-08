import React from "react";

import { httpAddFriend } from "../actions";

const UserCard = (props) => {

    const addFriendRequest = () => {
        httpAddFriend(localStorage.getItem('userId'), props.id);
    }

    return(
        <div className="ui cards user-list">
            <div className="card">
                <div className="header user-list-header">
                    {`${props.name} ${props.lastname}`}
                </div>
                <div className="ui bottom attached button" onClick={() => addFriendRequest()}>
                    <i className="add icon"></i>
                    Add Friend
                </div>
            </div>
        </div>
    );
}
export default UserCard;