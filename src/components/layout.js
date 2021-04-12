/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import "./layout.css";
import Navbar from './Navbar/NavBar';
import Footer from "./Footer";

const Layout = ({ children }) => {

  return (
    <>
    <Navbar />
        <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout
