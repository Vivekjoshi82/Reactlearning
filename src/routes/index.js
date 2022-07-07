import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Login, Sign } from '../pages';

const Root = () => {
    const routes = [
        {
            path: '/login',
            component: Login,
            exact: true,
        },
        {
            path: '/',
            component: Sign,
            exact: true,
        },
    ];
    return (
        <HashRouter>
            <Routes>
                {routes.map(({ component: Component, ...rest }, index) => (
                    <Route {...rest} key={index} element={<Component />} />
                ))}
            </Routes>
        </HashRouter>
    );
};
export default Root;
