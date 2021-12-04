import { useNavigate } from 'react-router-dom';

import * as authServise from '../services/authService.js';
import { AuthContext } from '../context/AuthContext.js';
import { useContext, useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authServise.logout(user.token)
        .then(() => {
            logout();
            navigate('/')
        })
    }, [])

    return null;
};

export default Logout;
