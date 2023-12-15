import "@testing-library/jest-dom"
import React from "react"
import {render, screen, getByText} from  '@testing-library/react'
import Home from "./page"

describe("Home", () => {
    it('should render', () => {
   const { container } = render(<Home />);

  // Obtén el texto completo del componente
  const componentText = container.textContent || '';

  // Verifica si la palabra "software" está presente en el texto
  expect(componentText.toLowerCase()).toContain('software');
    })

    })