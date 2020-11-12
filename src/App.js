import React from "react"
import { theme } from "./themes/theme"
import { GlobalStyles } from "./themes/globalStyles"
import Sidebar  from "./components/Sidebar/Sidebar"
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Stories from "./components/Stories/Stories"
import styled, { ThemeProvider } from "styled-components"
import data from "./data"

const Wrapper = styled.div`
    /* width: 100%;
    height: 100%; */
`
const Main = styled.div`
    display: grid;
    margin: 0 auto;
    max-width: 900px;
    min-width: 375px;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 54px 120px 60px;
    grid-gap: 2px;
    @media screen and (min-width: 600px) {
        grid-gap: 16px;
    }
    @media screen and (min-width: 1024px) {
        grid-row-gap: 24px;
        grid-column-gap: 40px;
        grid-template-columns: 1fr auto;
    }
`

// console.log(photos)

const App = () => {
    const  { avatars, longNames, shortNames, photos, locations } = data
    const {followedby, more} = data.sidebar

    // console.log(photos)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                    <Navbar />
                <Main>
                    <Stories avatars={avatars} names={shortNames} />
                    <Card
                        avatars={avatars}
                        names={longNames}
                        locations={locations}
                        photos={photos}
                    />
                    <Sidebar
                        avatars={avatars}
                        names={longNames}
                        followedby={followedby}
                        more={more}

                    />
                </Main>
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
