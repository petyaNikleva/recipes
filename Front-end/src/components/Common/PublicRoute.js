import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext.js';

const PublicRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoute;