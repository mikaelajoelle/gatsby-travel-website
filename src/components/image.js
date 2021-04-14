import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./image.css";

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)/"}, name: {nin: ["background", "background2", "travel-4", "travel-5", "travel-6", "travel-7", "travel-9", "testimonial-1", "testimonial-2"]}}
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