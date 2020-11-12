import React from "react"
import Logo from "./parts/Logo"
import Searchbar from "./parts/Searchbar"
import Links from "./parts/Links"
import styled from "styled-components"

const Nav = styled.nav`
    width: 100%;
    height: 54px;
    background: ${({ theme }) => theme.body};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    opacity: 95%;
`
const Wrapper = styled.div`
    display: flex;
    max-width: 900px;
    min-width: 375px;
    margin: 0 auto;
    padding: 0 20px;
    height: 54px;
    color: ${({ theme }) => theme.text};
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: 20% auto 30%;
        grid-template-rows: 54px;
    }
    @media screen and (min-width: 1024px) {
        padding: 0;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Wrapper>
                <Logo />
                <Searchbar />
                <Links />
            </Wrapper>
        </Nav>
    )
}

export default Navbar
