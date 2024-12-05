import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context for user authentication
const userContext = createContext();

// Auth context provider component
const authContext = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold user information
    const [loading, setLoading] = useState(true); // State to indicate loading status

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token'); // Get token from local storage
                if (token) {
                    const response = await axios.get('https://checksheet-api.onrender.com/api/auth/verify', {
                        headers: {
                            Authorization: `Bearer ${token}`, // Set authorization header
                        },
                    });
                    
                    console.log(response); // Log response for debugging
                    if (response.data.success) {
                        setUser(response.data.user); // Set user state if verification is successful
                    } else {
                        setUser(null); // Reset user state if verification fails
                    }
                } else {
                    setUser(null); // Reset user state if no token is found
                }
            } catch (error) {
                console.log(error); // Log error for debugging
                setUser(null); // Reset user state on error
            } finally {
                setLoading(false); // Set loading to false after verification attempt
            }
        };

        verifyUser(); // Call the function to verify the user on component mount
    }, []);

    const login = (user) => {
        setUser(user); // Set user state when logging in
    };

    const logout = () => {
        setUser(null); // Reset user state when logging out
        localStorage.removeItem("token"); // Remove token from local storage
    };

    return (
        <userContext.Provider value={{ user, login, logout, loading }}>
            {children} {/* Render child components */}
        </userContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(userContext);

// Export the authContext component for wrapping the application
export default authContext;