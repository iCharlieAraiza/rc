import React, {Component} from 'react';
import Wrapper from '../../wrapper';

class Card extends Component{

    render(){
        return(
            <Wrapper>
                <p>Nombre: <strong>{this.props.name}</strong></p>
                <p>Edad: <strong>{this.props.age}</strong></p>
            </Wrapper>
        )
    }

}

export default Card;