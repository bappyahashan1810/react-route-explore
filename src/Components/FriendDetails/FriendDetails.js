import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    const { email, name, address } = friend
    return (
        <div className='bg-green-100 p-7 my-5 rounded-md'>
            <h5>Here Details of <span className='font-bold text-1xl'>{name}</span></h5>
            <p>email: {email}</p>
            <p><small>Address: Street: {address.street}, City: {address.city}</small></p>
        </div>
    );
};

export default FriendDetails;