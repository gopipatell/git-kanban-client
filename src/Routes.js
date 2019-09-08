import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './components/Layout.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';

const Routes = (
  <Router>
      <>
        <Header/>
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
      </>
  </Router>
)

export default Routes;
