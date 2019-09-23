import * as actionTypes from './actionsTypes'
import products from '../../lib/data/products.json'

export const InitializeData = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.INIT_DATA,
      products
    })
  }
}

export const AddItem = item => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_ITEM,
      item
    })
  }
}

export const RemoveItem = item => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      item
    })
  }
}
