import React from "react"
import { Link } from "gatsby"
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const StreetSmartARPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StreetSmartARPage
