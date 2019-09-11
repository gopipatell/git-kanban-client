import React, { Component }  from 'react';
import axios from 'axios';
import serverURL from "../ServerURL";
import './KanbanBoard.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import KanbanList from './KanbanList.js'
import { DragDropContext } from 'react-beautiful-dnd';

class KanbanBoard extends Component {
  constructor() {
    super();
    this.state= {
      repository : {name:"", tasks:[]}
    };

    this._handleTaskSave = this._handleTaskSave.bind(this);
    this._handleDragEnd = this._handleDragEnd.bind(this);
  }

  componentDidMount() {

    const {id} = this.props.match.params;

    axios.get(serverURL(`repositories/${id}`)).then((result) => {
      this.setState({repository: result.data.repository});
    });
  }

  _handleTaskSave(task) {
    const {id} = this.props.match.params;
    const payload = { task: { ...task, repository_id: id }};

    axios.post(serverURL("tasks"), payload)
      .then(result => {
        this.setState({repository: { ...this.state.repository, tasks: [ ...this.state.repository.tasks, result.data ] }})
      });
  }

  _handleDragEnd(result) {
    console.log(result);

    if(!result.destination) return;
    console.log('nexttttt');
    const {id} = this.props.match.params;

    const payload = {
      task_id: result.draggableId,
      new_index: result.destination.index,
      new_status: result.destination.droppableId
    };

    axios.post(serverURL(`repositories/${id}/update-task-index`), payload)
    .then(result =>
      axios.get(serverURL(`repositories/${id}`)).then((result) => {
        this.setState({repository: result.data.repository});
      }));

  }

  render() {
    const columns = ["Backlog", "Ready to start", "In progress", "Done"];

    return (
      <div className="container-fluid mt-2 kanban-board">
      <h4 className="text-capitalize">{this.state.repository.name.replace(/[-]/g,' ')}</h4>
      <p>{this.state.repository.description}</p>
      <Row>
      <DragDropContext onDragEnd={this._handleDragEnd}>
        { columns.map( (column, index) => {
            const status = ""+(index+1);
            return (
              <Col className="p-0" key={status}>
                <KanbanList
                  title={column}
                  tasks={this.state.repository.tasks.filter(t => t.status === status).sort((a,b)=>a.task_index-b.task_index)}
                  handleTaskSave={ task => this._handleTaskSave({...task, status: status}) }
                  status={status}/>
              </Col>
            )
        })}
      </DragDropContext>
      </Row>
      </div>
    )
  }
}

export default KanbanBoard;
