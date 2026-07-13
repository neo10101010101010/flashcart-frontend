import useCarritoStore from "../../store/carritoStore";

function ProductRow({ producto, onAgregarCarrito, onEditar, onEliminar }) {
    const { agregarProducto } = useCarritoStore();

    const handleAgregar = async () => {
        const result = await agregarProducto(producto.id, 1);
        alert(result.message);
    };

    console.log("ProductRow - producto:", producto);
    
    return (

        <tr className="border-b hover:bg-gray-50">

            <td className="px-4 py-3">
                {producto.nombre}
            </td>

            <td className="px-4 py-3">
                {producto.descripcion}
            </td>

            <td className="px-4 py-3 text-right">
                $
                {producto.precio.toFixed(2)}
            </td>

            <td className="px-4 py-3 text-center">

                <span
                    className={
                        producto.stock > 0
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                    }
                >
                    {producto.stock}

                </span>

            </td>

            <td className="px-4 py-3 text-center">
                <button
                    onClick={handleAgregar}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                    disabled={producto.stock === 0}
                >
                    {producto.stock > 0 ? 'Agregar' : 'Sin stock'}
                </button>

                <button
                    onClick={() => onEditar(producto.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                >
                    Editar
                </button>

                <button
                    onClick={() => onEliminar(producto)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                >
                    Eliminar
                </button>

            </td>

        </tr>

    );

}

export default ProductRow;