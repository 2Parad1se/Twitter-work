import React from 'react';
import Post from '../Post/Post';

const AllPost = (props) => {
    const {data} = props;
    // const deletePost = 
    // console.log(data)
    

    function createPost(elem) {
        // console.log(elem)
        const {id, text, like, fix} = elem;
        const {deletePost, onlike, onfix} = props;
        // console.log(onlike)
        return(
            <Post 
                key = {id}
                id = {id}
                text = {text}
                like = {like}
                fix = {fix}
                deletePost = {deletePost}
                onlike = {onlike}
                onfix = {onfix}
            />
        )

    }

    function createPosts(data) {
        // console.log(data)
        const fixPosts = data.filter((post) => post.fix === true)
        const noFixPost = data.filter((post) => post.fix === false)
        const newArr = [...fixPosts, ...noFixPost];
        // console.log(newArr);

        const posts = newArr.map((post) => {
            return createPost(post)
        })
        return posts;
    }
        
    

    return (
        <ul>
            {createPosts(data)}
        </ul>
    )
}
export default AllPost;
