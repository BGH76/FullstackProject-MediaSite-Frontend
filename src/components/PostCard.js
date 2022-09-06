import React, { useState } from "react";
import { httpPostComment } from "../actions";

const PostCard = (props) => {

    const [showComments, setShowComments] = useState('extra content post-comments');
    const [showTextField, setShowTextField] = useState('post-reply-textarea');
    const [text, setText] = useState('');

    const renderComments = () => {
        if(!props.comment)return;
        return Object.values(props.comment).map((m) => {
            return(
                <div key={m.commentId} className={`${showComments}`}>
                    <h5 className="comment-name">{m.commentName}</h5>
                    <p className="post comment">{m.comment}</p>
               </div>
            );
        })
    }
    
    const submitComment = async () => {
        await httpPostComment(props.postId, localStorage.getItem('userId'), text);
        setShowTextField('post-reply-textarea')
        setText('');
    }

    return(
        <div className="ui card">
            <div className="content">
                <div className="header">
                    {props.name}
                </div>
                <div className="meta">
                    {props.date}
                </div>
                <div className="description">
                    <p>
                        {props.post}
                    </p>
                </div>
            </div>
            <div className="extra content">
                <div className="ui grid">
                    <div className="eight wide column">
                        <i className="meta" onClick={() => setShowTextField('')}>reply</i>
                    </div>
                    <div className="eight wide column comments">
                    <i className="meta" onClick={()=>setShowComments(showComments==='extra content post-comments'?'extra content show': 'extra content post-comments')}>comments</i>
                    </div>
                </div>
            </div>
            <div className={`${showTextField}`}>
                <div className="ui form">
                    <div className="meta"></div>
                        <form>
                        <textarea type="text" name="textarea" value={`${text}`} onChange={(e) => setText(e.target.value)} placeholder='Enter comment'></textarea>
                        </form>
                    <button onClick={()=>submitComment()}>Submit</button>
                </div>
            </div>
            {renderComments()}
        </div>
    );
}
export default PostCard;