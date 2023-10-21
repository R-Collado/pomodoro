import { User } from '../../interfaces/user.interface';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

export const UserForms = () => {
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
        window.location.href = '/';
        return user;
    };

    const loginUser = (event: any) => {
        event.preventDefault();

        const password = event.target.loginPassword.value;
        const email = event.target.loginEmail.value;

        if (!checkIfUserIsRegistered('login', email, password)) {
            console.log(
                "that combination of email and password doesn't match with anyone on our database"
            );
            return;
        }
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        storedUser.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(storedUser));
        window.location.href = '/';
    };

    const checkIfUserIsRegistered = (
        mode: string,
        username?: string,
        email?: string,
        password?: string
    ) => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

        if (mode === 'register') {
            if (storedUser.username === username) {
                console.log('that username is already registered');
                return true;
            }

            if (storedUser.email === email) {
                console.log('that email is already registered');
                return true;
            }
        } else if (mode === 'login') {
            if (storedUser.email != email || storedUser.password != password) {
                console.log(
                    "that combination of email and password doesn't match with anyone on our database"
                );
                return false;
            }
        }

        return false;
    };

    return (
        <div className="user-forms">
            <div className="container | flex" data-type="narrow">
                <RegisterForm onSubmitEvent={registerUser} />
                <LoginForm onSubmitEvent={loginUser} />
            </div>
        </div>
    );
};
