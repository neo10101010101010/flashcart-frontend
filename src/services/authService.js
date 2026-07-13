import api from "./api";


export const login = async (username, password) => {

    const response = await api.post("/auth/login", {
        username,
        password
    });

    return response.data;
};

export const logout = () => {

    localStorage.removeItem("token");

};

export const obtenerToken = () => {

    return localStorage.getItem("token");

};

export const estaAutenticado = () => {

    return !!localStorage.getItem("token");

};

;