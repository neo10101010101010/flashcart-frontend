import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productosService";
import ProductTable from "../components/products/ProductTable";
import Layout from "../components/layout/Layout";
import useCarritoStore from "../store/carritoStore";   
import useAuthStore from "../store/authStore";        

function Home() {
    const { cargarCarrito } = useCarritoStore();
    const [productos, setProductos] = useState([]);
    const { user } = useAuthStore();

    useEffect(() => {
        cargarProductos();
        if (user){
            cargarCarrito()
        }
    }, []);

    const cargarProductos = async () => {
        try {
            const data = await obtenerProductos();
            console.log("Datos recibidos del backend:", data);
            setProductos(data);
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    };

    return (
        <Layout>
            <h1 className="text-3xl font-bold text-blue-600">
                Listado de Productos
            </h1>
            <ProductTable 
                productos={productos} 
                onProductoEliminado={cargarProductos} 
            />
        </Layout>
    );
}

export default Home;