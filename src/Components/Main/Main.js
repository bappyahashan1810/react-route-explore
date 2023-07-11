import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <p>This is outlet page</p>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;