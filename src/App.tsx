import './scss/main.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/home/home';
import { UserForms } from './pages/user-forms/user-forms';
import { useEffect, useState } from 'react';
import { Timers } from './pages/timers/timers';

import userPlaceholderImage from './assets/imgs/user-placeholder.png';
import { LogoutIcon } from './assets/svgs/logout';
import { SettingsIcon } from './assets/svgs/settings';
import { Focus } from './pages/focus/focus';
import { Settings } from './pages/settings/settings';
import { Toaster } from 'sonner';

import {
    createDefaultTimers,
    createTimerNameslist,
} from './utils/create-timers';
import {
    checkIfDefaultTimersExist,
    checkIfTimerNamesListExists,
} from './utils/check-timers';
import { LogoIcon } from './assets/svgs/logo';

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
        if (!checkIfTimerNamesListExists()) createTimerNameslist();
        if (!checkIfDefaultTimersExist()) createDefaultTimers();
        getIfUserIsLoggedIn();
    }, []);

    const username = JSON.parse(localStorage.getItem('user') || '{}').username;
    const userImg = JSON.parse(localStorage.getItem('user') || '{}').image;
    return (
        <Router>
            <header>
                <div className="container" data-type="wide">
                    <nav className="primary-nav | flex padding-block-6">
                        <Link className="logo" to="/">
                            <LogoIcon className="clr-neutral-100" />
                        </Link>
                        {isUserLoggedIn ? (
                            <ul className="flex | align-center">
                                <div className="primary-nav__user-info | flex align-center">
                                    <img
                                        className="primary-nav__user-info__img"
                                        src={userImg || userPlaceholderImage}
                                    />

                                    <p className="primary-nav__user-info__name">
                                        {username}
                                    </p>
                                </div>

                                <Link
                                    to="/settings"
                                    className="primary-nav__icon"
                                >
                                    <SettingsIcon />
                                </Link>
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
                    <Route path="/focus/:timerName" element={<Focus />}></Route>
                    <Route path="/settings" element={<Settings />}></Route>
                </Routes>
                {/* <Home /> */}
                <Toaster />
            </main>
        </Router>
    );
}

export default App;
