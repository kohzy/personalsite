import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Cards/card"
import CardGrid from "../components/Cards/cardgrid"

import FeatureList from "../components/Features/featurelist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="intro">
      <div className="flex-grid">
        <div className="col">
          <h5>I’m interested in <a href="https://docs.google.com/document/d/18PWPhkJfq7Y-BbmgPNiEH2359H1xxxG0jB6SOq34Sx4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">many things</a>, but I’ve found that cities, systems, and human interaction have been persistent threads.</h5>
          <h5>I work at <a href="https://www.intersection.com/urban-partnerships/" target="_blank" rel="noopener noreferrer">Intersection</a>. We do digital media for urban environments; I specifically focus on our <a href="https://www.intersection.com/product/ixnconnect/" target="_blank" rel="noopener noreferrer">transit information product</a>. Previously, I’ve spent time at <a href="https://www.uber.com/business/" target="_blank" rel="noopener noreferrer">Uber</a> and at <a href="https://getlua.com/" target="_blank" rel="noopener noreferrer">Lua</a>. At various stages, I’ve done design, marketing, ops, finance. For now, I’ve settled in the space between product and design. </h5>
          <h5 className="no-margin">I’m a slow <a href="https://www.goodreads.com/review/list/71258654-kohzy?shelf=currently-reading" target="_blank" rel="noopener noreferrer">reader</a>, an even slower <a href="https://buttondown.email/kohzy" target="_blank" rel="noopener noreferrer">writer</a>, and slothlike when it comes to texts or email.</h5>
        </div>
      </div>
    </section>
    <section className="sub-intro">
      <div className="flex-grid-half">
        <div className="col">
          <ul className="secondary-nav">
            <li><h4><Link to="/translations">Translations</Link></h4></li>
          </ul>
        </div>
        <div className="col">
          <table className="social-table">
            <tbody>
            <tr>
              <td className="thirty"><h4 className="no-margin">Instagram</h4></td>
              <td><a href="https://www.instagram.com/koh_zy/" target="_blank" rel="noopener noreferrer">@koh_zy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 className="no-margin">Twitter</h4></td>
              <td><a href="https://twitter.com/kohzy" target="_blank" rel="noopener noreferrer">@kohzy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 className="no-margin">are.na</h4></td>
              <td><a href="https://www.are.na/kohzy-koh-1515294007" target="_blank" rel="noopener noreferrer">Kohzy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 className="no-margin">Github</h4></td>
              <td><a href="https://github.com/kohzy" target="_blank" rel="noopener noreferrer">kohzy</a></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
        </div>
      </div>
    </section>
    <section>
      <div className="flex-grid-half">
        <div className="col">
          <h4>Research interests:</h4>
          <ul>
            <li>Mixed reality in shared spaces</li>
            <li>Translation among systems</li>
            <li>The scope of things</li>
          </ul>
        </div>
        <div className="col press">
          <h4>Features:</h4>
          <FeatureList />
        </div>
      </div>
    </section>
    <section>
      <div className="flex-grid">
          <h4>Some projects:</h4>
      </div>
      <CardGrid />
    </section>
    <section>
      <div className="flex-grid">
          <h4>I have a newsletter:</h4>
      </div>
      <div className="flex-grid">
          📬<a href="https://buttondown.email/kohzy" target="_blank" rel="noopener noreferrer">You can read it here</a>.📬
      </div>
    </section>
  </Layout>
)

export default IndexPage
