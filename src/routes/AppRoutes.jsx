import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import ProductoForm from "../pages/ProductoForm";
import Carrito from "../pages/Carrito";

function AppRoutes() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/productos/nuevo"element={<ProtectedRoute><ProductoForm /> </ProtectedRoute >}/>
                <Route path="/productos/editar/:id" element={<ProductoForm />} />
                <Route path="/carrito" element={<ProtectedRoute><Carrito /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;