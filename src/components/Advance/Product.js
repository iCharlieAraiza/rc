import React, {Component} from 'react'
import MyContext from './Context/MyContext'


class Product extends Component{
     
    render(){

        const products = <MyContext.Consumer>{context=>console.log(context.products)}</MyContext.Consumer> 

        console.log(products, 'Products')

        return (
            
            <React.Fragment>
                <h1>this is the product</h1>
            </React.Fragment>
            
        )
    }

}

export default Product; 