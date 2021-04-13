import * as React from "react";
import HeroSection from "../components/HeroSection/Hero";
//import Image from "../components/image";
import Trips from "../components/Trips";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Trips />
  </Layout>
)

export default IndexPage
