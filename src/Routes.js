import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './components/Layout.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import KanbanBoard from './components/KanbanBoard';
const Routes = (
  <Router>
      <div>

      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Git Kanban</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/dashboard">Home</Nav.Link>
            <Nav.Link href="#/repositories/7">Kanban Board</Nav.Link>
            <Nav.Link href="#pricing">coming soon</Nav.Link>
          </Nav>
      </Navbar>
    </header>

    <main className="main-content">

        <Switch>
          <Route exact path="/" component= { Home }/>
          <Route exact path="/dashboard" component= { Dashboard }/>
          <Route path="/repositories/:id" component={ KanbanBoard } />
        </Switch>

    </main>


    <footer className="text-muted">
      Copyright &copy; Git Kanban
    </footer>


      </div>
  </Router>
)

export default Routes;
