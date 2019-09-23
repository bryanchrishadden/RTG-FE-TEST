import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// styles
import "../../assets/css/components/product/product-list.css"

const ProductList = (props) => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              products {
                sku
                title
                price
                image
              }
            }
          }
        }
      }
    `
  )

  const handleAddingItem = (e) => {
    // const currentState = store.getState()
    const skuToFind = e.target.parentElement.parentElement.id;
    const { AddItem, products } = props
    const itemToAdd = products.find(i => i.sku === skuToFind)
    AddItem(itemToAdd)
  }

  const Product = product => {
    // const toggleProductItem = product.sku === ''
    let toggleProductItem
    if (props.cart) {
      toggleProductItem = props.cart.find(i => i.sku === product.sku) !== undefined ? 'hide' : ''
    }
    // console.log(toggleProductItem)
    return (
      <div className={`product cell small-12 grid-x grid-margin-x ${toggleProductItem}`} id={product.sku}>
        <div className="product-image cell small-2"><img src={product.image} alt={product.title} /></div>
        <div className="product-title cell small-4">{product.title}</div>
        <div className="product-sku cell small-2">{product.sku}</div>
        <div className="product-price cell small-2">${product.price}</div>
        <div className={`product-add-to-cart cell small-2 `}>
          <button id="add-to-cart" onClick={e => handleAddingItem(e)}> Add to Cart</button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-list grid-x grid-margin-y">
      {allDataJson.edges[0].node.products.map(product => (
        <Product {...product} key={product.sku} />
      ))}
    </div>
  )
}
export default ProductList
