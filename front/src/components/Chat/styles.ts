import styled from "styled-components";

type IProps = {
    user: string;
}

export const Message = styled.li<IProps>`
    position: relative;
    list-style: none;
    background: ${props => props.user ? "var(--purple-600)" : "var(--purple-500)"};
    
    max-width: 400px;
    
    margin-bottom: 10px;
    margin-top: 25px;
    margin-left: ${props => props.user ? "0" : "auto"};
    padding: 7px 20px;
    
    line-height: 30px;
    border-radius: 20px;
    
    p {
        position: absolute;
        top: -25px;
        left: ${props => props.user ? "20px" : ""};
        right: ${props => !props.user ? "20px" : ""};

        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`