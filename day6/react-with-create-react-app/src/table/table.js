import React from 'react'

export const Table = (props) => {
    return (
        <table border="1px solid black">
            <th>ID</th>
            <th>productMasterCategory</th>
            <th>productSubCategory</th>
            <th>productName</th>
            <th>price</th>
            <th>discount</th>
            <th>Price after Discount</th>
            {props.productList.map(productData => {
                return (
                    <tr>
                        <td>{productData.productId}</td>
                        <td>{productData.productMasterCategory}</td>
                        <td>{productData.productSubCategory}</td>
                        <td>{productData.productName}</td>
                        <td>{productData.price}</td>
                        <td>{productData.discount}</td>
                        <td>{productData.price - ((productData.price * productData.discount) / 100)}</td>
                    </tr>
                )
            })}

        </table>
    )
}
export default Table;
