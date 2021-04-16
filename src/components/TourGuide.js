import React, {useEffect} from 'react'
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {Button} from "../components/ButtonElements";
import AOS from 'aos';
import "aos/dist/aos.css";

const TourGuide = () => {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {name: {in: "guide"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    return (
        <TourContainer>
            <TourWrapper data-aos={"fade-up"} data-aos-offset="0px">
                <TourText>
                    <TourHeading>
                        Become a Guide
                    </TourHeading>
                    <TourSubHeading>
                        Earn extra income and unlock new opportunities by exploring your city with fellow adventurers.
                    </TourSubHeading>
                    <Button round="true" to="/"
                        css={`
                            background: white;
                            color: black;
                            margin: 1rem 3rem;
                            &:hover{
                                background: #366bcc;
                                color: white;
                            }
                            font-size: clamp(1rem, 3vw, 1.1rem);
                        `}>
                        Learn More
                    </Button>
                </TourText>
                <TourImageContainer>
                {data.allFile.edges.map((image, key) => (
                    <TourImg key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                </TourImageContainer>
            </TourWrapper>
        </TourContainer>
    )
}

export default TourGuide

const TourContainer = styled.div`
    width: 100%;
    color: #000;
    padding: 9rem 20rem;
    height: 100%;

    @media screen and (max-width: 1500px){
        padding: 5rem 15rem;
    }

    @media screen and (max-width: 1300px){
        padding: 7rem 7rem;
    }

    @media screen and (max-width: 600px){
        padding: 5rem 2rem;
    }
`

const TourWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    grid-template-rows: 350px;

    @media screen and (max-width: 1600px){
        grid-template-rows: 380px;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        grid-template-rows: 350px;
    }

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
        grid-template-rows: 400px;
    }
`

const TourText = styled.div`
    background: #f9b19b; 
    border-radius: 10px;
    color: #fff;
    padding: 1.5rem 0 0 0;


    @media screen and (max-width: 1600px){
        padding: 1.5rem 0 5.5rem 0;
    }
`

const TourHeading = styled.h2`
    font-size: 2.2rem;
    padding: 3rem 3rem 0 3rem;
`

const TourSubHeading = styled.h3`
    font-size: 1.2rem;
    padding: 1rem 3rem 3rem 3rem;
    line-height: 1.5;
`

const TourImg = styled(Img)`
    border-radius: 10px;
    height: 100%;
`
const TourImageContainer = styled.div``