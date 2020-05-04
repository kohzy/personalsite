import React from "react"

import Layout from "../components/layout"
import TranslationList from "../components/Translations/translationlist"
import SEO from "../components/seo"

const TranslationsPage = () => (
  <Layout>
    <SEO title="Translations" keywords={[`translations`]} />
    <section className="intro">
      <div className="flex-grid">
        <div className="col">
          <p className="no-margin">Below are some pieces that I have translated on my own volition from Chinese to English. I've not been doing this long: there may be mistakes, or places where I've noted gaps in my knowledge. Comments and corrections are greatly welcome.</p>
        </div>
      </div>
    </section>
    <section>
      <div className="flex-grid">
        <div className="col">
          <TranslationList />
        </div>
      </div>
    </section>
  </Layout>
)

export default TranslationsPage
