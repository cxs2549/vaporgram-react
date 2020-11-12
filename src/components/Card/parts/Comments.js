import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    background: ${({ theme }) => theme.body};
    position: relative;
    height: auto;
    display: flex;
    border-bottom: 2px solid ${({ theme }) => theme.pink};
    flex-direction: column;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    @media screen and (min-width: 640px) {
        margin-bottom: 60px;
    }
`

const LineWrap = styled.div`
    margin: 3px 16px;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    letter-spacing: 0.08rem;
`

const Input = styled.input``
const Border = styled.div`
    border-top: 1px solid rgba(19, 22, 29, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Comment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Comments = ({
    name,
    likes,
    word,
    numbered,
    commentor,
    comment,
    commentor2,
    comment2,
    time,
}) => {
    return (
        <Wrapper>
            {/* icons */}
            <div className="flex items-center justify-between w-full">
                <div>
                    <i
                        style={{ fontSize: "1.5rem" }}
                        className="mt-3 ml-4 text-red-600 cursor-pointer fa fa-heart"
                        aria-hidden="true"
                    ></i>
                    <i
                        style={{ fontSize: "1.5rem" }}
                        className="ml-4 cursor-pointer fa fa-comment"
                        aria-hidden="true"
                    ></i>
                    <i
                        style={{ fontSize: "1.5rem" }}
                        className="ml-4 cursor-pointer fa fa-paper-plane"
                        aria-hidden="true"
                    ></i>
                </div>
                <i
                    style={{ fontSize: "1.5rem" }}
                    class="fa fa-bookmark mr-4 mt-3 cursor-pointer text-gray-600"
                    aria-hidden="true"
                ></i>
            </div>
            {/* likes/views */}
            <LineWrap>
                {likes} {word}
            </LineWrap>
            {/* caption */}
            <LineWrap>
                {name} <span className="ml-2 font-light">#Nothing really matters</span>
            </LineWrap>
            {/* viewAll */}
            <LineWrap className="t">
                <div className="text-gray-600 cursor-pointer">View all {numbered} comments</div>
            </LineWrap>
            {/* comment1 */}
            <LineWrap>
                <Comment className="flex items-center justify-between">
                    <div>
                        {commentor} <span className="font-light"> {comment}</span>
                    </div>
                    <i className="text-xs fa fa-heart text-gray-600" aria-hidden="true"></i>
                </Comment>
            </LineWrap>
            {/* comment2 */}
            <LineWrap>
                <Comment className="flex items-center justify-between">
                    <div>
                        {commentor2} <span className="font-light"> {comment2}</span>
                    </div>
                    <i className="text-xs fa fa-heart text-gray-600" aria-hidden="true"></i>
                </Comment>
            </LineWrap>
            {/* hours ago */}
            <LineWrap>
                <span
                    className="pb-2 tracking-tight text-gray-600 uppercase "
                    style={{ fontSize: "11px" }}
                >
                    {time} hours ago
                </span>
            </LineWrap>
            <Border>
                <Input
                    className="h-6 pt-6 pb-8 pl-5 bg-transparent outline-none"
                    type="text"
                    placeholder="Add a comment..."
                />

                <span style={{ fontSize: "14px" }} className="mr-5 font-semibold text-blue-300">
                    Post
                </span>
            </Border>
        </Wrapper>
    )
}

export default Comments
