import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {Button} from "../components/ButtonElements";

const TourGuide = () => {

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
            <TourWrapper>
                <TourText>
                    <TourHeading>
                        Become a Guide
                    </TourHeading>
                    <TourSubHeading>
                        Earn extra income and unlock new opportunities by exploring
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
                        `}>
                        Learn More
                    </Button>
                </TourText>
                {data.allFile.edges.map((image, key) => (
                    <TourImg key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
            </TourWrapper>
        </TourContainer>
    )
}

export default TourGuide

const TourContainer = styled.div`
    width: 100%;
    color: #000;
    padding: 9rem 16rem;
    height: 100%;

    @media screen and (max-width: 1200px){
        padding: 5rem 7rem;
    }

    @media screen and (max-width: 600px){
        padding: 5rem 2rem;
    }
`

const TourWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`

const TourText = styled.div`
    background: #f9b19b; 
    border-radius: 10px 0 0 10px;
    color: #fff;
    padding: 1.5rem 0 5.5rem 0;

    @media screen and (max-width: 1000px){
        border-radius: 10px 10px 0 0;
    }
`

const TourHeading = styled.h2`
    font-size: 2.2rem;
    padding: 3rem 3rem 0 3rem;
`

const TourSubHeading = styled.h3`
    font-size: 1.2rem;
    padding: 1rem 3rem 2.5rem 3rem;
    line-height: 1.5;
`

const TourImg = styled(Img)`
    border-radius: 0 10px 10px 0;
    height: 100%;

    @media screen and (max-width: 1000px){
        border-radius: 0 0 10px 10px;
    }
`