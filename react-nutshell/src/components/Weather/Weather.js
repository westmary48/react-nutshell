import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Weather.scss';

class Weather extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Weather">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Weather</button>
      </div>
    );
  }
}

export default Weather;
