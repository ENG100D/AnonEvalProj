import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class InstrLoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-signin" onSubmit={handleSubmit}>
        <div>
          <Field component="input" type="text" placeholder="Username" name="email" />
          <Field component="input" type="password" placeholder="Password" name="password" />
        </div>
        <div>
          <button className="myButton btn btn-primary btn-block" type="submit">Login</button>
          <button className="myButton btn btn-primary btn-block" onClick={() => {
            this.context.router.push('/')}}>Back
          </button>
        <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
        </div>
      </form>
    );
  }
}

// Decorate the form component
InstrLoginForm = reduxForm({
  form: 'InstrLoginForm' // a unique name for this form
})(InstrLoginForm);

export default InstrLoginForm;
