import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    height: 60px;
    width: 100%;
    padding: 0 10px;
    background: ${({ theme }) => theme.body};
    display: flex;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
`

const Header = ({ avatar, name, location }) => {
    return (
        <Wrapper>
            <div className="flex justify-between">
                <img
                    src={avatar}
                    style={{ width: 32, height: 32 }}
                    className="flex flex-col ml-2 bg-red-500 rounded-full shadow"
                    alt="avatar"
                />
                <div className="flex flex-col justify-center ml-3 text-white leading-4">
                    <span className="font-semibold text-sm">{name}</span>
                    <span className="text-xs">{location}</span>
                </div>
            </div>
            <i
                
                class="fa fa-ellipsis-h mr-4"
                aria-hidden="true"
            ></i>
        </Wrapper>
    )
}

export default Header
