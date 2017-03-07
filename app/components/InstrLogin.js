import React, { Component, PropTypes } from 'react';

class InstrLogin extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className="text-center login-title">Instructor Login</h1>
                    <div className="account-wall">
                        <img className="profile-img" src="/img/teacher-icon.png"
                            alt="" />
                        <form className="form-signin">
                        <input type="text" className="form-control" placeholder="Username" />
                        <input type="password" className="form-control" placeholder="Password" />
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('instructor/login')}}>Sign In
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Cancel
                          </button>
                        <label className="checkbox pull-left">
                            <input type="checkbox" value="remember-me">
                            Remember me
                            </input>
                        </label>
                        <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  };
};

export default InstrLogin;
