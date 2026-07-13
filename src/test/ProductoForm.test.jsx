import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductoForm from "../pages/ProductoForm";

// Mock de react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useParams: () => ({})
  };
});

// Mock de los servicios
vi.mock("../services/productosService", () => ({
  crearProducto: vi.fn(),
  obtenerProductoPorId: vi.fn(),
  actualizarProducto: vi.fn(),
  eliminarProducto: vi.fn()
}));

describe("ProductoForm", () => {

  it("debe renderizar el formulario de producto", () => {

    render(
      <MemoryRouter>
        <ProductoForm />
      </MemoryRouter>
    );

    expect(screen.getByText("Nuevo Producto")).toBeInTheDocument();

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();

    expect(screen.getByLabelText("Descripción")).toBeInTheDocument();

    expect(screen.getByLabelText("Precio")).toBeInTheDocument();

    expect(screen.getByLabelText("Stock")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Guardar" })
    ).toBeInTheDocument();

  });

});