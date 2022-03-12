import styled from "styled-components";

export const Message = styled.li<any>`
     /* .user {
        position: relative;
        list-style: none;
        background: var(--purple-500);
        
        max-width: 400px;
        
        margin: 0 0 10px auto;
        padding: 7px 20px;
        
        line-height: 30px;
        border-radius: 20px;
    } */
    position: relative;
    list-style: none;
    background: ${props => props.msg ? "var(--purple-600)" : "var(--purple-500)"};
    
    max-width: 400px;
    
    margin-bottom: 10px;
    margin-top: 25px;
    margin-left: ${props => props.msg ? "0" : "auto"};
    padding: 7px 20px;
    
    line-height: 30px;
    border-radius: 20px;
    
    span {
        position: absolute;
        top: -25px;
        left: ${props => props.msg ? "20px" : ""};
        right: ${props => !props.msg ? "20px" : ""};
    }
`