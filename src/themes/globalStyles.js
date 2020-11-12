import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background: #1D1A31;
    }
    [type="text"]:focus ~ .fa-search {
        display: none
    }
`
