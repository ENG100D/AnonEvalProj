import React, { Component, PropTypes } from 'react';

class ResponseReview extends Component {

  // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 className="text-center login-title">Student Review 1</h1>
                    <div className="account-wall">
                        <img className="profile-img" src="/img/notebook.png"
                            alt="" />
                        <form className="form-signin">
                        <output className="output"> -> Good Boy <br/> -> Helpful <br/> 
                                                    -> HardWorking <br/> -> Punctual <br/>
                                                    -> Active <br/> -> Communicates Properly <br/></output>
                          <button className="myButton btn btn-primary btn-block" onClick={() => {
                            this.context.router.push('student/ResponseDash')}}>Back
                          </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  };
};

export default ResponseReview;
