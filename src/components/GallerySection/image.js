import React, {useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import "./image.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const Image = ({heading}) => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)/"}, name: {nin: ["background", "background2", "travel-4", "travel-5", "travel-6", "travel-7", "travel-9", "testimonial-1", "testimonial-2", "guide", "employee-1", "employee-2", "employee-3", "employee-4", "employee-5", "employee-6"]}}
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
        <div className="image-container" data-aos={"fade-up"} >
          <GalleryHeading>{heading}</GalleryHeading>
            <div className="image-grid">
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="image-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base}
                    />
                ))}
            </div>
        </div>
    )
}

export default Image

const GalleryHeading = styled.h2`
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