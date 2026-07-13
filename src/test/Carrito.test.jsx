import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Carrito from "../pages/Carrito";

// Mock del navigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

// Mock del store
const mockEliminarProducto = vi.fn();
const mockProcesarCarrito = vi.fn();

vi.mock("../store/carritoStore", () => ({
  default: vi.fn()
}));

import useCarritoStore from "../store/carritoStore";

describe("Carrito", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debe mostrar carrito vacío", () => {

    useCarritoStore.mockReturnValue({
      items: [],
      subtotal: 0,
      iva: 0,
      total: 0,
      eliminarProducto: mockEliminarProducto,
      procesarCarrito: mockProcesarCarrito
    });

    render(
      <MemoryRouter>
        <Carrito />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Tu carrito está vacío.")
    ).toBeInTheDocument();

  });

  it("debe mostrar un producto", () => {

    useCarritoStore.mockReturnValue({
      items: [
        {
          id: 1,
          producto_id: 1,
          productoNombre: "Laptop",
          precioUnitario: 10000,
          cantidad: 2
        }
      ],
      subtotal: 20000,
      iva: 3200,
      total: 23200,
      eliminarProducto: mockEliminarProducto,
      procesarCarrito: mockProcesarCarrito
    });

    render(
      <MemoryRouter>
        <Carrito />
      </MemoryRouter>
    );

    expect(screen.getByText("Laptop")).toBeInTheDocument();

    expect(screen.getAllByText("$20000.00")).toHaveLength(2);

  });

  it("debe llamar eliminarProducto", () => {

    useCarritoStore.mockReturnValue({
      items: [
        {
          id: 1,
          producto_id: 1,
          productoNombre: "Laptop",
          precioUnitario: 10000,
          cantidad: 1
        }
      ],
      subtotal: 10000,
      iva: 1600,
      total: 11600,
      eliminarProducto: mockEliminarProducto,
      procesarCarrito: mockProcesarCarrito
    });

    render(
      <MemoryRouter>
        <Carrito />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Eliminar" })
    );

    expect(mockEliminarProducto).toHaveBeenCalledWith(1);

  });

});