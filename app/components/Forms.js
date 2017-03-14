import React, { Component } from 'react';

class Forms extends Component {

  renderToForm(url) {
    var form = window.open(url, "_blank");
    form.focus();
  }
  render() {
    return (
      <div className="container">
        <h1 id = "welcome-msg">Select a Form</h1>
        <hr className = "style1"/>
              <button className="myButton"
                onClick={() => {
                  this.renderToForm('https://goo.gl/forms/5t13P75430Ho00Rh2');
                }}
              >Team Evaluation
              </button>

              <button className="myButton"
                onClick={() => {
                  this.renderToForm('https://goo.gl/forms/OCv3QmAaYDtgabGo1');
                }}
              >Peer Evaluation
              </button>
      </div>
    )
  };
};

export default Forms;
