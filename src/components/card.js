import React from "react"
import PropTypes from "prop-types"

import styles from "./card.module.css"

const Card = ({cardlink,header,body}) => (
  <a href={cardlink} target="_blank" rel="noopener noreferrer" className={styles.cardlink}>
	  <div className={styles.cardbody}>
	    <h6>{header}</h6>
	    <p>{body}</p>
	  </div>
	</a>
)

Card.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cardlink: PropTypes.string.isRequired
}

export default Card