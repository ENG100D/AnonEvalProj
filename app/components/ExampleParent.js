import React, { Component } from 'react';
import ExampleForm from 'ExampleForm';

class ExampleParent extends Component {

  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
      <ExampleForm onSubmit={this.handleSubmit} />
    );
  };
};

export default ExampleParent;
