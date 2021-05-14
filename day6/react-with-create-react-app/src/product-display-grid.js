import { useState, useEffect } from 'react';
import { ProductCard } from './product-card';
import axios from 'axios'

export const ProductDisplayGrid = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('product-data.json').then(res => {
            setProductList(res.data)
        })
    }, [])

    return (
        <div style={{display:"flex",justifyContent:"flex-start"}}>
            {productList.map(listItems => {
                return <ProductCard productData={listItems} />
            })}
        </div>
    )
}
