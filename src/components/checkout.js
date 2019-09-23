import React from "react"

// connect to store 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Cards from '../components/cards'

// action creators
import { RemoveItem } from '../redux/actions/index';

// utils
import { calcShipping, calcSubtotal, calcTax, calcTotal } from '../utils/core'

class Checkout extends React.Component {
    render() {
        // desctructure app state for children props
        const { RemoveItem, data: { cart } } = this.props

        return (
            <div>
                <h1>Cart</h1>
                <Cards RemoveItem={RemoveItem} cart={cart} />
                <div><strong>Subtotal:</strong> {calcSubtotal(cart)}$</div>
                <div><strong>Tax:</strong> {calcTax(cart)}$</div>
                <div><strong>Shipping Cost: </strong> {calcShipping(cart)}$</div>
                <div><strong>Total: {calcTotal(cart)}$</strong></div>
            </div>
        )
    }
}

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = dispatch => bindActionCreators({ RemoveItem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);