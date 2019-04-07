import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex-grid"
      style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: "3rem 0 1.5rem",
          }}
    >
      <div className="col">
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
