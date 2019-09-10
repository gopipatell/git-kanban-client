import React, {Component} from 'react';
import axios from 'axios';
import serverURL from "../ServerURL";
import {Link} from 'react-router-dom';


const SERVER_URL = serverURL('repositories');

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      repositories: []
    };
  };

  componentDidMount() {
    axios.get(SERVER_URL).then((result) => {
      this.setState({repositories: result.data});
    });
  }

  render() {
    return (
      <div>
        <h1> Dashboard </h1>

        {this.state.repositories.map(repo => {
          return (
            <div key={repo.id}>
            <Link to={`/repositories/${repo.id}`}>
              {repo.name}
            </Link>
            <br/>
            </div>
          )
        })}

      </div>)
  }
}


export default Dashboard;
