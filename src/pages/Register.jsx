import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        if (!username.trim()) {
            setError("Escriba un nombre de usuario.");
            return;
        }

        if (!email.trim()) {
            setError("Escriba un correo electrónico.");
            return;
        }

        if (!password.trim()) {
            setError("Escriba una contraseña.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setLoading(true);

        try {

            await register({
                username,
                email,
                password
            });

            alert("Usuario registrado correctamente.");

            navigate("/");

        } catch (error) {

            setError(error.response?.data?.message || "No fue posible registrar el usuario.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-lg">

                <h2 className="text-center text-2xl font-bold text-gray-900">
                    Registro de Usuario
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium">
                            Usuario
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Confirmar contraseña
                        </label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                        {loading ? "Creando..." : "Crear cuenta"}
                    </button>

                    <div className="text-center mt-4">
                        <span className="text-gray-600">
                            ¿Ya tienes una cuenta?
                        </span>

                        <Link
                            to="/"
                            className="ml-2 text-indigo-600 hover:underline"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default Register;