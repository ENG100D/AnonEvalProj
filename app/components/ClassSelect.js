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
      <div>
        <div className="divCenter">
          <div>
            <center>
              <h1>Class Select</h1>
            </center>
          </div>

          <div className="dropdown dropdown-center" >
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Class
          <span className="caret"></span></button>
          <ul className="dropdown-menu dropdown-menu-center">
            {classItems}
          </ul>

          </div>

					<div>
						<input type="text" id="classId" placeholder="Enter Spreadsheet ID" />
						<button onClick={() => {
							this.importClass()
						}}>Import New Class</button>
					</div>

        </div>

      </div>
    );
  };
};

export default connect(null, {getClasses, getTeams, setCurrClass})(ClassSelect);
