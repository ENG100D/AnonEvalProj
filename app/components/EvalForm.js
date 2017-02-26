import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'TextField'
import RadioOption from 'RadioOption';
;

class EvalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      goalRadio: '',
      perfRadio: ''

    };
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Student Evaluation Form</h1>

        <div>
          <label>Goals are clear, understood, and have the full commitment of team members.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>There is group concern for quality performance.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>Each member’s abilities, knowledge, and experiences are fully utilized.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>Members are willing to work through differences.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>All members are involved in discussion.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>We listen to each individual’s input.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>All members are involved in decision-making.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>Members express thoughts, feelings, and ideas freely.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>An atmosphere of trust exists in our group.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>Members are comfortable in the roles they play in the group.</label>
          <br></br>
          <RadioOption />
        </div>

        <br></br>

        <div>
          <label>Describe your team’s progress. Are you on track? (100-200 words)</label>
          <br></br>
          <TextField />
        </div>

        <br></br>

        <div>
          <label>How well is your team managing the project? Are you adhering to the guidelines set forth in the team contract? (100-200 words)</label>
          <br></br>
          <TextField />
        </div>

        <br></br>

        <div>
          <label>How well is your team managing intra- and inter-personal communication? (100-200 words)</label>
          <br></br>
          <TextField />
        </div>

        <br></br>

        <div>
          <label>How can your team’s response to the design challenge be improved in the remaining time? Provide specific, concrete actions/steps. (100-200 words)</label>
          <br></br>
          <TextField />
        </div>


      </div>
    );
  }
}

// Decorate the form component
EvalForm = reduxForm({
  form: 'eval' // a unique name for this form
})(EvalForm);

export default EvalForm;
