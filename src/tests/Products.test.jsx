import { render, fireEvent, screen } from "@testing-library/react"
import Products from "../components/Products"

test("muestra el contenido cuando se hace click", () => {
    // const { getByText, getByRole } = render(<Products />)
    render(<Products />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Este seria el contenido a mostrar")).toBeInTheDocument()
})

test("oculta el contenido cuando se hace click", () => {
    render(<Products />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.queryByText("Este seria el contenido a mostrar")).toBeNull()
})