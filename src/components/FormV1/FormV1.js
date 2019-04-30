import React, {Component} from 'react'
import Wrapper from '../wrapper'
import Text from './Components/Text'
import Checkbox from './Components/Checkbox'
import Radio from './Components/Radio'


class FormV1 extends Component{
    
    state = {
        FirstName:'',
        LastName:'',
        check:false,
        gender:'',
        loading:true
    }    

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },2000)
    }

    handleInput(event){
        const{name,value} = event.target;

        this.setState({[name]:value})

        if(event.target.type === 'checkbox'){
            this.setState((prevState)=>{
                return {check:!prevState.check}
            })
        }        

        console.log(this.state, event.target.type)
    }
    
    render(){

        const state = this.state;

        const content = state.loading ? <h1>Loading...</h1> : 
        
        <Wrapper>

            <Text handle={this.handleInput.bind(this)} name='FirstName'>First Name</Text>
            <Text handle={this.handleInput.bind(this)} name='LastName'>Last Name</Text>
            <Checkbox handle={this.handleInput.bind(this)} check={this.state.check}>Is it check?</Checkbox>
            <Radio name="gender" value="male" handle={this.handleInput.bind(this)}>Male</Radio>
            <Radio name="gender" value="female" handle={this.handleInput.bind(this)}>Female</Radio>
        
            <h1>{state.FirstName} {state.LastName} {state.gender!==''? 'Gender: '+state.gender : ''}</h1>
        
        </Wrapper>

        return content;
    }

}

export default FormV1