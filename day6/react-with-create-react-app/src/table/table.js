import React from 'react';

const RenderTdSymbols=(element)=>{
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    );

}



export const RenderTableRow = (props) => {
    return (
        <tr>
            <td>{props.productData.productId}</td>
            <td>{props.productData.productMasterCategory}</td>
            <td>{props.productData.productSubCategory}</td>
            <td>{props.productData.productName}</td>
            <td>{props.productData.price}</td>
            <td>{props.productData.discount}</td>
            <td>{props.productData.price - ((props.productData.price * props.productData.discount) / 100)}</td>
        </tr>
    )
}

export const Table = (props) => {


    const setDs=new Set([1,2,3,4]);
    
    const newArra=[];


    Array.from(setDs).forEach(ele=>{
        newArra.push(<li>{ele}</li>)
    })


    






    return (
        <>
        <table border="1px solid black">
            <th>ID</th>
            <th>productMasterCategory</th>
            <th>productSubCategory</th>
            <th>productName</th>
            <th>price</th>
            <th>discount</th>
            <th>Price after Discount</th>
            {props.productList.map(productData => {
                return RenderTdSymbols(<RenderTableRow productData={productData} key={Date.now()}/>)
            })}

        </table>
        </>
    )
}
export default Table;
