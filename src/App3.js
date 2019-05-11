import React, {Component} from 'react'
import Navbar from './components/Advance/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {MyProvider} from './components/Advance/Context/MyContext'
import Profile from './components/Advance/Profile'
import User from './components/Advance/User'
import Product from './components/Advance/Product'
import Products from './components/Advance/Products'

const home = ()=>{
    return (
        <React.Fragment>
            <Products></Products>
        </React.Fragment>
    )
}

class App extends Component{

    render(){
        return(
            <React.Fragment>
                
                
                <Router>
                    <MyProvider>
                    <Navbar/>
                    <Switch>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/product/:id" component={Product}/>
                        {
                            //https://www.youtube.com/watch?v=XRfD8xIOroA&t=1434s
                        }
                        <Route path="/user/:username" component={User}/>
                        <Route exact path="/" render={home}/>

                        <Route render={()=><h1>404 - Ups, something was grong</h1>}/>                    
                    </Switch>
                    </MyProvider>
                </Router>

            </React.Fragment>
        )
    }

}

export default App