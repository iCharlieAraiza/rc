import React, {Component} from 'react'
import Navbar from './components/Advance/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {MyProvider} from './components/Advance/Context/MyContext'
import About from './components/Advance/About'
import User from './components/Advance/User'
import Product from './components/Advance/Product'

class App extends Component{

    render(){
        return(
            <React.Fragment>
                
                
                <Router>
                    <MyProvider>
                    <Navbar/>
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Route path="/product" component={Product}/>
                        {
                            //https://www.youtube.com/watch?v=XRfD8xIOroA&t=1434s
                        }
                        <Route path="/user/:username" component={User}/>
                        <Route exact path="/" render={()=><h1>Products List</h1>}/>

                        <Route render={()=><h1>404 - Ups, something was grong</h1>}/>                    
                    </Switch>
                    </MyProvider>
                </Router>

            </React.Fragment>
        )
    }

}

export default App