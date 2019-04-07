import React from "react"
import { Link } from "gatsby"
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="intro">
      <Grid fluid>
        <Row>
          <Col sm >
            <h5>I’m interested in many things, but I’ve found that cities, systems, and human interaction have been persistent threads.</h5>
            <h5>I work at <a href="https://www.intersection.com/urban-partnerships/" target="_blank">Intersection</a>. We do digital media for urban environments; I specifically focus on our <a href="https://www.intersection.com/product/ixnconnect/" target="_blank">transit information product</a>. Previously, I’ve spent time at <a href="https://www.uber.com/business/" target="_blank">Uber</a> and at <a href="https://getlua.com/" target="_blank">Lua</a>. At various stages, I’ve done design, marketing, ops, finance. For now, I’ve settled in the space between product and design. </h5>
            <h5 class="no-margin">I’m a slow <a href="https://www.goodreads.com/review/list/71258654-kohzy?shelf=currently-reading" target="_blank">reader</a>, an even slower <a href="https://blog.kohzy.com/" target="_blank">writer</a>, and slothlike when it comes to texts or email.</h5>
          </Col>
        </Row>
      </Grid>
    </section>
    <section class="sub-intro">
      <Grid fluid>        
        <Row>
          {/*
          <Col sm >
            <ul class="secondary-nav">
              <li><h4>Projects</h4></li>
              <li><h4>Research Interests</h4></li>
              <li><h4>Writing</h4></li>
              <li><h4>Resume</h4></li>
            </ul>
          </Col>
          */}
          <Col sm >
            <table class="social-table">
              <tr>
                <td class="thirty"><h4 class="no-margin">Instagram</h4></td>
                <td><a href="https://www.instagram.com/koh_zy/" target="_blank">@koh_zy</a></td>
              </tr>
              <tr>
                <td class="thirty"><h4 class="no-margin">Twitter</h4></td>
                <td><a href="https://twitter.com/kohzy" target="_blank">@kohzy</a></td>
              </tr>
              <tr>
                <td class="thirty"><h4 class="no-margin">are.na</h4></td>
                <td><a href="https://www.are.na/kohzy-koh-1515294007" target="_blank">Kohzy</a></td>
              </tr>
              <tr>
                <td class="thirty"><h4 class="no-margin">Github</h4></td>
                <td><a href="https://github.com/kohzy" target="_blank">kohzy</a></td>
              </tr>
            </table>
          </Col>
          <Col sm >
          </Col>
        </Row>
      </Grid>
    </section>
    <section>
      <Grid fluid>
        <h4>Current research interests:</h4>
        <ul>
          <li>Mixed reality in shared spaces</li>
          <li>Translation among systems</li>
          <li>Airplane turbulence and climate change</li>
          <li>The scope of things</li>
        and more...
        </ul>
      </Grid>
    </section>
    <section>
      <Grid fluid>
        <Row>
          <h4>Select projects:</h4>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card 
              header={"Transit Techies NYC"}
              body={"A bimonthly meetup around transit and code. Lightning talks, demos, and pizza."}
              cardlink={"https://transittechies.nyc/"}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card 
              header={"StreetSmartAR"}
              body={"Grad thesis work. A multidisciplinary exploration into how public AR usage might affect human interaction."}
              cardlink={"http://streetsmartar.design/"}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card 
              header={"Insta-tales"}
              body={"Speculative microfiction through Instagram Stories. I take a photo of the city and write a story."}
              cardlink={"https://www.instagram.com/stories/highlights/17991879742088419/"}
            />
          </Col>
        </Row>
      </Grid>
    </section>
  </Layout>
)

export default IndexPage
