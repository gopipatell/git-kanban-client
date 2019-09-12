import React, {Component} from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { CardImg, CardDeck,CardSubtitle, CardBody,Container } from 'reactstrap';
import './Dashboard.css';
import serverURL from "../ServerURL";
import {Link} from 'react-router-dom';
import theme from '../ThemeUtil'

const SERVER_URL = serverURL('repositories');

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      repositories: []
    };
  };

  componentDidMount() {
    theme.resetTheme();

    axios.get(SERVER_URL).then((result) => {
      this.setState({repositories: result.data});
    });
  }

  render() {
    return (
      <Container>
      <div>
        <h3 className="mt-3 mb-4">Repositories</h3>
        <Row className="justify-content-md-center ">
          {this.state.repositories.map(repo => {
            return (

            <Col lg="3" key={repo.id}>
            <div key={repo.id} >
            <div className="dashboard text-center p-3 shadow rounded">
                <Link to={`/repositories/${repo.id}`}>
                  <h5 className="text-capitalize"> {repo.name.replace(/[-]/g,' ')}</h5>

                </Link><br/>
                <p>{repo.description}</p>
                <Link to={`/repositories/${repo.id}`} className="btn btn-light btn-sm repository-button ">Kanban Board</Link>
                </div>
                <br/>
            </div>
            </Col>
            )
          })}
        </Row>
      </div>
      </Container>
    )
  }
}

export default Dashboard;
