import React from "react"
import styled from "styled-components"

const Search = styled.div`
    position: relative;
    display: none;
    @media screen and (min-width: 568px) {
        display: block;
        margin: 0 auto;
    }
    input {
        background: ${({theme}) => theme.border};
        width: 215px;
        outline: none;
        color: ${({theme}) => theme.pink};
        border-radius: 3px;
        text-align: center;
        [type="text"]:focus ~ .fa-search {display:none}
        ::placeholder {
            color: whitesmoke;
        }
    }
    svg {
        position: absolute;
        left: 0;
        color: rgb(168 170 173);
        top: 50%;
        left: 30%;
        @media screen and (min-width: 768px) {
            left: 31%;
        }
        font-size: 11px;
        transform: translateY(-50%);
    }
`

const Searchbar = () => {
    return (
        <Search className="">
            <input type="text" placeholder="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
        </Search>
    )
}

export default Searchbar
