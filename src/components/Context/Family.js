import React, {Component} from 'react'
import Person from './Person'
import {PersonProvider} from './Context'

class Family extends Component{
    
    render(){
        return(
            <React.Fragment>
                <PersonProvider>

                    <h1>This is the Family Component</h1>
                    <Person></Person>

                </PersonProvider>
            </React.Fragment>
        )
    }

}

export default Family;