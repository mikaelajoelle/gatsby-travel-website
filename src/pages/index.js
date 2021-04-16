import * as React from "react";
import HeroSection from "../components/HeroSection/Hero";
//import Image from "../components/image";
import Trips from "../components/HomeSection/Trips";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Testiomonials from "../components/HomeSection/Testimonials";
import Email from "../components/HomeSection/Email";
import SlickSlider from "../components/SlickSlider/SlickSlider";
import TourGuide from "../components/HomeSection/TourGuide";

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
