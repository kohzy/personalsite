/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from 'react-flexbox-grid'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <Grid fluid>
              <Row>
                <Col xs={12}>
                  © {new Date().getFullYear()}, Kohzy, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Col>
              </Row>
              <Row center="xs">
                <Col sm={8}>
                  This is v3 of my site. The older versions are still alive, cached on platforms where I have stopped paying subscriptions to keep them public. I will one day go back and find some way to make them available.
                </Col>
              </Row>              
            </Grid>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
