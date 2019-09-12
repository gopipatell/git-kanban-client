import React, { Component }  from 'react';
import './KanbanBoard.css'
import { Card, Button } from 'react-bootstrap';
import AddTaskModal from './AddTaskModal';
import { Draggable, Droppable } from 'react-beautiful-dnd';

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
        <Droppable droppableId={this.props.status+""}>
        { provided => (
          <div className="droppableList"
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {this.props.tasks.map(task => {
              return(
                <Draggable draggableId={task.id+""} index={task.task_index} key={task.id}>
                {providedDrag => (
                  <Card className="mt-1 p-0 shadow-sm text-dark kanban-card"
                    key={task.id}
                    ref={providedDrag.innerRef}
                    {...providedDrag.dragHandleProps}
                    {...providedDrag.draggableProps}>
                    <Card.Body>
                      <Card.Text className="mb-0 text-capitalize" style={{color: 'black'}}>{task.title}</Card.Text>
                      <Card.Text className="small">
                        {task.description}
                      </Card.Text>
                      <Card.Link className="small kanban-card-link text-secondary" href="#" onClick={e => this.props.handleDelete(task.id, e)}>Delete</Card.Link>
                    </Card.Body>
                  </Card>
                )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <br/>
        <Button className="addbutton"
          variant="light text-muted"
          size="sm" block
          onClick={this._handleShowModal}>
          + Add new task
        </Button>
        <AddTaskModal
          show={this.state.addTaskModalVisible}
          handleClose={this._handleModalClose}
          handleTaskSave={ this.props.handleTaskSave} />
      </div>
    )
  }
}

export default KanbanList;
