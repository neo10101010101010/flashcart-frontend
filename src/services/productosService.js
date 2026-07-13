import api from "./api";

export const obtenerProductos = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get("/productos", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    

    return response.data;
};

export const crearProducto = async (producto) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/productos",
        producto,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const obtenerProductoPorId = async (id) => {

    const token = localStorage.getItem("token");

    const response = await api.get(

        `/productos/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

};

export const actualizarProducto = async (id, producto) => {

    const token = localStorage.getItem("token");

    const response = await api.put(

        `/productos/${id}`,

        producto,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

};

export const eliminarProducto = async (id) => {
    const token = localStorage.getItem("token");

    const response = await api.delete(

        `/productos/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};