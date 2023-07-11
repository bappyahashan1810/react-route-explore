import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, email, username, id } = friend;
    console.log(friend);

    return (
        <div className='bg-amber-500 my-5 rounded-md p-7 '>
            <h3>{name}</h3>
            <p><small>{email}</small></p>
            <p className='text-white bg-green-300'><Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;