import React, {Component} from 'react'
import Wrapper from '../wrapper';
import Header from './Component/Header'
import MemeGenerator from './Component/MemeGenerator'

class Meme extends Component{

    state = {
        TopText:'KK qlo pedo pis',
        BottomText:' pedo pis',
        loading:true 
    }

    handeInput(event){
        const {name,value} = event.target;
        this.setState({[name]:value});
    }    
    
    render(){

        return(
            <Wrapper>
                <Header title="Meme Generator"></Header>
                <MemeGenerator {...this.state} handle={this.handeInput.bind(this)}></MemeGenerator>
            </Wrapper>
        )
    
    }

}

export default Meme;