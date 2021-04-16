import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const Footer = () => {
    return (
        <FooterContainer>
           <FooterLinksWrapper>
               <FooterDesc>
                   <h3>Traveyo</h3>
                   <p>For educational purposes only &mdash; Adapted from Brian Designs</p>
               </FooterDesc>
               <FooterLinkItems>
                   <FooterLinkTitle>Contact Us</FooterLinkTitle>
                   <FooterLink to="/about">Support</FooterLink>
                   <FooterLink to="/destinations">Destinations</FooterLink>
                   <FooterLink to="/images">Gallery</FooterLink>
                   <FooterLink to="/">Sponsorships</FooterLink>
               </FooterLinkItems>
           </FooterLinksWrapper>
           <FooterLinksWrapper>
               <FooterLinkItems>
                   <FooterLinkTitle>Videos</FooterLinkTitle>
                   <FooterLink to="/">Submit Video</FooterLink>
                   <FooterLink to="/">Ambassadors</FooterLink>
                   <FooterLink to="/">Partners</FooterLink>
                   <FooterLink to="/">Influencers</FooterLink>
               </FooterLinkItems>
               <FooterLinkItems>
                   <FooterLinkTitle>Social Media</FooterLinkTitle>
                   <FooterLink to="/">Instagram</FooterLink>
                   <FooterLink to="/">Facebook</FooterLink>
                   <FooterLink to="/">LinkedIn</FooterLink>
                   <FooterLink to="/">Twitter</FooterLink>
               </FooterLinkItems>
           </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h3{
        margin-bottom: 3rem;
        color: #f26a2e;
        font-size: 28px;
    }

    p{
        font-size: 15px;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 5rem;

    @media screen and (max-width: 1000px){
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`
