import React from "react"
import Card from "./card"

import YAMLProjects from "../../data/projects.yaml"

const CardGrid = () => (
    <div className="flex-grid-thirds">
        {YAMLProjects.map((data, index) => {
            return <div className="col"> 
                        <Card 
                            key={`project_card_${index}`}
                            header={data.title}
                            body={data.description}
                            cardlink={data.link}
                        />
                    </div>
        })}
    </div>
)

export default CardGrid