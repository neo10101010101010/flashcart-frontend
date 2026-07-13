import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useCarritoStore from "../../store/carritoStore";

function Navbar() {
    const navigate = useNavigate();
    const username = useAuthStore((state) => state.username);
    const logout = useAuthStore((state) => state.logout);
    const { cantidadTotal} = useCarritoStore();

    const handleLogout = () => {
        if (logout) {
            logout();
            navigate("/");
        } else {
            console.error("logout no está definido en el store");
        }
    }

    return (

        <nav className="bg-blue-600 text-white px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <h1 className="text-2xl font-bold">
                FlashCart
            </h1>

            <div className="flex items-center gap-6">

                <Link
                    to="/home"
                    className="hover:text-gray-200"
                >
                    Productos
                </Link>

                <Link to="/carrito" className="relative">
                    🛒
                    {cantidadTotal > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cantidadTotal}
                        </span>
                    )}
                </Link>

                <span>
                    👤 {username}
                </span>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                    Cerrar sesión
                </button>

            </div>

        </nav>

    );

}

export default Navbar;