import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css";
import TripsMaster from "../components/TripsMaster";

const Destinations = () => (
  <Layout>
    <Seo title="Destinations" />
    <h1 className="destinations">Destinations</h1>
    <TripsMaster heading="Find The Best Places" />
  </Layout>
)

export default Destinations
