import React, { Component, PropTypes } from 'react';
import { getClasses, getTeams, setCurrClass } from 'actions';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		classes: store.globalReducer.classes
	}
})
class ClassSelect extends Component {
	 // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.getClasses();
  }

	importClass() {
		var sheetId = document.getElementById('classId').value;
		var url = 'https://script.google.com/macros/s/AKfycbzm2tyXsamWkBurx7JEVttpSQQxKwbviDbter1umXoCz25ZlhIp/exec?sheetId=' + sheetId;
		var win = window.open(url, '_blank');
  	win.focus();
	}



  render() {

    var {classes} = this.props;

    var classItems = classes.map((classItem) => {
        return(
          <li
            key={classItem}
            onClick={() => {
              this.props.getTeams({classItem});
              this.props.setCurrClass({classItem});
              this.context.router.push('/instructor/team/');
            }}
            >{classItem}</li>
        )
    });


    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">Select Class</h1>
					<div className="account-wall">
					<img className="profile-img" src = "/img/student-icon.png" alt ="" />

          <div className="span12" >
          <button className="myButton btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Class
          <span className="caret"></span></button>
          <ul className="dropdown-menu dropdown-menu-center">
            {classItems}
          </ul>

          </div>

					<div>
					<hr className = "style1"/>
						<input type="text" id="classId" />
						<button className = "myButton btn btn-primary" onClick={() => {
							this.importClass()
						}}>Import New Class</button>

					</div>
					</div>
					          </div>

						<input type="text" id="classId" placeholder="Enter Spreadsheet ID" />
						<button onClick={() => {
							this.importClass()
						}}>Import New Class</button>
					</div>

        </div>

    );
  };
};

export default connect(null, {getClasses, getTeams, setCurrClass})(ClassSelect);
