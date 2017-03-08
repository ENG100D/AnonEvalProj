import React, { Component } from 'react';
import { Field } from 'redux-form';

class RadioOption extends Component {

  render() {
    return (
      <div>
        <label>
          <Field name="agree" component="input" type="radio" value="val1" /> Val1
        </label>
        <label>
          <Field name="agree" component="input" type="radio" value="val2" /> Val2
        </label>
      </div>
    );
  };

};

export default RadioOption;
