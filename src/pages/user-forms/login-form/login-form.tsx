import { useState } from 'react';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordInputType = () => {
        setShowPassword(!showPassword);
    };

    const saveFormAndRedirect = (e: any) => {
        e.preventDefault();
        window.location.href = '/';
    };

    return (
        <div className="login">
            <h2>login</h2>
            <form className="flex clr-neutral-500">
                <label htmlFor="loginEmail">email address</label>
                <input
                    className="form-input | margin-block-end-6"
                    type="email"
                    name="loginEmail"
                    id="loginEmail"
                    placeholder="john_doe@domain.com"
                />
                <label htmlFor="loginPassword">password</label>
                <input
                    className="form-input"
                    type={showPassword ? 'text' : 'password'}
                    name="loginPassword"
                    id="loginUsername"
                    placeholder="********"
                />
                <div className="form-input show-password">
                    <input
                        type="checkbox"
                        name="loginShowPassword"
                        id="loginShowPassword"
                        onChange={togglePasswordInputType}
                    />
                    <label htmlFor="loginShowPassword">show password</label>
                </div>
                <button
                    className="button | clr-neutral-500 bg-neutral-700 grid place-items-center margin-block-start-6"
                    data-type="rounded"
                    onClick={saveFormAndRedirect}
                >
                    login
                </button>
            </form>
        </div>
    );
};
