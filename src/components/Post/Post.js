import React from "react";
import './Post.css'



const Post = (props) => {
    let likeClass, fixClass, funk, trashClass;
    if (props.like) {
        likeClass = 'fa-solid fa-heart fa-heart-red'
    } else {
        likeClass = 'fa-solid fa-heart'
    }

    if (props.fix) {
        fixClass = 'fa-solid fa-thumbtack fa-thumbtack-active'
        funk = null;
        trashClass = 'fa-solid fa-trash-can silver';
    } else {
        fixClass = 'fa-solid fa-thumbtack'
        funk = props.id;
        trashClass = 'fa-solid fa-trash-can';
    }
    return (
        <li className="Post" >
            <div className="Post_text Post_text-cross"> 
                {props.text}
            </div>
            <div className="Post_buttons">
                <button 
                    className="Post_button" 
                    onClick={() => props.onlike(props.id)}>
                    <span className={likeClass}></span>
                </button>
                <button 
                    className="Post_button"
                    onClick={() => {props.onfix(props.id)}}>
                    <i className={fixClass}></i>
                </button>
                <button 
                    onClick={() => props.deletePost(funk)}
                className="Post_button">
                    <i className={trashClass}></i>
                </button>
            </div>

        </li>
    )
}



export default Post;