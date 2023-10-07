import { LoginPopup } from '../login-popup/login-popup';

export const PrimaryNav = () => {
    return (
        <div className="container">
            <nav className="primary-nav | flex padding-block-6">
                <p className="logo">pm.</p>
                <ul className="flex">
                    <li>
                        <button className="pointer">log in</button>
                    </li>
                    <li>
                        <button className="pointer">sign in</button>
                    </li>
                </ul>
                <LoginPopup />
            </nav>
        </div>
    );
};
