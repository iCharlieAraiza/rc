import React, {Component} from 'react'
import MyContext from './Context/MyContext'

class User extends Component{
    render(){
        const name = <MyContext.Consumer>{context=>context}</MyContext.Consumer>

        console.log('Takataka',name);

        return <h1>This is the user page</h1>
    }
}

export default User;