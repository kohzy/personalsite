import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Kohzy</h3>
    <section>
      <p>I’m interested in many things, but I’ve found that cities, systems, and human interaction have been persistent threads.</p>
      <p>I work at Intersection. We do digital media for urban environments; I specifically focus on our transit information product. Previously, I’ve spent time at Uber, Lua, and Barclays. At various stages, I’ve done design, marketing, ops, finance. For now, I’ve settled in the space between product and design. </p>

      <p>I’m a slow reader, an even slower writer, and slothlike when it comes to texts or email.</p>
    </section>
    <section>
      <ul>
        <li>Projects</li>
        <li>Research Interests</li>
        <li>Writing</li>
        <li>Resume</li>
      </ul>
      <table>
        <tr>
          <td>Instagram</td>
          <td>@koh_zy</td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td>@kohzy</td>
        </tr>
        <tr>
          <td>Are.na</td>
          <td>Kohzy</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>kohzy</td>
        </tr>
      </table>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
