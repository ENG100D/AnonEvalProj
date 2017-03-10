import React, { Component, PropTypes } from 'react';

class ResponseDash extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className="text-center login-title">Team Reviews</h1>
                    <div className="account-wall">
                        <img className="profile-img" src="/img/notebook.png"
                            alt="" />
                        <form className="form-signin">
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 1
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 2
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 3
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 4
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 5
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 6
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 7
                          </button>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('/')}}>Review 8
                          </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  };
};

export default ResponseDash;
