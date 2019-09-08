import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import LoginButton from './LoginButton';
import axios from 'axios';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }

    this._handleLogout = this._handleLogout.bind(this)
  }

  componentDidMount() {
    const jwt = localStorage.getItem("jwt");

    const parseJwt = function(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log('json', JSON.parse(jsonPayload));

        return JSON.parse(jsonPayload);
    };

    if(!jwt) return;

    const decodeJwt = parseJwt(jwt);

    if(decodeJwt.exp <= Date.now()/1000) return;

    this.setState({
      user: { ...decodeJwt }
    })

    console.log("setting default jwt bearer", `Bearer ${jwt}`);
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  }

  _handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = null;
    window.location.href = "/";
  }

  render() {
    return(
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Git Kanban</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#/dashboard">Home</Nav.Link>
              <Nav.Link href="#/repositories/7">Kanban Board</Nav.Link>
              <Nav.Link href="#pricing">coming soon</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                  {this.state.user.name ?
                    <Nav>
                      <Navbar.Text className="mr-2">
                        <img src={this.state.user.image} width="30" height="30" className="rounded-circle mr-2"/>
                        {this.state.user.name}
                      </Navbar.Text>
                      <Nav.Link href="#" onClick={ this._handleLogout }>Logout</Nav.Link>
                      </Nav>
                      :
                      <Nav>
                      <Navbar.Text className="mr-2">
                        <LoginButton />
                      </Navbar.Text>
                      </Nav>

                  }
            </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }

}

export default Header;
