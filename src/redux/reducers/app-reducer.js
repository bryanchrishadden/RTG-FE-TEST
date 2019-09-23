import * as actionTypes from '../actions/actionsTypes';

export const defaultState = {
    cart: []
};

export default function appReducer(state = defaultState, action) {
    const { item, products } = action

    switch (action.type) {
        case actionTypes.INIT_DATA:
            return { ...state, products: products }
        case actionTypes.ADD_ITEM:
            // return { ...state, cart: [] }
            return { ...state, cart: [...state.cart, item] }
        case actionTypes.REMOVE_ITEM:
            let newState = [...state];
            const newCart = newState[0].cart.filter(i => i.sku !== item)
            return { ...state, cart: newCart }
        default:
            return { ...state }
    }
};

