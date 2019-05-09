import React from 'react'
import MyContext from './Context'

const Person=()=>{

    return (
            <MyContext.Consumer>
                {context=><h2>This is person component{context.name}</h2>}
            </MyContext.Consumer>
    )

}


export default Person;