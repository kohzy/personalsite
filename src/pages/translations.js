import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
          <table className="translations-table">
            <tbody>
              <tr>
                <th width="40%">piece</th>
                <th>source</th>
                <th>translated</th>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1_PZ0Q6Iv5BxlfNSycYNCWbmpGLLv4xeOhq_0hpbXGaY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Jack Ma On "996"</a></td>
                <td>by Jack Ma, Alibaba Blog, Apr 12, 2019</td>
                <td>May 5, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1s5J2Xkv-YFEOX9yfJKwSrwA8dy0xq22JBS1LOUYoPT4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Jack Ma Revisits "996"</a></td>
                <td>by Jack Ma, Alibaba Blog, Apr 14, 2019</td>
                <td>May 6, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1O0g5qYGih4bvSmwUBlpofofMwvFxrzGqaYoFWkM3_xc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">The Town of Child Models</a></td>
                <td>by Dai Minjie, GQ Report, Mar 31, 2019</td>
                <td>May 11, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1bw283NzGqbF7GV9R2Xb56Ab78iUhMK5QDI7NVReYirI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">One</a></td>
                <td>by Jia Xingjia, in his book <i>LiaoCao</i>, 2018</td>
                <td>Jun 27, 2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
)

export default TranslationsPage
