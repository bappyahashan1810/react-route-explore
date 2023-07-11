import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='default-container'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/about'>About</NavLink>


        </div>
    );
};

export default Header;