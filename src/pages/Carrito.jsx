import { useNavigate } from 'react-router-dom';
import useCarritoStore from '../store/carritoStore';

function Carrito() {
  const navigate = useNavigate();
  const {
    items,
    subtotal,
    iva,
    total,
    eliminarProducto,
    procesarCarrito,
  } = useCarritoStore();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">🛒 Carrito de compras</h1>
        <p className="text-gray-500">Tu carrito está vacío.</p>
        <button
          onClick={() => navigate('/productos')}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Ver productos
        </button>
      </div>
    );
  }

  const handleProcesar = async () => {
    const result = await procesarCarrito();
    if (result.success) {
      alert('Pedido procesado correctamente');
      navigate('/home');
    } else {
      alert('Error: ' + result.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Carrito de compras</h1>

      {/* Lista de productos */}
      <div className="space-y-4">
        {items.map((item) => {
          const subtotalItem = item.precioUnitario * item.cantidad;
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4"
            >
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{item.productoNombre}</p>
                <p className="text-sm text-gray-500">${item.precioUnitario.toFixed(2)}</p>
              </div>

              {/* Cantidad fija */}
              <div className="flex items-center space-x-3 mt-2 md:mt-0">
                <span className="w-8 text-center font-medium">{item.cantidad}</span>
              </div>

              {/* Subtotal del item + botón Eliminar */}
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <p className="font-semibold text-gray-800">${subtotalItem.toFixed(2)}</p>
                <button
                  onClick={() => eliminarProducto(item.producto_id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtotal (sin "sin envío") */}
      <div className="mt-6 flex justify-between text-lg font-semibold border-t border-gray-200 pt-4">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {/* IVA */}
      <div className="flex justify-between text-md text-gray-600 border-b border-gray-200 pb-2">
        <span>IVA (16%):</span>
        <span>${iva.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className="mt-4 flex justify-between text-xl font-bold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        onClick={handleProcesar}
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition"
      >
        Procesar compra
      </button>
    </div>
  );
}

export default Carrito;