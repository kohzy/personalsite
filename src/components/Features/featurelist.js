import React from "react"
import FeatureItem from "./featureitem"

import YAMLFeatures from "../../data/features.yaml"
import styles from "./featurelist.module.css"

const FeatureList = () => (
    <ul className={styles.featurelist}>
        {YAMLFeatures.map((data, index) => {
            return <FeatureItem 
                        key={`feature_${index}`}
                        year={data.year}
                        title={data.title}
                        link={data.link}
                        location={data.location}
                    />
        })}
    </ul>
)

export default FeatureList