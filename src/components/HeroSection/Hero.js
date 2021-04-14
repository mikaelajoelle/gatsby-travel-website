import React from 'react';
import "./HeroSection.css";
import {Button} from "../ButtonElements";
import Video from "../../images/hero-video.mp4";
import styled from 'styled-components';

function HeroSection() {
    return (
        <div className="hero-container">
            <VideoBg src={Video} type="video.mp4" autoPlay loop playsInline muted/>
            <h1>Unreal Destinations</h1>
            <p>Your Dream Oasis</p>
            <div className="hero-btns">
                {/* including props from styled components */}
                <Button fontbig="true" big="true" primary="true" round="true" to="/destinations">
                    Get Started Today
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

const VideoBg = styled.video`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    filter: brightness(80%);
`