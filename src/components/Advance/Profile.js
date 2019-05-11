import React, {Component} from 'react'
import MyContext from './Context/MyContext'

class Profile extends Component{

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
                                 <div><strong>Name: </strong> <span>{context.activeUser.name}</span></div>
                                 <div><strong>Description: </strong> <span>{context.activeUser.description}</span></div>
                            </React.Fragment>)
                    }} 
                </MyContext.Consumer>

            </React.Fragment>
        )
    }

}

export default Profile