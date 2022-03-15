import styled from "styled-components";

type IProps = {
    user: string;
}

export const Message = styled.li<IProps>`
    position: relative;
    list-style: none;
    background: ${props => 
        props.user ?
        "var(--purple-600)" :
        "var(--purple-500)"
    };
    
    max-width: 400px;

    display: inline-block;

    margin: ${props => 
        props.user ?
        "25px auto 10px 0px" :
        "25px 0px 10px auto"
    };
    padding: 7px 20px;
    
    line-height: 30px;
    border-radius: 20px;
    
    p {
        position: absolute;
        top: -25px;
        left: ${props => props.user ? "5px" : ""};
        right: ${props => props.user ? "" : "5px"};

        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media(max-width: 700px) {
        max-width: 320px;
    }
`