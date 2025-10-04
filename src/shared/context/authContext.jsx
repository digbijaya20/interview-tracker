import { createContext, useEffect, useState } from "react";
import api from "../utils/config";



export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (token) {
            const fetchProfile = async () => {
                try {
                    const response = await api.get('/users/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setIsLoggedIn(true);
                    setUser(response.data);
                } catch (error) {
                    console.log('reached')
                    localStorage.removeItem("token");
                    console.log(token)
                    setUser(null)
                }
            }
            fetchProfile();
        }
    }, [token])

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};