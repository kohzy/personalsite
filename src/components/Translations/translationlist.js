import React from "react"

import YAMLTranslations from "../../data/translations.yaml"
import styles from "./translationlist.module.css"

const TranslationList = () => (
    <table className={styles.table}>
        <tbody>
            <tr>
                <th width="40%">piece</th>
                <th width="40%">source</th>
                <th>translated</th>
              </tr>
            {YAMLTranslations.map((data, index) => {
                return <tr> 
                    <td key={`translation_row_${index}`}>
                        <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
                    </td>
                    <td>
                        by {data.author}, in <i>{data.publication}</i>, {data.pubdate}
                    </td>
                    <td>
                        {data.transdate}
                    </td>
                </tr>
            })}
        </tbody>
    </table>
)

export default TranslationList