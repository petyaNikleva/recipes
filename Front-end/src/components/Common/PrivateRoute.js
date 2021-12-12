import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    return user.username ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;