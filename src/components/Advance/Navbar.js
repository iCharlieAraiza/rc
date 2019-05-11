import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li>ABout</li>
                </ul>
            </nav>
        )
    }

}

export default Navbar;