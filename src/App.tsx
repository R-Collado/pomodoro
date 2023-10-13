import './scss/main.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/home/home';
import { UserForms } from './pages/user-forms/user-forms';
import { useState } from 'react';
function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

    const username = JSON.parse(localStorage.getItem('user') || '').username;

    return (
        <Router>
            <header>
                <div className="container">
                    <nav className="primary-nav | flex padding-block-6">
                        <Link className="logo" to="/">
                            pm.
                        </Link>
                        {isUserLoggedIn ? (
                            <ul className="flex | align-center">
                                <p>{username}</p>
                                <button
                                    onClick={() =>
                                        setIsUserLoggedIn(!isUserLoggedIn)
                                    }
                                >
                                    log out
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
                </Routes>
                {/* <Home /> */}
            </main>
        </Router>
    );
}

export default App;
