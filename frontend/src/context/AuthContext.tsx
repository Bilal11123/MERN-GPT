import { createContext, useContext, useEffect, useState } from 'react';
import { loginUser, checkAuthStatus, logoutUser, signupUser } from '../helpers/api-communicator';
import React from 'react';

type User = {
    name: string,
    email: string
};

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    Login: (email:string, password:string) => Promise<void>;
    Signup: (name:string, email:string, password:string) => Promise<void>;
    Logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        // Check if user is logged in by checking cookies
        async function checkStatus() {
            // try {
                const data = await checkAuthStatus();
                if (data) {
                    setUser({ email: data.email, name: data.name });
                    setIsLoggedIn(true);
                }
            // } catch (error) {
            //     console.error('Error checking auth status:', error);
            // }
        }

        checkStatus();
    }, []);

    const Login = async (email: string, password: string) => {
        // Implement login logic here
        const data = await loginUser(email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    };

    const Signup = async (name: string, email: string, password: string) => {
        // Implement signup logic here
        const data = await signupUser(name,email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    };

    const Logout = async () => {
        // Implement logout logic here
        await logoutUser();
        setIsLoggedIn(false);
        setUser(null);
        window.location.reload();
    };

    const value = { isLoggedIn, user, Login, Signup, Logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
