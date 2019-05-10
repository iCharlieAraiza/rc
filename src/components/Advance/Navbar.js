import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
        )
    }

}

export default Navbar;