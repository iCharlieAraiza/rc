import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Wrapper from './components/wrapper';

import Todo from './components/todo2/Todo'

// import State from './components/State/State'

// //import Counter from './components/Counter/Counter'

// import Todo from './components/todo3/Todo';

import Hooks from './components/Hooks/Hooks'

// import Starwars from './components/Starwars/Starwars'

// import FormName from './components/FormName/FormName'
 
//import FormV1 from './components/FormV1/FormV1'

import Meme from './components/Meme/Meme'

import Family from './components/Context/Family'


const Home  = ()=>{
    
    return(
        <React.Fragment>
            <ul>              
                <li><Link to='/meme'>Meme</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
                <li><Link to='/hooks'>Hooks</Link></li>       
                <li><Link to='/family'>Family</Link></li>                        
            </ul>
        </React.Fragment>
    )

}


const Username= ({match})=>{
    return<h1>{match.params.username}</h1>
}


class App extends Component{
    render(){
        return ( <React.Fragment>

                    <Router>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/meme' component={Meme}/>
                            <Route path='/todo' component={Todo}/>
                            <Route path='/hooks' component={Hooks}/>
                            <Route path='/family' component={Family}/>
                            <Route path='/user/:username' component={Username}/>
                            <Route render={()=><h2>Error 404</h2>}/>
                        </Switch>
                    </Router>



                </React.Fragment>)
    }
}

export default App;