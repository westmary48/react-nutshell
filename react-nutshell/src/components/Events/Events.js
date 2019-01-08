import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Events.scss';

class Events extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Events">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Events</button>
      </div>
    );
  }
}

export default Events;
