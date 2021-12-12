import { Link } from 'react-router-dom';

import { useAuthContext } from "../context/AuthContext.js"

function Header() {
    const { user } = useAuthContext();

    let guestNavigation = (
        <>
            <li className="active"><Link to="/">НАЧАЛО</Link></li>
            <li><Link to="/recipes">РЕЦЕПТИ</Link></li>
            <li><Link to="/login">ВХОД</Link></li>
            <li><Link to="/register">РЕГИСТРАЦИЯ</Link></li>
            <li><Link to="/about">ЗА НАС</Link></li>
        </>
    );

    let userNavigation = (
        <>
            <li className="active"><Link to="/">НАЧАЛО</Link></li>
            <li><Link to="/recipes">РЕЦЕПТИ</Link></li>
            <li><Link to="/recipes/create">СЪЗДАЙ РЕЦЕПТА</Link></li>
            <li><Link to="/recipes/my-recipes">МОИТЕ РЕЦЕПТИ</Link></li>
            <li><Link to="/about">ЗА НАС</Link></li>
            <li><Link to="/logout">ИЗХОД</Link></li>
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
                                        <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                                            <img src="/images/logo.png" alt="" />
                                        </a>
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