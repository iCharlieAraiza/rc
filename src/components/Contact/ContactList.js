import React from 'react'
import ContactItem from './Components/ContactItem'

const ContactList = ()=>{
    return(
        <div className="contact-wrapper">   
            <ContactItem 
            contact={{
                name:"Gatito Bonito",
                email:"gatito@meow.com",
                phone:'57527788',
                imgUrl: "http://placekitten.com/300/200",
            }}></ContactItem>
            
            <ContactItem 
            contact={{
                name:"Tigre Gris",
                email:"tigre@meow.com",
                phone:'7855788',
                imgUrl: "http://placekitten.com/300/300",
            }}></ContactItem>
        </div>
    )
}

export default ContactList;