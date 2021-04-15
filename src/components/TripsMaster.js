import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Button}  from './ButtonElements';
import { ImLocation } from "react-icons/im";


const TripsMaster = ({heading}) => {

    const data = useStaticQuery(graphql`
    query {
        allTripsMasterJson {
          edges {
            node {
              alt
              button
              name
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
    function getTrips(data) {
        const tripsArray = [];
        data.allTripsMasterJson.edges.forEach((item, index) => {
            tripsArray.push(
                <TripCard key={index}>
                    <TripImg
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} 
                    />
                    <TripInfo>
                        <TripTextWrap>
                            <ImLocation />
                            <TripTitle>{item.node.name}</TripTitle>
                        </TripTextWrap>
                        <Button primary="true" round="true" 
                            css={`
                            position: absolute; 
                            top: 420px; 
                            font-size: 14px`} 
                            to="/destinations">{item.node.button}
                        </Button>
                    </TripInfo>
                </TripCard>
            )
        })
        return tripsArray
    }

    return (
        <TripContainer>
            <TripHeading>{heading}</TripHeading>
            {/* Passing in data to function */}
            <TripWrapper>{getTrips(data)}</TripWrapper>
        </TripContainer>
    )
}

export default TripsMaster

const TripContainer = styled.div`
    min-height: 100vh;
    padding: 7rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #fff;
`

const TripHeading = styled.h2`
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

const TripWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 10rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
        padding: 0 5rem;
    }

    @media screen and (max-width: 600px){
        padding: 0 3rem;
    }
`

const TripCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const TripImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

const TripInfo= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`

const TripTextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const TripTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`