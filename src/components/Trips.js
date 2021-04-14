import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Button}  from './ButtonElements';
import { ImLocation } from "react-icons/im";

const Trips = ({heading}) => {

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
            <ProductsHeading>{heading}</ProductsHeading>
            {/* Passing in data to function */}
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 7rem 0;
    background: #fff;
    color: #fff;
`

const ProductsHeading = styled.h2`
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

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 16rem;

    @media screen and (max-width: 1300px){
        grid-template-columns: 1fr;
        padding: 0 7rem;
    }

    @media screen and (max-width: 600px){
        padding: 0 2rem;
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