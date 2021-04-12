import React from 'react';
import "./HeroSection.css";
import {Button} from "../ButtonElements";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Plan your next trip today</p>
            <div className="hero-btns">
                {/* including props from styled components */}
                <Button fontBig big primary round>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection