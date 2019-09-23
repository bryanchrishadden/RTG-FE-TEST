import React from "react"

// connect to store 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/product/product-list"

// action creators
import { AddItem, InitializeData, RemoveItem } from '../redux/actions/index';

class IndexPage extends React.Component {
  render() {
    // desctructure app state for children props
    const { AddItem, data: { cart, cartIsActive, products }, InitializeData } = this.props

    // if products doesnt exist, make a fake api call for the products data
    // eslint-disable-next-line
    if (!products) { InitializeData() }

    return (
      <Layout persistedCart={cart} cartIsActive={cartIsActive} cart={cart}>
        <SEO
          title="Products"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <h1>Products</h1>
        <ProductList
          AddItem={AddItem}
          products={products ? products.products : []}
          RemoveItem={RemoveItem}
          cart={cart}
        />
      </Layout>
    )
  }
}

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = dispatch => bindActionCreators({ AddItem, InitializeData, RemoveItem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
