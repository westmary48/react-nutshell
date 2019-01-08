import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Articles.scss';

class Articles extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Articles">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Articles</button>
      </div>
    );
  }
}

export default Articles;
