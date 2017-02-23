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

  onSubmit(props) {
    // handle submittion code in here
    console.log(props);
  };

  render() {

    const { fields: { email, password }, handleSubmit } = this.props;

    return (
      <div>
        <h1>Student Login</h1>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-signin">

          <input type="text" className="form-control" placeholder="email" required autoFocus {...email} />
        	<input type="password" className="form-control" placeholder="password" required {...password} />

        	<button className="btn btn-lg btn-color btn-block" type="submit">
          	Submit
          </button>

        </form>

        <button className="" onClick={() => {this.context.router.push('/')}}>Back</button>
      </div>
    );
  };
};

export default reduxForm({
  form: 'StudentForm',
  fields: ['email', 'password']
})(StudLogin);
