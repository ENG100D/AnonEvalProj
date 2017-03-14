import React, { Component, PropTypes } from 'react';
import { getClasses, getTeams } from 'actions';
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

  render() {

    var {classes} = this.props;

    var classItems = classes.map((classItem) => {
        return(
          <li
            key={classItem}
            onClick={() => {
              this.props.getTeams({classItem});
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
        </div>

      </div>
    );
  };
};

export default connect(null, {getClasses, getTeams})(ClassSelect);
