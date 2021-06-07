import React from "react";
import { Form, } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = { name: "", phone: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to add a contact to state
    // Where should this function be defined???
    this.props.addContact({
        name: this.state.name,
        phone: this.state.phone,
        id: Math.random()
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 
// 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Phone" 
            placeholder="Phone" 
            name="phone" 
            value={this.state.phone} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default ContactForm;