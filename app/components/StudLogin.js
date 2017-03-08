import React, { Component, PropTypes } from 'react';
import { Control, Form, actions } from 'react-redux-form';

class StudLogin extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
		// Super the parent constructor
		super(props);

    /*this.state = {
      studentId: ''
    };*/

	};

  handleSubmit(user) {
    const { dispatch } = this.props;
    console.log(user);

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

  /*updateStudentId(id) {
    this.setState({
      studentId: id.target.value
    });
    console.log(id.target.value);
  };*/

  render() {

    return (
      <div>
        <h1>Student Login</h1>

        <div>
          <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
            <label>PID:</label>
            <Control.text model="user.pid" />

            <button type="submit">
              Login!
            </button>
          </Form>
        </div>

        <div>
          <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
          <button className="" onClick={() => {this.context.router.push('/student/teammate')}}>Login</button>
        </div>

      </div>
    )
  };
};

export default StudLogin;
