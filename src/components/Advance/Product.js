import React from 'react'
import MyContext from './Context/MyContext'


const Product=({match})=>{
        const products = <MyContext.Consumer>{context=>console.log(context.products)}</MyContext.Consumer> 

        console.log(products, 'Products')

        return (
            
            <React.Fragment>
                <MyContext.Consumer>
                    {
                        context=>{

                            let check = false;
                            
                            const result = context.products.map(product=>{
                                if(product.id.toString()===match.params.id){
                                    check=!check;
                                    return <h1>{product.name}</h1>
                                }
                                else{
                                    return false
                                }
                            })

                            return (check) ? result : <h2>Ups! The product doesn't exist</h2>

                        }
                    }
                </MyContext.Consumer>
                <h1>{match.params.id}</h1>
            </React.Fragment>
            
        )
}



export default Product; 