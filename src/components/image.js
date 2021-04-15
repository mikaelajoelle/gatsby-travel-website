import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import "./image.css";

const Image = ({heading}) => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)/"}, name: {nin: ["background", "background2", "travel-4", "travel-5", "travel-6", "travel-7", "travel-9", "testimonial-1", "testimonial-2", "guide"]}}
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
        <div className="image-container">
          <GalleryHeading>{heading}</GalleryHeading>
            <div className="image-grid">
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="image-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]}
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