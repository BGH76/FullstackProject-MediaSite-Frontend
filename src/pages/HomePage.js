import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import Header from "../components/Header";
import PostCard from "../components/PostCard";

import { httpGetContent } from "../actions";

const HomePage = () => {
    const navigate = useNavigate();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('loggedIn') !== 'true') {
            navigate('/');
        }
    })

    useEffect(  () => {    
        async function getData() {
            await axios.get(`http://localhost:8080/user/friends_post/${localStorage.getItem('userId')}`)
        .then(function (response) {
            // console.log(response.data)
            setPostList(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
        }
        getData();
    },[]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const temp = await httpGetContent(localStorage.getItem('userId'));
    //         setPostList(temp);
    //     }
    //     fetchData();
    // },[])

    const renderList = () => {
        if(!postList) return;
        return postList.map((postList) => {
            return(
                <div key={postList.postId}  className="ui container post-list">
                <PostCard name={postList.name} date={postList.date} post={postList.post} comment={postList.comments}/>
                </div>
            );    
        })
    }

    return(
        <div className="home-page"> 
            <Header />
            {renderList()}
        </div>
    );
}
export default HomePage;