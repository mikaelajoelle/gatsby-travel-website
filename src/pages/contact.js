import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css";
import SignupForm from "../components/Formik";

const Contact = () => (
  
  <Layout>
    <Seo title="Contact" />
    <h1 className="contact">Contact Us</h1>
    <SignupForm />
  </Layout>
)

export default Contact
