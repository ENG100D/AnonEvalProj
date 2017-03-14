import React, { Component, PropTypes } from 'react';

class Home extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
        <div className="container">

          <div><img className="center-block ucsd-img" src="/img/UCSD.png" /></div>
          <h1 id = "welcome-msg">Welcome to Peer Review.</h1>
          <p> "need a tag line here team" </p>
          <hr className = "style1"/>
      				  <button className="myButton" onClick={() => {
                  this.context.router.push('instructor/login')}}>Instructor
                </button>
      				  <button className="myButton" onClick={() => {
                  this.context.router.push('student/login')}}>Student
                </button>
        </div>
    )
  };
};

export default Home;
