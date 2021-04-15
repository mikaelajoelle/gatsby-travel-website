import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const TeamGrid = () => {

    const data = useStaticQuery(graphql`
    query TeamQuery {
        allTeamDataJson {
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
     function getTeam(data) {
        const teamArray = [];
        data.allTeamDataJson.edges.forEach((item, index) => {
            teamArray.push(
                    <TeamWrapper key={index}>
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
                    </TeamWrapper>
            )
        })
        return teamArray
     }

    return (
        <TeamContainer>
            <AboutDescription>
                <TopHeading>
                A Culture of Talent and Discovery
                </TopHeading>
                <AboutPar>
                Our talented team of experienced explorers, pioneers, adventurers and
                unshakable inspirers are the best of the best, dedicated to helping you 
                go where you’ve dreamed of. We truly believe that we can put the magic 
                back into peoples’ lives.
                </AboutPar>
            </AboutDescription>
            <TeamGrids>
                {getTeam(data)}
            </TeamGrids>
        </TeamContainer>
    )
}

export default TeamGrid

const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 7rem 12rem;
    margin: 0 0 8rem 0;
    background: #fcfcfc;
    
    @media screen and (max-width: 900px){
        padding: 5rem 4rem;
    }

    @media screen and (max-width: 600px){
        padding: 3rem 3rem;
    }
`
const TopHeading = styled.h3`
    margin-bottom: 2.5rem;
    font-size: clamp(1.2rem, 3.5vw, 1.5em);
`

const AboutPar = styled.p`
    line-height: 1.5;
    font-size: clamp(1rem, 3.5vw, 1.3rem);
    font-weight: 300;
`

const TeamContainer = styled.div`
    padding-bottom: 7rem;

    @media screen and (max-width: 600px){
        padding-bottom: 5rem;
    }
`

const TeamGrids = styled.div`
    padding: 0 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
        
    @media screen and (max-width: 900px){
        padding: 0 4rem;
        grid-gap: 1rem;
    }

    @media screen and (max-width: 600px){
        padding: 0 3rem;
        grid-template-columns: 1fr;
        grid-gap: 0.2rem;
    }
`

const TeamWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 300px;
    grid-gap: 1rem;
    padding: 2rem 0;
    color: #000;

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: 100px 300px;
    }
`

const TextContent = styled.div`
    padding: 0 4rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1100px){
        padding: 0;
    }
`

const Heading = styled.h3`
    font-size: clamp(1.4rem, 4vw, 1.5rem);
`

const Description = styled.p`
    line-height: 1.5;
    font-size: clamp(1.2rem, 3vw, 1.2rem);
    font-weight: 300;
    padding: 0.5rem 0;
`

const ImgContent = styled(Img)`
    height: 100%;
    max-width: 100%;
    border-radius: 10px;
`

const ImgWrapper = styled.div``