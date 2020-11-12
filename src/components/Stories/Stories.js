import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    position: relative;
    color: ${({theme}) => theme.text};
    max-width: 600px;
    width: 375px;
    margin: 0 auto;
    grid-row: 2;
    grid-column: 1; 
    border-bottom: 2px solid ${({theme}) => theme.pink};
    height: 120px;
    padding: 0 8px;
    display: flex;
    overflow-x: scroll;
    /* overflow-y: hidden; */
    align-items: center;
    @media screen and (min-width: 411px) {
        width: 100%;
    }
    background: ${({ theme }) => theme.body};
    @media screen and (min-width: 768px) {
        /* margin-top: 78px; */
    }
    @media screen and (min-width: 1024px) {
        margin: 0 0;
    }
`

const AccentCircle = styled.div`
    width: 70px;
    height: 70px;
    background-image: url('https://i.gifer.com/DjGH.gif');
    border: 2px solid ${({theme}) => theme.border};
`

const Stories = ({avatars, names}) => {
    return (
        <Wrapper className="rounded shadow">
            {avatars.map((avatar, i) => (
                <div className="flex flex-col items-center mr-2">
                    <AccentCircle className="rounded-full px-1">
                        <img
                            style={{ width: 68, borderColor: '#F7A1C4' }}
                            className="shadow object-cover object-center transition-all duration-300 transform rounded-full cursor-pointer hover:scale-110 border-2 "
                            src={avatar}
                            alt=""
                        />
                    </AccentCircle>

                    <span className="text-xs px-2 mt-1 whitespace-no-wrap">{names[i]}</span>
                </div>
            ))}

            <div
                style={{ right: 5, width: 25, height: 0 }}
                className="sticky rounded-full bg-gray-600  bg-gray-500 opacity-75 flex items-center justify-center"
            >
                <i class="fa fa-angle-right text-2xl" aria-hidden="true"></i>
            </div>
        </Wrapper>
    )
}

export default Stories
