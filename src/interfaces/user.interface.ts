export interface User {
    username: string;
    email: string;
    password: string;
    isLoggedIn: boolean;
    image?: string;
    description?: string;
}
