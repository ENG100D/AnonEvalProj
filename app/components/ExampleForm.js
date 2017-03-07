import React, { Component } from  'react';
import { Field, reduxForm } from 'redux-form';
import RadioOption from 'RadioOption';


class ExampleForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <Field component={RadioOption} name="agree" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
};


// Decorate the form component
ExampleForm = reduxForm({
  form: 'eval' // a unique name for this form
})(ExampleForm);

export default ExampleForm;
