import React, {Component} from 'react';
import axios from 'axios';
import serverURL from "../ServerURL";



const SERVER_URL = serverURL('users/21');

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user : {repositories:[]}
    };

    const fetchUsers = () => {
      axios.get(SERVER_URL).then((result) => {
        this.setState({user: result.data.user});
      });
    };
    fetchUsers();

  };
  render() {
    return (
      <div>
        <h1> Dashboard </h1>

        {this.state.user.repositories.map(user => {
          return (
            <p>{user.name}</p>
          )
        })}

      </div>)
  }
}


export default Dashboard;
