import React, { Component } from 'react';
import EvalForm from 'EvalForm';

class EvalPage extends Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <EvalForm onSubmit={this.handleSubmit} />
    );
  };
};

export default EvalPage;
