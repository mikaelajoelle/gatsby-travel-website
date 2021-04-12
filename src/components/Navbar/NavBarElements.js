import styled from 'styled-components';
import {Link} from 'gatsby';

export const Nav = styled.nav`
    background: ${({active}) => active ? "#fff" : 
    "transparent"};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
`

export const NavLogo = styled(Link)`
    color: ${({active}) => active ? "#141414" : 
    "#fff"};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-family: "Ubuntu", sans-serif;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 10px;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({click}) => (click ? "100%" : "-1000px")};
        opacity: 1;
        transition: all 0.2s ease;
        background: #fff;
        margin-right: 0;

    }
`

export const NavLinks = styled(Link)`
    color: ${({active}) => active ? "#141414" : 
    "#fff"};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        font-weight: 300;
        color: #141414;

        &:hover {
            color: #fa8100;
            transition: all 0.3s ease;
        }
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 960px){
        display: none;
    }
`

export const NavItem = styled.div``