import React from 'react';
import styled from "styled-components";

const AboutGrid = ({heading}) => {
    return (
        <AboutContainer>
            <AboutHeading>{heading}</AboutHeading>
        </AboutContainer>
    )
}

export default AboutGrid

const AboutContainer = styled.div`
    min-height: 100vh;
    padding: 7rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #fff;
`

const AboutHeading = styled.h2`
    font-size: clamp(1.2rem, 4vw, 2.5rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
    font-weight: 300;

    &::after{
        content: '';
        border-bottom: 1px solid #000;
        width: 60px;
        display: block;
        margin: 1rem auto 0 auto;
    }
`