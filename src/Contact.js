import React from 'react'
import { Table, Button } from 'semantic-ui-react'

export default class Contact extends React.Component {
    render(){
        return (
            <Table.Row>
            <Table.Cell>
              {this.props.name}
            </Table.Cell>
            <Table.Cell>
              {this.props.phone}
            </Table.Cell>
            <Table.Cell>
                <Button onClick={()=>this.props.deleteContact(this.props.id)} color='red'>Delete: {this.props.id}</Button>
            </Table.Cell>
          </Table.Row>
        )
    }
}