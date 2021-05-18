import React from 'react';


const DiscountPrice = (props) => {
    const { productData } = props;
    return (
        <div>
            Price After Discount: {productData.price - ((productData.price * productData.discount) / 100)}
        </div>)
}

const ActionHandler = (props) => {
    const { saveData } = props;
    return (<button onClick={saveData}>Save</button>)
}

export const ProductCard = (props) => {
    const { productData, saveData } = props;
    return (
        <div style={{ border: 'black 1px solid', width: "250px", }}>
            <div>Product : {productData.productName} </div>
            <div>Price : {productData.price}</div>
            <div>Discount: {`${productData.discount} %`}</div>
            {<DiscountPrice productData={productData} >
                {props.children}
            </DiscountPrice>}
            <ActionHandler saveData={saveData} />
        </div>
    )
}
