import React, { Component, PropTypes } from 'react';

class Home extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className = "container-fluid jumbotron">
      <div className="row">
        <div className ="col-md-8">
        <h1>
          Welcome to Peer Review
        </h1>

        <div className = "container">
    				  <button className="myButton" onClick={() => {this.context.router.push('instructor/login')}}>Instructor</button>
    				  <button className="myButton" onClick={() => {this.context.router.push('student/login')}}>Student</button>
        </div>
      </div>
      </div>
      </div>

    )
  };
};

export default Home;
