import React, { useState, useEffect } from 'react';
import { FaBars, Fatimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

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
                    <NavBarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            EXPLOR
                        </NavLogo>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar