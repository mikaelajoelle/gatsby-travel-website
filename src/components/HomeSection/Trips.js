import React, {useEffect} from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {Button} from "../ButtonElements";
import { ImLocation } from "react-icons/im";
import AOS from 'aos';
import "aos/dist/aos.css";

const Trips = () => {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson {
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
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg 
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} 
                    />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <Button primary="true" round="true" 
                            css={`
                            position: absolute; 
                            top: 420px; 
                            font-size: 14px`} 
                            to="/destinations">{item.node.button}
                        </Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }

    return (
        <ProductsContainer>
            <TopLine>
               Destinations
           </TopLine>
           <Description>
               Explore Popular Tours
           </Description>
            {/* Passing in data to function */}
            <ProductWrapper data-aos={"fade-up"} data-aos-offset="0px">{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 7rem 0;
    background: #fff;
    color: #fff;
    padding: 10rem 20rem;

    @media screen and (max-width: 1500px){
        padding: 5rem 15rem;
    }

    @media screen and (max-width: 1300px){
        padding: 5rem 7rem;
    }

    @media screen and (max-width: 600px){
        padding: 5rem 2rem;
    }
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease-in;
    filter: brightness(75%);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`

const TopLine = styled.h2`
    color: #077bf1;
    font-size: 1rem;
    margin-bottom: 0.75rem;
`

const Description = styled.h3`
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 300;
    color: black;
`