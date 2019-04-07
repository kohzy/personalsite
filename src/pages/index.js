import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="intro">
      <div className="flex-grid">
        <div className="col">
          <h5>I’m interested in many things, but I’ve found that cities, systems, and human interaction have been persistent threads.</h5>
          <h5>I work at <a href="https://www.intersection.com/urban-partnerships/" target="_blank" rel="noopener noreferrer">Intersection</a>. We do digital media for urban environments; I specifically focus on our <a href="https://www.intersection.com/product/ixnconnect/" target="_blank" rel="noopener noreferrer">transit information product</a>. Previously, I’ve spent time at <a href="https://www.uber.com/business/" target="_blank" rel="noopener noreferrer">Uber</a> and at <a href="https://getlua.com/" target="_blank" rel="noopener noreferrer">Lua</a>. At various stages, I’ve done design, marketing, ops, finance. For now, I’ve settled in the space between product and design. </h5>
          <h5 class="no-margin">I’m a slow <a href="https://www.goodreads.com/review/list/71258654-kohzy?shelf=currently-reading" target="_blank" rel="noopener noreferrer">reader</a>, an even slower <a href="https://blog.kohzy.com/" target="_blank" rel="noopener noreferrer">writer</a>, and slothlike when it comes to texts or email.</h5>
        </div>
      </div>
    </section>
    <section className="sub-intro">
      <div className="flex-grid">
        {/*
        <div className="col">
          <ul className="secondary-nav">
            <li><h4>Projects</h4></li>
            <li><h4>Research Interests</h4></li>
            <li><h4>Writing</h4></li>
            <li><h4>Resume</h4></li>
          </ul>
        </div>
        */}
        <div className="col">
          <table className="social-table">
            <tr>
              <td className="thirty"><h4 class="no-margin">Instagram</h4></td>
              <td><a href="https://www.instagram.com/koh_zy/" target="_blank" rel="noopener noreferrer">@koh_zy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 class="no-margin">Twitter</h4></td>
              <td><a href="https://twitter.com/kohzy" target="_blank" rel="noopener noreferrer">@kohzy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 class="no-margin">are.na</h4></td>
              <td><a href="https://www.are.na/kohzy-koh-1515294007" target="_blank" rel="noopener noreferrer">Kohzy</a></td>
            </tr>
            <tr>
              <td className="thirty"><h4 class="no-margin">Github</h4></td>
              <td><a href="https://github.com/kohzy" target="_blank" rel="noopener noreferrer">kohzy</a></td>
            </tr>
          </table>
        </div>
        <div className="col">
        </div>
      </div>
    </section>
    <section>
      <div className="flex-grid">
        <h4>Current research interests:</h4>
      </div>
      <div className="flex-grid">
        <ul>
          <li>Mixed reality in shared spaces</li>
          <li>Translation among systems</li>
          <li>Airplane turbulence and climate change</li>
          <li>The scope of things</li>
        and more...
        </ul>
      </div>
    </section>
    <section>
      <div className="flex-grid">
          <h4>Select projects:</h4>
      </div>
      <div className="flex-grid-thirds">
        <div className="col">
          <Card 
            header={"Transit Techies NYC"}
            body={"A bimonthly meetup around transit and code. Lightning talks, demos, and pizza."}
            cardlink={"https://transittechies.nyc/"}
          />
        </div>
        <div className="col">
          <Card 
            header={"StreetSmartAR"}
            body={"Grad thesis work. A multidisciplinary exploration into how public AR usage might affect human interaction."}
            cardlink={"http://streetsmartar.design/"}
          />
        </div>
        <div className="col">
          <Card 
            header={"Insta-tales"}
            body={"Speculative microfiction through Instagram Stories. I take a photo of the city and write a story."}
            cardlink={"https://www.instagram.com/stories/highlights/17991879742088419/"}
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
