// create cards markup
import React from "react"

const Cards = (props) => {
    const removeItem = (e, sku) => props.RemoveItem(sku)

    return props.cart.map((i) => {
        const { image, price, sku, title } = i
        return (
            <div
                className={`card`}
                key={sku}
                style={{
                    padding: `1em 2em`,
                    borderRadius: `3px`,
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr`,
                }}
            >
                <div>
                    <img src={image} alt={title} style={{ margin: `2em 1em` }} />
                </div>
                <div>
                    <div style={{ fontSize: `.75em` }}>
                        <span style={{ fontSize: `1.5em` }}>Name:</span> {title}
                    </div>
                    <div>
                        Price: {price}$
                    </div>
                    <div>
                        SKU: {sku}
                    </div>
                    <button
                        style={{
                            backgroundColor: `black`,
                            color: `white`,
                            padding: `.5em 2em`,
                            borderRadius: `3px`,
                            cursor: `pointer`
                        }}
                        onClick={e => removeItem(e, sku)}
                    >Remove Item</button>
                </div>
            </div>
        )
    })
}

export default Cards
