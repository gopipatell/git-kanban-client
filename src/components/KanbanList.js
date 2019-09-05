import React, { Component }  from 'react';
import './KanbanBoard.css'
import { Card, Button } from 'react-bootstrap';


class KanbanList extends Component {

constructor(props) {
  super(props);
}

  render() {
    return (
      <div className="list">
        <span>{this.props.title}</span>

        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <br/>
        <Button variant="secondary" size="sm"> Add </Button>
      </div>
    )
  }
}

export default KanbanList;
