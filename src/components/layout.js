/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
        <div className="container"
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            <div className="flex-grid">
              <div className="col">
                © {new Date().getFullYear()}, Kohzy, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </div>
            <div className="flex-grid">
              <div className="col">
                This is v3 of my site. The older versions are still alive, cached on platforms where I have stopped paying subscriptions to keep them public. I will one day go back and find some way to make them available.
              </div>
            </div>
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
