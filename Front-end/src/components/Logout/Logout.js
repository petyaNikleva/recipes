import { useNavigate } from 'react-router-dom';

import * as authServise from '../../services/authService.js';
import { useAuthContext } from '../../context/AuthContext.js';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    useEffect(() => {
        authServise.logout(user.token)
            .then(() => {
                logout();
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    })

    return null;
};

export default Logout;
