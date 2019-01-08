import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Messages.scss';

class Messages extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Messages">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Messages</button>
      </div>
    );
  }
}

export default Messages;
