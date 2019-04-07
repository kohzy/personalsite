import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Card = ({cardlink,header,body}) => (
  <a href={cardlink} target="_blank" rel="noopener noreferrer" class="card-link">
	  <div class="card-body">
	    <h6>{header}</h6>
	    <p class="no-margin">{body}</p>
	  </div>
	</a>
)

Card.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cardlink: PropTypes.string.isRequired
}

export default Card