import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { userId, title, body, id } = post;
    return (
        <div className='bg-stone-300 rounded-md p-6 '>

            <p>user-Id: {userId}</p>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button className='bg-lime-700 rounded-md p-3 mt-4'><Link to={`/post/${id}`}>See Details</Link></button>
        </div>
    );
};

export default Post;