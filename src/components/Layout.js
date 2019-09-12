import React, { Component }  from 'react';
import KanbanBoard from './KanbanBoard';
import './Layout.css'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

class Layout extends Component {
  render () {
    return (
      <React.Fragment>

        <header>
          <Navbar className="navebar" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Git Kanban</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Kanban Board</Nav.Link>
              <Nav.Link href="#pricing">coming soon</Nav.Link>
            </Nav>
        </Navbar>
      </header>

      <main className="main-content">
        This is main content
        <KanbanBoard />
      </main>

      <footer className="text-muted">
        Copyright &copy; Git Kanban
      </footer>
    </React.Fragment>
    );
  }
}

  export default Layout;
