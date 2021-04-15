import * as React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Images = () => (
  <Layout>
    <Seo title="Images" />
    <h1 className="images-gallery">Photo Gallery</h1>
    <Image heading="Captured Moments"/>
  </Layout>
)

export default Images
