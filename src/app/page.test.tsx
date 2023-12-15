import "@testing-library/jest-dom"
import React from "react"
import {render, screen} from  '@testing-library/react'
import Home from "./page"

describe("Home", () => {
    it('should render', () => {
        render(<Home />)
        const testText = screen.findByText("Contact")


    })