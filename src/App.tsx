import './scss/main.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/home/home';
import { UserForms } from './pages/user-forms/user-forms';
import { useEffect, useState } from 'react';
import { Timers } from './pages/timers/timers';

import UserImg from './assets/imgs/user_img.png';
import { LogoutIcon } from './assets/svgs/logout';
import { SettingsIcon } from './assets/svgs/settings';

function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(
        JSON.parse(localStorage.getItem('user') || '{}').isLoggedIn
    );

    const logOutUser = () => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        storedUser.isLoggedIn = false;
        localStorage.setItem('user', JSON.stringify(storedUser));
        setIsUserLoggedIn(false);
    };

    const getIfUserIsLoggedIn = () => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        setIsUserLoggedIn(storedUser.isLoggedIn);
    };

    useEffect(() => {
        getIfUserIsLoggedIn();
        console.log(isUserLoggedIn);
    }, []);

    const username = JSON.parse(localStorage.getItem('user') || '{}').username;

    return (
        <Router>
            <header>
                <div className="container" data-type="wide">
                    <nav className="primary-nav | flex padding-block-6">
                        <Link className="logo" to="/">
                            pm.
                        </Link>
                        {isUserLoggedIn ? (
                            <ul className="flex | align-center">
                                <img
                                    className="primary-nav__user-img"
                                    src={UserImg}
                                />
                                <p className="primary-nav__user-name">
                                    {username}
                                </p>
                                <button className="primary-nav__icon">
                                    <SettingsIcon />
                                </button>
                                <button
                                    className="primary-nav__icon"
                                    data-type="transparent"
                                    onClick={() => logOutUser()}
                                >
                                    <LogoutIcon />
                                </button>
                            </ul>
                        ) : (
                            <ul className="flex | align-center">
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<UserForms />}></Route>
                    <Route path="/timers" element={<Timers />}></Route>
                </Routes>
                {/* <Home /> */}
            </main>
        </Router>
    );
}

export default App;
