import React, {Component} from 'react'
import MyContext from './Context/MyContext'

class About extends Component{

    state={user:'tutut'};

    componentDidMount(){

    }

    color="";

    render(){
        console.log(this.color)
        

        return(



            <React.Fragment>

                <h1>About</h1>
                <MyContext.Consumer>
                    { context=>{
                        return(<React.Fragment>
                            <strong>Nombre: </strong> <span>{context.activeUser.name}</span>
                        </React.Fragment>)
                    }} 
                </MyContext.Consumer>

            </React.Fragment>
        )
    }

}

export default About