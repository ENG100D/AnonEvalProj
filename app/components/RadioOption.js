import React, { Component } from 'react';

class RadioOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ''
    };
  };

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange.bind(this)} />
                  Strongly Disagree
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange.bind(this)}/>
                  Disagree
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange.bind(this)}/>
                  Agree
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option4" checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange.bind(this)}/>
                  Strongly Agree
                </label>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  };

};

export default RadioOption;
