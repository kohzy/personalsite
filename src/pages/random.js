import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RandomPage = () => (
  <Layout>
    <SEO title="Random" keywords={[`random`]} />
    <section className="sub-intro">
      <div className="flex-grid">
        <div className="col">
          <table className="social-table random-table">
            <tr>
              <td className="twenty"><h4 class="no-margin">Boxing</h4></td>
              <td>I find boxing to be the most effective workout for me, and I do enjoy watching professional boxing.</td>
            </tr>
            <tr>
              <td className="twenty"><h4 class="no-margin">Boxing</h4></td>
              <td>I find boxing to be the most effective workout for me, and I do enjoy watching professional boxing.</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </Layout>
)

export default RandomPage
