import { useState, useEffect } from 'react';
import { ProductCard } from './product-card';
import axios from 'axios'

export const ProductDisplayGrid = () => {
    const [productList, setProductList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(true);

    useEffect(() => {
        axios.get('product-data.json').then(res => {
            setProductList(res.data)
        })
    }, [])

    const create = () => {
        console.log('Created')

    }

    const update = () => {
        console.log('Updated')
    }


    return (
        <>
            <button>Add Product</button>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                {productList.map(listItems => {
                    return <ProductCard productData={listItems} saveData={isUpdate ? update : create} />
                })}
            </div>
        </>
    )
}
