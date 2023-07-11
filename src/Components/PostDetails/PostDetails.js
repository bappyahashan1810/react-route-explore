import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, userId, title, body } = post;
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div className='bg-cyan-600 text-white p-6 rounded-md'>
            <p>user-id: {userId}</p>
            <p>post-id: {id}</p>
            <p>title: {title}</p>
            <p><small>{body}</small></p>
            <button className='bg-blue-400 p-3' onClick={clickHandler}>See Autor</button>
        </div>
    );
};

export default PostDetails;