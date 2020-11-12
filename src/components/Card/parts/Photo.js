import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    background: ${({ theme }) => theme.border};
    height: auto;
`

const Photo = ({ photo }) => {
    return (
        <Wrapper>
            <img src={photo} alt="" />
        </Wrapper>
    )
}

export default Photo
