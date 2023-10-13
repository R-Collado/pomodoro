import { User } from './user.interface';

export type AuthContextInterface = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
};
