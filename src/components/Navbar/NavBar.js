import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Button} from "../ButtonElements";
import styled from 'styled-components';
import {Link} from 'gatsby';

const Navbar = () => {

    const _isMounted = useRef(true); // Initial value _isMounted = true

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    let iconStyles = {color: scroll ? "#141414" : "#fff" && 
    click? "#141414" : "#fff"};
    let navBackgroundStyle = {backgroundColor: scroll ? "#fff" : "transparent" && 
    click ? "#fff" : "transparent"};
    let buttonStyles = {backgroundColor: scroll ? "#f26a2e" : "transparent"}

    // Toggle the mobile icon
    const handleClick = () => setClick(!click);

    // Scroll will become true once scrolled 80px
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        changeNav();
        window.addEventListener("scroll", changeNav);
        _isMounted.current = false;
    }, [])

    return (
        <>
            {/* Setting Icons to same colour */}
            <IconContext.Provider value={{color: "#141414"}}>
                {/* When you scroll or click, it updates the background */}
                <Nav active={scroll} click={click} style={navBackgroundStyle}>
                    <NavbarContainer>
                        <NavLogo to="/" style={iconStyles}>
                            Traveyo
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                                {click ? <FaTimes style={iconStyles} /> : <FaBars style={iconStyles} />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks style={iconStyles} to="/destinations">
                                    Trips
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks style={iconStyles} to="/about">
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks style={iconStyles} to="/images">
                                    Gallery
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks style={iconStyles} to="/contact">
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                        <Button 
                        style={buttonStyles}
                        css={`
                        background: transparent;
                        border: 1px solid white;
                        `} round="true" to="/">
                            Book a Flight
                        </Button>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

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
    margin-right: -30px;

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