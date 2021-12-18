import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext.js';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to="/Page-Not-Found-404" />
}

export default PrivateRoute;