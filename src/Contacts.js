import React from 'react'
import {Table,Button} from 'semantic-ui-react'
import Contact from './Contact'

class Contacts extends React.Component {
    render(){
        return (
            <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name </Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
                {this.props.contacts.map( c => <Contact deleteContact={this.props.deleteContact} key={c.id} {...c} />)}
            </Table.Body>
        
            
          </Table>
        )
    }
}
export default Contacts