import React from 'react';
import Item from './Componets/Item'
import Data from './Data'

const Products = ()=>{
    
    const ProductList = Data.map((product)=>{
        return <Item id={product.id} name={product.name}></Item>
    });
    
    

    return(
        ProductList
    )
}

export default Products;