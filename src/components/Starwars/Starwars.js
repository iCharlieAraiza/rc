import React, {Component} from 'react'

class Starwars extends Component{

    state = {
        character:{},
        loaded: false
    }

    componentDidMount(){
        fetch('https://swapi.co/api/people/1/').then((response => response.json())).then((character)=>{
                    this.setState(
                        {
                            character:character,
                            loaded:true}
                        );
            });

    }

    render(){
        const character = this.state.character;

        return (
            (this.state.loaded === false ) ? <h1>Loading</h1> : <h1>{character.name}</h1> 
        )
    }
}

export default Starwars;