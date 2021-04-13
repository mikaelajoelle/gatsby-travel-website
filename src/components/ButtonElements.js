import styled from 'styled-components';
import {Link} from "gatsby";

export const Button = styled(Link)`
    border-radius: 4px;
    background: ${({ primary }) => ( primary ? "#f26a2e" :
    "#0467FB" )};
    white-space: no-wrap;
    padding: ${({ big }) => (big ? "16px 40px" :
    "10px 32px")};
    color: #fff;
    font-size: ${({ fontbig }) => (fontbig? "20px" :
    "14px")};
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important!;
    border-radius: ${({round}) => (round? '50px' : 'none')};
    font-family: "Roboto", sans-serif;

    &:hover{
        background: ${({ primary }) => ( primary ? "#0467FB" :
        "#ff4040" )};
    }
`