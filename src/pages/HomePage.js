import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import PostBox from "../components/PostBox";

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
            try {
                const temp = await httpGetContent(localStorage.getItem('userId'));
                setPostList(temp);
            } catch(e) {
                console.log(e);
            }
        }
        getData();
    },[]);

    const renderList = () => {
        if(!postList) return;
        return postList.map((postList) => {
            return(
                <div key={postList.postId}  className="ui container post-list">
                <PostCard name={postList.name} date={postList.date} post={postList.post} comment={postList.comments} postId={postList.postId}/>
                </div>
            );    
        })
    }

    return(
        <div className="home-page"> 
            <Header />
            <PostBox />
            {renderList()}
        </div>
    );
}
export default HomePage;