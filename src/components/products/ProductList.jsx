function ProductList({ productos }) {
    return (
        <div>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>
                        <strong>Descripción:</strong> {producto.descripcion}
                    </p>
                    <p>
                        <strong>Precio:</strong> ${producto.precio}
                    </p>
                    <p>
                        <strong>Stock:</strong> {producto.stock}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ProductList;