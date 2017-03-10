import React, { Component, PropTypes } from 'react';

const divCenter={width: "400px",
    height: "200px",
    position: "relative",
    position:"absolute",
    top:"0",
    bottom:"0",
    left: "0",
    right: "0",
    margin:"auto"
    };


class ClassSelect extends Component {
	 // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
    	 
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="pull-right">
            <button className="myButton" onClick={() => {
                  this.context.router.push('student/ResponseDash')}}>Reviews</button>
            </div>
          </div>
        </div>  
        
        <div style={divCenter}>
          <div>
            <center>
              <h1>Peer Select</h1>
            </center>
          </div>
      
    
        <div className="dropdown dropdown-center" >
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Peer
        <span className="caret"></span></button>
        <ul className="dropdown-menu dropdown-menu-center">
      
        <li><a >XYZ</a></li>
        <li><a >ABC</a></li>
        <li><a >LMAO</a></li>
        
        </ul>
		  </div>
     </div>
    </div>
    
    );
  };
};

export default ClassSelect;
