import * as React from "react";
import HeroSection from "../components/HeroSection/Hero";
//import Image from "../components/image";
import Trips from "../components/Trips";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Testiomonials from "../components/Testimonials";
import Email from "../components/Email";
import SlickSlider from "../components/SlickSlider";
import TourGuide from "../components/TourGuide";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Trips heading="Top Destinations"/>
    <Testiomonials />
    <TourGuide />
    <SlickSlider />
    <Email />
  </Layout>
)

export default IndexPage
