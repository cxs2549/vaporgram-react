import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    grid-column: 2;
    width: 100%;
    height: 1300px;
    display: none;
    @media screen and (min-width: 1024px) {
        display: block;
    }
`
const Container = styled.div`
    width: 293px;
    height: 543px;
    position: relative;
    color: ${({theme}) => theme.text}
`
const Fixed = styled.div`
    position: fixed;
    width: 293px;
    height: 543px;
    top: 70px;
`

const Sidebar = ({avatars, names, followedby, more}) => {
    return (
        <Wrapper>
            <Container class="hidden xl:inline">
                <Fixed>
                    <Wrapper>
                        <div className="w-full">
                            <div className="flex items-center mt-1">
                                <img
                                    style={{ width: 56, height: 56}}
                                    className="mt-6 rounded-full object-cover"
                                    src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/s150x150/47071936_219407082311768_8575375825392631808_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=29Y1ujfKDd4AX-rVYGv&oh=499ac01017b18bd85fe9a9eacd4247c2&oe=5F86B66E"
                                    alt=""
                                />
                                <div className="flex flex-col mt-4 ml-2 leading-5 text-gray-400 ">
                                    <span className="font-semibold text-sm">cxs86</span>
                                    <span className="text-gray-500 text-xs">Cliff Sanchez</span>
                                </div>
                            </div>

                            <div className="flex justify-between mt-6 font-semibold">
                                <span className="text-sm">Suggestions For You</span>
                                <span className="text-xs">See All</span>
                            </div>
                             {more.map((more, i) => (
                                <div className="flex items-center justify-between mt-3 mb-2 leading-4">
                                    <div className="flex text-sm">
                                        <div className="flex items-center">
                                            <img
                                                src={avatars[i]}
                                                className="w-8 h-8 rounded-full"
                                                alt="avatar"
                                            />
                                            <div className="flex flex-col ml-2 ">
                                                <span className="font-semibold text-sm">
                                                    {names[i]}
                                                </span>
                                                <span className="text-gray-500 text-xs mt-1">
                                                    {followedby[i]}
                                                </span>
                                                <span className="text-gray-500 text-xs">
                                                    {more}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-blue-400">
                                        Follow
                                    </span>
                                </div>
                            ))} 
                            <div className=" text-gray-700">
                                <nav>
                                    <ul className="mt-8 leading-4 text-gray-500">
                                        <li style={{ fontSize: 11 }} className="inline">
                                            About
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Help
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Press
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            API
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Jobs
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Privacy
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Terms
                                        </li>
                                        <br />
                                        <li style={{ fontSize: 11 }} className="inline">
                                            Hashtags
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Language
                                        </li>
                                        <li style={{ fontSize: 11 }} className="inline ml-2">
                                            Top Accounts
                                        </li>
                                    </ul>
                                </nav>
                                <footer
                                    style={{ fontSize: 11, fontFamily: "Helvetica" }}
                                    className="mt-4 text-gray-500"
                                >
                                    &copy; 2020 SuperVision Design
                                </footer>
                            </div>
                        </div>
                    </Wrapper>
                </Fixed>
            </Container>
        </Wrapper>
    )
}

export default Sidebar
