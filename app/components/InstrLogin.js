import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { instrLogin } from 'actions';

import InstrLoginForm from 'InstrLoginForm';

class InstrLogin extends React.Component {
  constructor(props) {
		// Super the parent constructor
		super(props);
	};

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(values) {
    // Do something with the form values

    this.props.instrLogin(values)
      .then((response) => {
      if(response.payload.data == true) {
        this.context.router.push('instructor/class/');
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Instructor Login</h1>
            <div className="account-wall">
              <img className="profile-img" src="/img/teacher-icon.png" alt="" />
              <InstrLoginForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
          </div>
        </div>
      </div>

    );
  };
};

export default connect(null, {instrLogin})(InstrLogin);
