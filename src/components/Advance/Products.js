import React,{Component} from 'react'
import MyContext from './Context/MyContext'
import {Link} from 'react-router-dom'

class Products extends Component{
    
    render(){
            return(
                <React.Fragment>
                    <MyContext.Consumer>
                        {
                            context=>{
                                return context.products.map(el=>{
                                    return <li key={el.id}><Link to={'product/'+el.id}>  {el.name}</Link></li>
                                })
                            }
                        }
                    </MyContext.Consumer>
                </React.Fragment>
            )
        }

}

export default Products;