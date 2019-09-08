import React, { Component }  from 'react';
import './KanbanBoard.css'
import { Card, Button } from 'react-bootstrap';
import AddTaskModal from './AddTaskModal';

class KanbanList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addTaskModalVisible: false
    }

    this._handleModalClose =  this._handleModalClose.bind(this);
    this._handleShowModal = this._handleShowModal.bind(this);
  }

  _handleModalClose = function() {
    this.setState({ addTaskModalVisible: false});
  }

  _handleShowModal = function() {
    this.setState({ addTaskModalVisible: true });
  }

  render() {
    return (
      <div className="list">
        <div className="text-center">{this.props.title}</div>

        {this.props.tasks.map(task => {
          return(
              <Card className="mt-1 shadow-sm" key={task.id} draggable>
                <Card.Body>
                  <Card.Text className="mb-0 text-capitalize">{task.title}</Card.Text>
                  <Card.Text className="small">
                    {task.description}
                  </Card.Text>
                  <Card.Link className="small text-secondary" href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
          )
        })}

        <br/>
        <Button variant="light text-muted" size="sm" block onClick={this._handleShowModal}>+ Add new task</Button>
        <AddTaskModal show={this.state.addTaskModalVisible}   handleClose={this._handleModalClose} handleTaskSave={ this.props.handleTaskSave}/>
      </div>
    )
  }
}

export default KanbanList;
