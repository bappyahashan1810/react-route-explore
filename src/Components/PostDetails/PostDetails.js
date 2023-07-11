import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, userId, title, body } = post;
    console.log(post);
    return (
        <div className='bg-cyan-600 text-white p-6 rounded-md'>
            <p>user-id: {userId}</p>
            <p>post-id: {id}</p>
            <p>title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;