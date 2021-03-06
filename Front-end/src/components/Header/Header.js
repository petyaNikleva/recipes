import { Link, NavLink } from 'react-router-dom';

import { useAuthContext } from "../../context/AuthContext.js";

import './Header.css';

function Header() {
    const { user } = useAuthContext();

    const checkIsActive = ({isActive}) => isActive ? {color: 'orangered'} : {color: 'white'}

    let guestNavigation = (
        <>
            <li>
                <NavLink style={checkIsActive} to="/">НАЧАЛО</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/recipes">РЕЦЕПТИ</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/login">ВХОД</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/register">РЕГИСТРАЦИЯ</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/about">ЗА НАС</NavLink>
            </li>
        </>
    );

    let userNavigation = (
        <>
            <li>
                <NavLink style={checkIsActive}  to="/">НАЧАЛО</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/recipes" end={true}>РЕЦЕПТИ</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/recipes/create">СЪЗДАЙ РЕЦЕПТА</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/recipes/my-recipes">МОИТЕ РЕЦЕПТИ</NavLink>
            </li>
            <li>
                <NavLink style={checkIsActive} to="/about">ЗА НАС</NavLink>
            </li>
            <li><NavLink style={checkIsActive}  to="/logout">ИЗХОД</NavLink></li>
        </>
    )

    return (
        <div id="site-header">
            <header id="header" className="header-block-top fixed-menu">
                <div className="container">
                    <div className="row">
                        <div className="main-menu">
                            <nav className="navbar navbar-default" id="mainNav">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <div className="logo">
                                        <Link className="navbar-brand js-scroll-trigger logo-header" to="/">
                                            <img src="/images/logo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        {user?._id
                                            ? userNavigation
                                            : guestNavigation
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;