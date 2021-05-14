import React from 'react'

export const ProductCard = (props) => {
    return (
        <div style={{border:'black 1px solid',width:"250px",}}>
            <div>Product : {props.productData.productName} </div>
            <div>Price : {props.productData.price}</div>
            <div>Discount: {`${props.productData.discount} %`}</div>
            <div>Price After Discount: {props.productData.price - ((props.productData.price*props.productData.discount)/100)}</div>
        </div>
    )
}
