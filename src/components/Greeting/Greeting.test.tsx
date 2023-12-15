import React from "react";
import { render, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom"
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("renders the component with the correct content", () => {
    render(<Greeting />);

    // Verifica que el título esté presente
    expect(
      screen.getByText(/Bespoke Software Development/i)
    ).toBeInTheDocument();

    // Verifica que el texto del párrafo esté presente
    expect(
      screen.getByText(
        /My name's Leandro and I design, develop and deliver intelligent high-tech bespoke software solutions for Enterprise & Artists around the world./i
      )
    ).toBeInTheDocument();

    // Verifica que el botón de servicios esté presente y tenga el enlace correcto
    const servicesButton = screen.getByText(/Services/i);
    expect(servicesButton).toBeInTheDocument();
    expect(servicesButton.closest("a")).toHaveAttribute("href", "/services");

   
  });
});
