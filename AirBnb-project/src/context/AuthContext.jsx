import { createContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../api/authApi";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const savedToken = localStorage.getItem("token");

        if (savedUser && savedToken) {
            setUser(savedUser);
            setToken(savedToken);
        }
    }, []);

    async function login(email, password) {
        const data = await loginUser(email, password);

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(data.user)
        );

        localStorage.setItem("token", data.token);

        setUser(data.user);
        setToken(data.token);

        return data;
    }

    async function register({ username, email, password, role }) {
        const data = await registerUser({ username, email, password, role });

        localStorage.setItem("loggedInUser", JSON.stringify(data.user));

        localStorage.setItem("token", data.token);

        setUser(data.user);
        setToken(data.token);

        return data;
    }

    function logout() {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("token");

        setUser(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;