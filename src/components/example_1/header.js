import React from 'react';

const Header = (props)=>{
const title = (props.title!=="") ? props.title : 'Default Header';
const styles = {
    color: 'red',
    backgroundColor: '#fff606',
    fontSize: '34px'
}

 return(
     <header>
         <h1 className="title-site">{ title }</h1>
         <h2 style={styles}>Hola como estáis</h2>
     </header>
 )

}

export default Header;