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

	};

  render() {

    const { fields: { email, password }, handleSubmit } = this.props;

    return (
      <div>
        <h1>Student Login</h1>

        <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
      </div>
    )
  };
};

export default reduxForm({
  form: 'StudForm',
  fields: ['email', 'password']})(StudLogin);
