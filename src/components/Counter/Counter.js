import React, {Component} from 'react'
import Wrapper from './../wrapper'

class Counter extends Component{
    
    state = {
        number:0
    }

    increase(){
        this.setState((prevState)=>{
            return {number: prevState.number + 1}
        })
    }

    reduce(){
        this.setState((prevState)=>{
            return {number: prevState.number - 1}
        })
    }

    set(){
        let cont1=0, 
            cont2 = 0;
        while(true){
            setTimeout(()=>{
                this.increase();
                cont1++
                console.log(cont1)
            },1000)
            cont2++
            console.log(cont2)
        }

    }

    render(){

        const reduce = (this.state.number<=0) ? <button disabled> Reduce </button> : <button onClick={this.reduce.bind(this)}> Reduce </button>;


        return(
            <Wrapper>
                <h1>{this.state.number}</h1>
                <div>
                    <button onClick={this.set.bind(this)}> Increase </button>
                    {reduce}
                </div>
            </Wrapper>
        )        
    }

}

export default Counter;