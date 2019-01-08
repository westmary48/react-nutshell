import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-danger">HELP</button>
          <Button
            tag="a"
            color="info"
            size="large"
            href="http://google.com"
            target="_blank"
          >Reactstrap</Button>
        </header>
      </div>
    );
  }
}

export default App;
