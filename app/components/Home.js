import React, { Component, PropTypes } from 'react';

class Home extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>
          Welcome to Peer Review
        </h1>

        <button className="btn" onClick={() => {this.context.router.push('instructor/login')}}>Instructor</button>
        <button className="" onClick={() => {this.context.router.push('student/login')}}>Student</button>
      </div>
    )
  };
};

export default Home;
