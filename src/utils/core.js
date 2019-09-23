// export const getPersistedData = () => {
//     // get persisted application state
//     let persistedData, persistedCart, len
//     if (window.localStorage) {
//         persistedData = JSON.parse(window.localStorage['persist:root']).data
//         persistedCart = JSON.parse(persistedData).cart
//         len = JSON.parse(persistedData).cart.length
//         if (len !== 0) {
//             return persistedCart
//         }
//     }
// }

// calculate raw totals
const formatRawCalcs = x => Number.parseFloat(x).toFixed(2)

export const calcSubtotal = (cart) => {
    const rawSubtotal = cart.reduce((acc, curr) => acc + curr.price, 0)
    return formatRawCalcs(rawSubtotal)
}
export const calcTax = (cart) => {
    const rawtax = cart.reduce((acc, curr) => acc + curr.price, 0) * .1
    return formatRawCalcs(rawtax)
}
export const calcShipping = (cart) => {
    const rawShipping = ((calcSubtotal(cart) * .02) + 50) - (5 * cart.length)
    return formatRawCalcs(rawShipping)
}
export const calcTotal = (cart) => formatRawCalcs(calcSubtotal(cart) + calcTax(cart) + calcShipping(cart))
