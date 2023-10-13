import { useState } from 'react';

type ChildProps = {
    onSubmitEvent: (event: any) => void;
};

export const RegisterForm: React.FC<ChildProps> = (props: ChildProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordInputType = () => {
        setShowPassword(!showPassword);
    };

    // const saveFormAndRedirect = (e: any) => {
    //     e.preventDefault();
    //     window.location.href = '/';
    // };
    return (
        <div className="register">
            <h2>register</h2>
            <form
                className="flex clr-neutral-500"
                onSubmit={props.onSubmitEvent}
            >
                <label htmlFor="registerEmail">email address</label>
                <input
                    className="form-input | margin-block-end-6"
                    type="email"
                    name="registerEmail"
                    id="registerEmail"
                    placeholder="john_doe@domain.com"
                />
                <label htmlFor="registerUsername">username</label>
                <input
                    className="form-input  | margin-block-end-6"
                    type="text"
                    name="registerUsername"
                    id="registerUsername"
                    placeholder="john_doe"
                />
                <label htmlFor="registerPassword">password</label>
                <input
                    className="form-input"
                    type={showPassword ? 'text' : 'password'}
                    name="registerPassword"
                    id="registerPassword"
                    placeholder="********"
                />
                <div className="form-input show-password">
                    <input
                        type="checkbox"
                        name="registerShowPassword"
                        id="registerShowPassword"
                        onChange={togglePasswordInputType}
                    />
                    <label htmlFor="registerShowPassword">show password</label>
                </div>
                <button
                    className="button | clr-neutral-500 bg-neutral-700 grid place-items-center margin-block-start-6"
                    data-type="rounded"
                >
                    sign up
                </button>
            </form>
        </div>
    );
};
