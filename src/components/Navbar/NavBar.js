import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import {Button} from "../ButtonElements";

const Navbar = () => {

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
                                <NavLinks style={iconStyles} to="/about">
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks style={iconStyles} to="/destinations">
                                    Trips
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