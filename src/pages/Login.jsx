import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import useAuthStore from "../store/authStore";
import { wakeUpServer } from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const loginStore = useAuthStore((state) => state.login);

  useEffect(() => {
    wakeUpServer().catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
        setError("Escriba un nombre de usuario.");
        return;
    }

    if (!password.trim()) {
        setError("Escriba su contraseña.");
        return;
    }

    setLoading(true);

    try {
      const respuesta = await login(username, password);
      console.log(respuesta);
      console.log("userId:", respuesta.userId);

      loginStore(
        respuesta.token,
        respuesta.username,
        respuesta.userId
    );
      navigate("/home");
    } catch (err) {
      setError("Usuario o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-lg">
        {/* Título "My Account" */}
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Logueo de Usuario
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Login (username/email) */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Login
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Usuario o email"
            />
          </div>

          {/* Campo Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>

          

          {/* Mensaje de error */}
          {error && (
            <div className="text-sm text-red-600 text-center">{error}</div>
          )}

          {/* Botón Sign in */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;