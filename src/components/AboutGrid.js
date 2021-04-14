import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const AboutGrid = ({heading}) => {

    const data = useStaticQuery(graphql`
    query AboutQuery {
        allAboutDataJson {
          edges {
            node {
              alt
              title
              desc
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

     // Function goes through JSON data and returns data
     function getSteps(data) {
        const stepsArray = [];
        data.allAboutDataJson.edges.forEach((item, index) => {
            stepsArray.push(
                    <StepContainer key={index}>
                        <TextContent>
                            <Heading>{item.node.title}</Heading>
                            <Description>{item.node.desc}</Description>
                        </TextContent>
                        <ImgWrapper>
                            <ImgContent 
                                alt={item.node.alt}
                                fluid={item.node.img.childImageSharp.fluid}> 
                            </ImgContent>
                        </ImgWrapper>
                    </StepContainer>
            )
        })
        return stepsArray
     }

    return (
        <AboutContainer>
            <AboutHeading>{heading}</AboutHeading>
            <AboutWrapper>
                {getSteps(data)}
            </AboutWrapper>
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
const AboutWrapper = styled.div`
    padding: 0 10rem;
    
    @media screen and (max-width: 900px){
        padding: 0 4rem;
    }

    @media screen and (max-width: 600px){
        padding: 0 3rem;
    }
`

const StepContainer = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    grid-template-rows: 325px;
    grid-gap: 2rem;
    padding: 6rem 0;
    color: #000;

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: 200px;
        padding: 5rem 0;
    }
`

const TextContent = styled.div`
    padding: 0 4rem 4rem 0;

    @media screen and (max-width: 1100px){
        padding: 0 0 4rem 0;
    }
`

const Heading = styled.h3`
    font-size: 2rem;
`

const Description = styled.p`
    line-height: 1.5;
    font-size: clamp(1.3rem, 4vw, 1.5rem);
    font-weight: 300;
    padding: 2rem 0;
`

const ImgContent = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    padding: 4rem;
`

const ImgWrapper = styled.div`
    @media screen and (max-width: 1100px){
        height: 350px;
    }
`
