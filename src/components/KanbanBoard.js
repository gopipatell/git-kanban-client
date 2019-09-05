import React, { Component }  from 'react';
import './KanbanBoard.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import KanbanList from './KanbanList.js'

class KanbanBoard extends Component {
  render() {
    return (
      <div>

        <div className="container-fluid">
        <Row>
          <Col className="p-0">
            <KanbanList title="First"/>
          </Col>
          <Col className="p-0">
            <KanbanList title="Second" />
          </Col>
          <Col className="p-0">
            <KanbanList title="Third"/>
          </Col>
          <Col className="p-0">
            <KanbanList title="Fourth"/>
          </Col>

        </Row>
        </div>

      </div>
    )
  }
}

export default KanbanBoard;
