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
    	
      <div style={divCenter} >
        <div>
          <center>
            <h1>Peer Select</h1>
          </center>
        </div>
      
     
      <div className="dropdown dropdown-center" >
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Peer
      <span className="caret"></span></button>
      <ul className="dropdown-menu dropdown-menu-center">
      
        <li><a href="">XYZ</a></li>
        <li><a href="">ABC</a></li>
        <li><a href="">LMAO</a></li>
        
      </ul>
		  </div>
     </div>
    
    );
  };
};

export default ClassSelect;
