import React from "react"
import Header from "./parts/Header"
import Photo from "./parts/Photo"
import Comments from "./parts/Comments"
import styled from "styled-components"

const Wrapper = styled.div`
    grid-row: 3;
    /* min-width: 375px; */
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    grid-column: 1;
    height: auto;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    @media screen and (min-width: 1024px) {
        margin: 0 0;
    }
`

const Card = ({ avatars, names, photos, locations }) => {
    return (
        <Wrapper className="rounded shadow">
            {photos.map((photo, i) => (
                <div>
                    <Header avatar={avatars[i]} name={names[i]} location={locations[i]} />
                    <Photo photo={photos[i]} />
                    <Comments name={names[i]}  />
                </div>
            ))}
        </Wrapper>
    )
}

export default Card
