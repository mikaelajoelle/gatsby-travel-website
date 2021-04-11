import * as React from "react"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
