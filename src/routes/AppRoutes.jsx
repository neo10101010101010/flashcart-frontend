import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import ProductoForm from "../pages/ProductoForm";
import Carrito from "../pages/Carrito";
import Register from "../pages/Register";

function AppRoutes() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/productos/nuevo"element={<ProtectedRoute><ProductoForm /> </ProtectedRoute >}/>
                <Route path="/productos/editar/:id" element={<ProductoForm />} />
                <Route path="/carrito" element={<ProtectedRoute><Carrito /></ProtectedRoute>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;