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

    this.state = {
      studentId: ''
    };

  };

  updateStudentId(id) {
    this.setState({
      studentId: id.target.value
    });
    console.log(id.target.value);
  };

  render() {
   return (

        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className="text-center login-title">Student Login</h1>
                    <div className="account-wall">
                        <img className="profile-img" src="/img/student-icon.png"
                            alt="" />
                        <form className="form-signin">
                        <input type="text" className="form-control" placeholder="Student ID" value={
                                    this.state.studentId} onChange={this.updateStudentId.bind(this)} placeholder="Student ID">
                                    
                        </input>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/student/evaluation')}}>LogIn
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Back
                          </button>
                        <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )
  };
};

export default StudLogin;
