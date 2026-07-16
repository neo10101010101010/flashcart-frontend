import { useState } from "react";
import Layout from "../components/layout/Layout";
import { crearProducto, obtenerProductoPorId, actualizarProducto, eliminarProducto } from "../services/productosService";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProductoForm() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const navigate = useNavigate();

    console.log("Todos los parámetros:", useParams());
    const { id: id } = useParams();
    console.log("ID recibido:", id);

    useEffect(() => {

        if (id) {

            cargarProducto();

        }

    }, [id]);

    const guardarProducto = async (e) => {

        e.preventDefault();

        if (!nombre.trim()) {
            alert("Escriba el nombre del producto.");
            return;
        }

        if (!precio || Number(precio) <= 0) {
            alert("Escriba un precio válido.");
            return;
        }

        if (stock === "" || Number(stock) < 0) {
            alert("Escriba un stock válido.");
            return;
        }

        try {
            const producto = {
            nombre,
            descripcion,
            precio: Number(precio),
            stock: Number(stock)
        };

        if (id) {

            await actualizarProducto(id, producto);

            alert("Producto actualizado correctamente.");

        } else {

            await crearProducto(producto);

            alert("Producto creado correctamente.");

        }

        navigate("/home");

        } catch (error) {

            console.error(error);

            alert("No fue posible crear el producto.");

        }

    };

    const cargarProducto = async () => {

        const producto = await obtenerProductoPorId(id);

        setNombre(producto.nombre);

        setDescripcion(producto.descripcion);

        setPrecio(producto.precio);

        setStock(producto.stock);

    };

    return (

        <Layout>

            <h1 className="text-3xl font-bold mb-6">
                Producto
            </h1>

            <form onSubmit={guardarProducto}>

                <div>

                    <label htmlFor="nombre">Nombre</label>

                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border rounded w-full p-2"
                    />

                </div>

                <div>

                    <label htmlFor="descripcion">Descripción</label>

                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="border rounded w-full p-2"
                    />

                </div>

                <div>

                    <label htmlFor="precio">Precio</label>

                    <input
                        id="precio"
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="border rounded w-full p-2"
                    />

                </div>

                <div>

                    <label htmlFor="stock">Stock</label>

                    <input
                        id="stock"
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="border rounded w-full p-2"
                    />

                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Guardar
                </button>

            </form>

        </Layout>

    );

}

export default ProductoForm;