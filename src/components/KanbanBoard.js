import React, { Component }  from 'react';
import axios from 'axios';
import serverURL from "../ServerURL";
import './KanbanBoard.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import KanbanList from './KanbanList.js'

class KanbanBoard extends Component {
  constructor() {
    super();
    this.state= {
      repository : {name:"", tasks:[]}
    };

    this._handleTaskSave = this._handleTaskSave.bind(this);
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
        this.setState({repository: { tasks: [ ...this.state.repository.tasks, result.data ] }})
      });
  }

  render() {
    const columns = ["Backlog", "Ready to start", "In progress", "Done", "Completed"];

    return (
      <div className="container-fluid mt-2">
      <h4 className="text-capitalize">{this.state.repository.name.replace(/[-]/g,' ')}</h4>

      <Row>
        { columns.map( (column, index) => {
            const status = ""+(index+1);
            return (
              <Col className="p-0" key={status}>
                <KanbanList title={column} tasks={this.state.repository.tasks.filter(t => t.status === status)} handleTaskSave={ task => this._handleTaskSave({...task, status: status}) } />
              </Col>
            )
        })}

      </Row>
      </div>
    )
  }
}

export default KanbanBoard;