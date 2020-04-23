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
                <th width="40%">source</th>
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
              <tr>
                <td><a href="https://docs.google.com/document/d/1wkPINr3DO9ryLeN8KT-JAWCY0EbP7yqPxZ5NktRWgt8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">An Onrushing Wave</a></td>
                <td>by He Caitou, in his book <i>You aren't important, but your likes are</i>, 2018</td>
                <td>Sep 1, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1fELH-0fXzvye52lpcaV0ZntFamZ49ushNViT3QMmZSc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">How have we become so susceptible to spam and fake news?</a></td>
                <td>by He Caitou, in his book <i>You aren't important, but your likes are</i>, 2018</td>
                <td>Sep 9, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1YPYk0RZ9pigMtUP90W5iDkFgB0_l4hsyeeXKZtKPkCo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Crafting Character Through Landscape</a></td>
                <td>by Wang Shu, in his book <i>To Build a House</i>, 2018</td>
                <td>Nov 18, 2019</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1XkoPcjAaNN2XbsVDDbgK-VrjPsv3m3YUdxGOy-QXzfA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">"Our Mister": A Recollection</a></td>
                <td>by Yang Jiang, 1980</td>
                <td>Apr 19, 2020</td>
              </tr>
              <tr>
                <td><a href="https://docs.google.com/document/d/1FMfLkh8d78McxdLhr-D4fyQGGaP7ASrUsqZmvxj30PE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Preface to <i>Random Thoughts</i></a></td>
                <td>by Ba Jin, in his book <i>Random Thoughts</i>, 1987</td>
                <td>ongoing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
)

export default TranslationsPage
