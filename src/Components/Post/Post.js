import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { userId, title, body, id } = post;
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='bg-stone-300 rounded-md p-6 '>

            <p>user-Id: {userId}</p>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button className='bg-lime-700 rounded-md p-3 mt-4'><Link to={`/post/${id}`}>See Details</Link></button>
            <button onClick={navigateHandler}>see details2</button>
        </div>
    );
};

export default Post;