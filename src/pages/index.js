import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import InterestScroll from "../components/interestscroll"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="intro">
      <div className="flex-grid">
        <div className="col">
          <h5>I’m interested in <a href="https://docs.google.com/document/d/18PWPhkJfq7Y-BbmgPNiEH2359H1xxxG0jB6SOq34Sx4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">many things</a>, but I’ve found that cities, systems, and human interaction have been persistent threads.</h5>
          <h5>I work at <a href="https://www.intersection.com/urban-partnerships/" target="_blank" rel="noopener noreferrer">Intersection</a>. We do digital media for urban environments; I specifically focus on our <a href="https://www.intersection.com/product/ixnconnect/" target="_blank" rel="noopener noreferrer">transit information product</a>. Previously, I’ve spent time at <a href="https://www.uber.com/business/" target="_blank" rel="noopener noreferrer">Uber</a> and at <a href="https://getlua.com/" target="_blank" rel="noopener noreferrer">Lua</a>. At various stages, I’ve done design, marketing, ops, finance. For now, I’ve settled in the space between product and design. </h5>
          <h5 className="no-margin">I’m a slow <a href="https://www.goodreads.com/review/list/71258654-kohzy?shelf=currently-reading" target="_blank" rel="noopener noreferrer">reader</a>, an even slower <a href="https://blog.kohzy.com/" target="_blank" rel="noopener noreferrer">writer</a>, and slothlike when it comes to texts or email.</h5>
        </div>
      </div>
    </section>
    <section className="sub-intro">
      <div className="flex-grid-half">
        <div className="col">
          <ul className="secondary-nav">
            <li><h4><a href="https://docs.google.com/document/d/18PWPhkJfq7Y-BbmgPNiEH2359H1xxxG0jB6SOq34Sx4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Questions</a></h4></li>
            <li><h4><a href="https://blog.kohzy.com/" target="_blank" rel="noopener noreferrer">Writing</a></h4></li>
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
          <h4>Current research interests:</h4>
          <ul>
            <li>Mixed reality in shared spaces</li>
            <li>Translation among systems</li>
            <li>Airplane turbulence and climate change</li>
            <li>The scope of things</li>
            <li><a href="https://docs.google.com/document/d/18PWPhkJfq7Y-BbmgPNiEH2359H1xxxG0jB6SOq34Sx4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">and more...</a></li>
          </ul>
        </div>
        <div className="col press">
          <h4>Features:</h4>
          <ul>
            <li>2018-19 <a href="http://transittechies.nyc" target="_blank" rel="noopener noreferrer">Transit Techies NYC</a></li>
            <li>2018 <a href="https://www.eventbrite.com/e/the-case-for-inclusivity-tickets-50542811911#" target="_blank" rel="noopener noreferrer">Panel: The Case for Inclusivity</a>, Designit</li>
            <li>2018 <a href="http://www.sva.edu/events/events-exhibitions/unicode" target="_blank" rel="noopener noreferrer">Emerging Tech Innovation Summit</a>, NJII/NJTPA</li>
            <li>2017 <a href="http://www.sva.edu/events/events-exhibitions/unicode" target="_blank" rel="noopener noreferrer">"UNICODE": Juried Exhibition</a>, SVA Galleries</li>
            <li>2017 <a href="http://area.areaware.com/virtual-flower/" target="_blank" rel="noopener noreferrer">Interview with Gahee Kang</a>, Areaware</li>
            <li>2016 <a href="https://www.fastcompany.com/3063390/this-smart-speaker-becomes-a-communication-hub-during-disasters" target="_blank" rel="noopener noreferrer">This Smart Speaker Becomes A Communication Hub During Disasters</a>, FastCo</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="flex-grid">
          <h4>Some projects:</h4>
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
        <div className="col">
          <Card 
            header={"tranquil-inlet-58238"}
            body={"Chat messages as a meditative ripple pool experience. Exhibited in SVA Galleries."}
            cardlink={"https://vimeo.com/198277993"}
          />
        </div>
        <div className="col">
          <Card 
            header={"Sift"}
            body={"Concept device to help canners identify recyclable materials. Runner Up, Core 77 Design Awards 2017."}
            cardlink={"https://designawards.core77.com/Service-Design/60916/Sift"}
          />
        </div>
        <div className="col">
          <Card 
            header={"WristGuard"}
            body={"Concept device for sanitation worker safety. Winner, IXDA Student Design Challenge 2016."}
            cardlink={"https://interactiondesign.sva.edu/blog/2016/wristguard-wins-the-2016-ixda-student-design"}
          />
        </div>
        
      </div>
    </section>
    {/*
    <section>
      <div className="flex-grid">
          <h4>Other things I'm interested in:</h4>
      </div>
      <div className="flex-grid">
          <InterestScroll id="interests" />
      </div>
    </section>
    */}
  </Layout>
)

export default IndexPage
