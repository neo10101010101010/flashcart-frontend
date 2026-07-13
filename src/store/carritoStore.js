import { create } from 'zustand';
import { 
    agregarProductoAlCarrito, 
    obtenerCarritoActual, 
    eliminarProductoDelCarrito,
    procesarCarrito as procesarCarritoService
} from '../services/carritoService';

const useCarritoStore = create((set, get) => ({
    items: [],
    cantidadTotal: 0,
    subtotal: 0,
    iva: 0,
    total: 0,
    cargando: false,

    cargarCarrito: async () => {
        set({ cargando: true });
        try {
            const data = await obtenerCarritoActual();
            set({
                items: data.items || [],
                cantidadTotal: data.cantidadTotal || 0,
                subtotal: data.subtotal || 0,
                iva: data.iva || 0,
                total: data.total || 0,
                cargando: false,
            });
        } catch (error) {
            console.error('Error al cargar carrito:', error);
            set({ cargando: false });
        }
    },

    agregarProducto: async (productoId, cantidad = 1) => {
        set({ cargando: true });
        try {
            await agregarProductoAlCarrito(productoId, cantidad);
            await get().cargarCarrito(); // recarga el carrito actualizado
            return { success: true, message: 'Producto agregado al carrito' };
        } catch (error) {
            const mensaje = error.response?.data || 'No se pudo agregar';
            set({ cargando: false });
            return { success: false, message: mensaje };
        }
    },

    eliminarProducto: async (productoId) => {
        set({ cargando: true });
        try {
            await eliminarProductoDelCarrito(productoId);
            await get().cargarCarrito();
            return { success: true };
        } catch (error) {
            set({ cargando: false });
            return { success: false, message: 'No se pudo eliminar' };
        }
    },

    procesarCarrito: async () => {
        set({ cargando: true });
        try {
            const data = await procesarCarritoService();
            await get().cargarCarrito(); 
            return { success: true, data };
        } catch (error) {
            const mensaje = error.response?.data || 'No se pudo procesar el carrito';
            set({ cargando: false });
            return { success: false, message: mensaje };
        }
    },

    limpiarCarrito: () => set({ items: [], cantidadTotal: 0, subtotal: 0, iva: 0, total: 0 })
}));

export default useCarritoStore;