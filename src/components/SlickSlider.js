import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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
        <div className="image-container">
            <div className="image-grid">
                <Slider {...settings}>
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="image-item"
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
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3
    };
