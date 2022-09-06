import React, { useState } from "react";
import { httpMakePost } from "../actions";

const PostBox = () => {

    const [postText, setPostText] = useState('');

    const submitPost = async () => {
        httpMakePost(localStorage.getItem('userId'), postText);
        setPostText('');
    }

    
    return(
        <div className="ui container post-box">
            <form>
                <textarea className="post-box" type="text" name="postText" value={`${postText}`} onChange={(e) => setPostText(e.target.value)} placeholder='Post'></textarea>
            </form>
            <button className="post-btn" onClick={()=>submitPost()}>Post</button>
        </div>
    );
}
export default PostBox;