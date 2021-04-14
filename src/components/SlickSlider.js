import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/slider.css";

const SliderTrips = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)/"}, name: {nin: ["background", "background2", "travel-4", "testimonial-1", "testimonial-2"]}}
        ) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 600) {
                 ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }      
    `)

    return (
        <div className="slider-container">
            <TopLine>
               Gallery
           </TopLine>
           <Description>
               Capture your Travels
           </Description>
            <div className="slider-grid">
                <Slider {...settings}>
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="slider-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]}
                    />
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderTrips

    const settings = {
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    };

    
const TopLine = styled.h2`
    color: #077bf1;
    font-size: 1rem;
    margin-bottom: 0.75rem;
`

const Description = styled.h3`
    text-align: start;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 300;
`