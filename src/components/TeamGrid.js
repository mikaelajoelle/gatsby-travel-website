import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {Button} from "../components/ButtonElements";

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
                        
                        <ImgContent 
                            alt={item.node.alt}
                            fluid={item.node.img.childImageSharp.fluid}> 
                        </ImgContent>
                        
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
            <Button 
            big="true" fontbig="true" primary="true" round="true" to="/contact"
            css={`
                display: block;
                margin: 6rem auto 0 auto;
                width: 213px;

                @media screen and (max-width: 1200px){
                    margin: 3rem auto 1rem auto;
                }

                @media screen and (max-width: 900px){
                    margin: 7rem auto 0 auto;
                }

                @media screen and (max-width: 600px){
                    margin: 5rem auto 0 auto;
                }
            `}
            >
                Contact Us Now
            </Button>
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
    padding: 7rem 20rem;
    margin: 0 0 18rem 0;
    background: #fafafb;

    @media screen and (max-width: 1500px){
        padding: 5rem 15rem;
    }

    @media screen and (max-width: 1200px){
        padding: 5rem 7rem;
    }
    
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
    font-size: clamp(1rem, 3.5vw, 1.5rem);
    font-weight: 300;
`

const TeamContainer = styled.div`
    padding-bottom: 7rem;

    @media screen and (max-width: 600px){
        padding-bottom: 5rem;
    }
`

const TeamGrids = styled.div`
    padding: 0 15rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 500px 500px;
    grid-gap: 2.5rem;
    grid-row-gap: 10rem;

    @media screen and (max-width: 1200px){
        padding: 5rem 7rem;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 500px);
        grid-row-gap: 3rem;
    }
        
    @media screen and (max-width: 900px){
        padding: 0 4rem;
    }

    @media screen and (max-width: 600px){
        padding: 0 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 500px);
    }
`

const TeamWrapper = styled.div`
    position: relative;
`

const TextContent = styled.div`
    align-items: center;
    position: absolute;
    top: 375px;
    z-index: 999;
    color: #000;
    background: white;
    padding: 0.9rem 3rem 0.9rem 0;
    border-radius: 0 10px 10px 0;
`

const Heading = styled.h3`
    font-size: clamp(1.3rem, 4vw, 1.4rem);
    margin-left: 1.5rem;
`

const Description = styled.p`
    line-height: 1.5;
    font-size: clamp(1rem, 3vw, 1.1rem);
    font-weight: 300;
    margin-left: 1.5rem;
`

const ImgContent = styled(Img)`
    height: 100%;
    max-width: 100%;
    border-radius: 10px;
    position: relative;
    filter: brightness(85%);
`