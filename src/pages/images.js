import * as React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Images = () => (
  <Layout>
    <Seo title="Images" />
    <h1 className="images-gallery">Adventure Awaits</h1>
    <Image />
  </Layout>
)

export default Images
