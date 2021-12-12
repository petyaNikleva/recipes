import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthContext } from '../../context/AuthContext.js';

const PrivateRoute = () => {
    const { user } = useAuthContext();

    return user.username ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;