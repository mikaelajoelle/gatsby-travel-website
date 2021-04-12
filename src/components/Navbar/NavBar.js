import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import {Button} from "../ButtonElements";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

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
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/" active={scroll}>
                            Traveyo
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks active={scroll} to="/about">
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks active={scroll} to="/destinations">
                                    Destinations
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks active={scroll} to="/images">
                                    Gallery
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks active={scroll} to="/contact">
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                        <Button primary="true" big="false" round="true">
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