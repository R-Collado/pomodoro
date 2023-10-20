import { useCallback } from 'react';
import { User } from '../../interfaces/user.interface';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

export const UserForms = () => {
    // const getUserFromLocalStorage = (): User | null => {
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) {
    //         return JSON.parse(storedUser);
    //     } else {
    //         return null;
    //     }
    // };

    const registerUser = (event: any) => {
        event.preventDefault();
        const username = event.target.registerUsername.value;
        const password = event.target.registerPassword.value;
        const email = event.target.registerEmail.value;

        if (checkIfUserIsRegistered(username, email)) return;

        const user: User = {
            email: email,
            username: username,
            password: password,
            isLoggedIn: true,
        };

        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/login';
        return user;
    };

    const checkIfUserIsRegistered = (username: string, email: string) => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (storedUser.username === username) {
            console.log('that username is already registered');
            return true;
        }

        if (storedUser.email === email) {
            console.log('that email is already registered');
            return true;
        }

        return false;
    };

    return (
        <div className="user-forms">
            <div className="container | flex" data-type="narrow">
                <RegisterForm onSubmitEvent={registerUser} />
                <LoginForm />
            </div>
        </div>
    );
};
