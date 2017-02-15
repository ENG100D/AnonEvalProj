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

        <button className="" onClick={() => {this.context.router.push('/')}}>Instructor</button>
        <button className="" onClick={() => {this.context.router.push('/')}}>Student</button>
      </div>
    )
  };
};

export default Home;
