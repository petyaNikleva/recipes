import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext.js";
import './Header.css';

function Header() {
    const { user } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen((open) => !open);
    const closeToggle = () => setIsOpen(false);

    const isActive = (to) => location.pathname === to;

    const guestNavigationItems = [
        { text: "НАЧАЛО", to: "/" },
        { text: "РЕЦЕПТИ", to: "/recipes" },
        { text: "ВХОД", to: "/login" },
        { text: "РЕГИСТРАЦИЯ", to: "/register" },
        { text: "ЗА НАС", to: "/about" }
    ];

    const userNavigationItems = [
        { text: "НАЧАЛО", to: "/" },
        { text: "РЕЦЕПТИ", to: "/recipes" },
        { text: "СЪЗДАЙ РЕЦЕПТА", to: "/recipes/create" },
        { text: "МОИТЕ РЕЦЕПТИ", to: "/recipes/my-recipes" },
        { text: "ЗА НАС", to: "/about" },
        { text: "ИЗХОД", to: "/logout" }
    ];

    return (
        <div id="site-header">
            <header id="header" className="header-block-top fixed-menu">
                <div className="container">
                    <div className="row">
                        <div className="main-menu">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className='toogle' onClick={toggleMenu}><i className="fa fa-bars fa-2x icon"></i></div>
                            <ul className="navigation" style={{ display: isOpen ? 'flex' : '', flexDirection: isOpen ? 'column' : '' }}>
                                {(user?._id ? userNavigationItems : guestNavigationItems).map((item) => (
                                    <li key={item.to} className="hover-effect">
                                        <NavLink onClick={closeToggle} style={isActive(item.to) ? { color: 'orangered' } : { color: 'white' }} to={item.to}>{item.text}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
