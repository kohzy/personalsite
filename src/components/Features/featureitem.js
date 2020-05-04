import React from "react"
import PropTypes from "prop-types"

const FeatureItem = ({year,title,link,location}) => (
    <li>
    {year} <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>, {location}
    </li>
)

FeatureItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default FeatureItem