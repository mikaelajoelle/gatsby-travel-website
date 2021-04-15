import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css";
import AboutGrid from "../components/AboutGrid";
import TeamGrid from "../components/TeamGrid";

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1 className="about">Creating Experiences</h1>
    <AboutGrid heading="3 Steps From Paradise" />
    <TeamGrid />
  </Layout>
)

export default About
