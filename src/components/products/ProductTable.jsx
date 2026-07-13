import { useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
import { eliminarProducto as eliminarProductoService } from "../../services/productosService";

function ProductTable({ productos, onProductoEliminado }) {

    const navigate = useNavigate();

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

            <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">
                    Listado de Productos
                </h2>

                <button
                    onClick={agregarProducto}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                    + Agregar Producto
                </button>

            </div>

            <table className="min-w-full border border-gray-300 rounded-lg shadow">

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

        </div>

    );

}

export default ProductTable;