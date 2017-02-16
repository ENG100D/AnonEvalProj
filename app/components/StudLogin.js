import React, { Component, PropTypes } from 'react';

class StudLogin extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Student Login</h1>

        <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
      </div>
    );
  };
};

export default StudLogin;
