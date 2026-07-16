import { useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
import { eliminarProducto as eliminarProductoService } from "../../services/productosService";
import useCarritoStore from "../../store/carritoStore";

function ProductTable({ productos, onProductoEliminado }) {

    const navigate = useNavigate();

    const items = useCarritoStore((state) => state.items);

    const agregarProducto = () => {
        navigate("/productos/nuevo");
    };

    const editarProducto = (id) => {
    console.log("ID a editar:", id);
    if (id) {
        navigate(`/productos/editar/${id}`);
    } else {
        console.error("ID no válido");
    }
};

    const eliminarProducto = async (producto) => {
        console.log("ProductTable - producto recibido:", producto);
        if (!producto || typeof producto !== 'object' || !producto.id) {
            console.error("Producto inválido:", producto);
            return;
        }

        if (!window.confirm(`¿Eliminar "${producto.nombre}"?`)) return;

        try {
            await eliminarProductoService(producto.id);
            alert("Producto eliminado.");
            
            if (typeof onProductoEliminado === 'function') {
                await onProductoEliminado();
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("No se pudo eliminar el producto.");
        }
    };

    return (

        <div className="overflow-x-auto">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">

                <h2 className="text-xl md:text-2xl font-bold">
                    Listado de Productos
                </h2>

                

            </div>

            <table className="w-full min-w-[700px] border border-gray-300 rounded-lg shadow">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="px-4 py-3 text-left">
                            Nombre
                        </th>

                        <th className="px-4 py-3 text-left">
                            Descripción
                        </th>

                        <th className="px-4 py-3 text-right">
                            Precio
                        </th>

                        <th className="px-4 py-3 text-center">
                            Stock
                        </th>

                        <th className="px-4 py-3 text-center">
                            Acción
                        </th>

                    </tr>

                </thead>

                <tbody>
                    {productos.map((producto) => {
                        console.log("En map - producto:", producto); // Debe mostrar objeto
                        return (
                            <ProductRow
                                key={producto.id}
                                producto={producto}   // ← Pasar el objeto
                                onEditar={editarProducto}
                                onEliminar={eliminarProducto}
                            />
                        );
                    })}
                </tbody>
                    
            </table>

            {items.length > 0 && (
                <div className="mt-8 border rounded-lg bg-gray-50 p-6 text-center">

                    <p className="text-lg font-semibold">
                        {items.length} producto(s) agregado(s)
                    </p>

                    <p className="text-gray-600 mt-2">
                        Subtotal: <strong>${subtotal.toFixed(2)}</strong>
                    </p>

                    <button
                        onClick={() => navigate("/carrito")}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
                    >
                        Continuar al carrito
                    </button>

                </div>
            )}            
        </div>

    );

}

export default ProductTable;