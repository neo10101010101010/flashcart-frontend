import { create } from "zustand";

const useAuthStore = create((set) => ({
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
    userId: localStorage.getItem("usuarioId") || null,

    login: (token, username, userId) => {
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("usuarioId", userId);
        set({
            token,
            username,
            userId
        });

    },

    logout: () => {
        localStorage.clear();
    },

    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    }

}));

export default useAuthStore;