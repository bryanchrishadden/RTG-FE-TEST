import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// connect to store 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Header extends React.Component {
  render() {
    // desctructure app state for children props
    const { data: { cart } } = this.props

    const CartNavComponent = () => {
      return (
        <Link
          to="/cart"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1rem`,
            float: `right`,
            position: `absolute`,
            top: `1.5rem`,
            right: `1.0875rem`,
            fontWeight: `700`,
            cursor: `pointer`
          }}
        >
          CART ({cart ? cart.length : ''})
        </Link>
      )
    }

    return <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0, position: `relative` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {this.props.siteTitle}
          </Link>
          <CartNavComponent />
        </h1>
      </div>
    </header>
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);

