import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid'

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: "3rem 0 1.5rem",
          }}
    >
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h3 style={{ margin: 0 }}>
              <Link
                to="/"
              >
                {siteTitle}
              </Link>
            </h3>
          </Col>
        </Row>
      </Grid>
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
