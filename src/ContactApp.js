import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Contacts from './Contacts'
import ContactForm from './ContactForm'

class ContactApp extends React.Component {
    state = { 
        contacts: [
          { id: 1, name: "Jerry", phone: "801-121-5656", },
          { id: 2, name: "George", phone: "626-567-1872", },
          { id: 3, name: "Cosmo", phone: "802-134-9876", },
        ],
    }
    addContact = (contact) => {
        let newContacts = [...this.state.contacts, contact]
        this.setState({
            contacts: newContacts
        })
    }
    deleteContact =(id)=>{
        let newContacts = this.state.contacts.filter( c => c.id !== id)
        this.setState({
            contacts: newContacts
        })
    }
    render(){
        return (
            <Container>
                <Header as='h1'>contact list</Header>
                <ContactForm addContact={this.addContact}/>
                <Contacts deleteContact={this.deleteContact} contacts={this.state.contacts}/>
            </Container>
        )
    }
}
export default ContactApp