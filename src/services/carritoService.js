import api from './api';

const getUsuarioId = () => Number(localStorage.getItem("usuarioId"));

export const agregarProductoAlCarrito = async (productoId, cantidad) => {
    const usuarioId = getUsuarioId();
    console.log("Usuario ID al agregar:", usuarioId);
    if (!usuarioId) throw new Error('Usuario no autenticado');

    const response = await api.post(`/carrito/${usuarioId}/productos`, {
        productos: { id: productoId }, 
        cantidad
    });
    return response.data;
};

export const obtenerCarritoActual = async () => {
    const usuarioId = getUsuarioId();
    console.log("Usuario ID al agregar:", usuarioId);
    if (!usuarioId) throw new Error('Usuario no autenticado');
    const response = await api.get(`/carrito/${usuarioId}`);
    return response.data;
};

export const eliminarProductoDelCarrito = async (productoId) => {
    const usuarioId = getUsuarioId();
    console.log("Usuario ID al agregar:", usuarioId);
    if (!usuarioId) throw new Error('Usuario no autenticado');

    const response = await api.delete(`/carrito/${usuarioId}/productos/${productoId}`);
    return response.data;
};

export const procesarCarrito = async () => {
    const usuarioId = getUsuarioId();
    console.log("Usuario ID al agregar:", usuarioId);
    if (!usuarioId) throw new Error('Usuario no autenticado');

    const response = await api.post(`/carrito/${usuarioId}/procesar`);
    return response.data;
};