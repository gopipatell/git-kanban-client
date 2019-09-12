import React, { Component }  from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


class AddTaskModal extends Component {

  constructor(props) {
    super(props);
    this.state = { task: {} };
    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(field, event) {
    this.setState({
      task: { ...this.state.task, [field]: event.target.value }
    });
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"centered>
          <Modal.Header closeButton>
            <Modal.Title>New task</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title</Form.Label>
              <Form.Control as="input" placeholder="title.." onChange={ e => this._handleInput('title', e) }/>
           </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="5" placeholder="description.." onChange={ e => this._handleInput('description', e) }/>
           </Form.Group>
          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" size="sm" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="dark" size="sm" onClick={() => { this.props.handleClose(); this.props.handleTaskSave(this.state.task);} }>
              Add New Task
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default AddTaskModal;
