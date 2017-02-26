import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class StudLogin extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
		// Super the parent constructor
		super(props);

    this.state = {
      studentId: ''
    }

	};

  render() {

    return (
      <div>
        <h1>Student Login</h1>

        <div>
          <input type="text" value={this.state.studentId} onChange={this.setState} placeholder="Student ID"></input>
        </div>

        <div>
          <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
          <button className="" onClick={() => {this.context.router.push('/student/evaluation')}}>Login</button>
        </div>

      </div>
    )
  };
};

export default StudLogin;
