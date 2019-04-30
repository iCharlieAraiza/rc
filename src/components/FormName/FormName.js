import React, {Component} from 'react'

class FormName extends Component{
    
    state = {
        firstName: '',
        lastName: ''
    }


    updateName(event){
        const {name, value} = event.target;

        this.setState(
            {[name]:value}
            );
    }

    render(){
        return(
            <form>
                
                <label>Fisrt Name</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.updateName.bind(this)}/>
            
                <label>Last Name</label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.updateName.bind(this)}/>

                <h1>{this.state.firstName + ' '+this.state.lastName }</h1>

            </form>
        )
    }

}

export default FormName;