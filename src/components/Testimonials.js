import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {FaRegLightbulb} from "react-icons/fa";
import { useStaticQuery, graphql } from 'gatsby';

const Testimonials = () => {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["testimonial-1", "testimonial-2"]}}) {
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
       <TestimonialsContainer>
           <TopLine>
               Testimonials
           </TopLine>
           <Description>
               What People are Saying
           </Description>
           <ContentWrapper>
               <ColumnOne>
               <Testimonial>
                   <IoMdCheckmarkCircleOutline 
                   css={`
                   color: #3fffa8; 
                   font-size: 2rem; 
                   margin-bottom: 1rem;
                   `}/>
                   <h3>Sean Michaels</h3>
                   <p>"The greatest experience of my life! It was so much fun exploring the mountains
                       and they made it super wasy to book my trip and accomodation. I highly recommend using
                       the Traveyo services, you will not regret it!"
                   </p>
               </Testimonial>
               <Testimonial>
                   <FaRegLightbulb 
                   css={`
                   color: #f9b19b; 
                   font-size: 2rem; 
                   margin-bottom: 1rem;
                   `}/>
                   <h3>Lily Williams</h3>
                   <p>"It was so easy to set-up my trip! They answered all my questions right away 
                       and gave me the best price out of all the companies I researched. Booking a trip is always
                       a stressful process but with Traveyo, it was smooth. I've been travelling for 10 years and
                       this was my most fun trip yet!"
                   </p>
               </Testimonial>
               </ColumnOne>
               <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
               </ColumnTwo>
           </ContentWrapper>
       </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 8rem 10rem;
    height: 100%;

    @media screen and (max-width: 1200px){
        padding: 5rem 7rem;
    }

    @media screen and (max-width: 600px){
        padding: 5rem 2rem;
    }
`

const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 300;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 3rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p{
        color: #3b3b3b;
        line-height: 1.5;
        font-weight: 300;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`