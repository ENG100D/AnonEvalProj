import React, { Component, PropTypes } from 'react';

class InstrLogin extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Instructor Login</h1>
        <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
      </div>
    );
  };
};

export default InstrLogin;
