import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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

class App extends Component{
    render(){
        return ( <Wrapper>
                    <Router>
                        
                        <ul>
                            <li><Link to='/meme'>Meme</Link></li>
                            <li><Link to='/todo'>Todo</Link></li>
                            <li><Link to='/hooks'>Hooks</Link></li>                            
                        </ul>

                        <Route path='/meme' component={Meme}/>
                        <Route path='/todo' component={Todo}/>
                        <Route path='/hooks' component={Hooks}/>

                    </Router>

                </Wrapper>)
    }
}

export default App;