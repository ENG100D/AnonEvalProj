import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		teams: store.globalReducer.teams
	}
})
class TeamSelect extends Component {
   // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

  render() {

    var {teams} = this.props;

    var teamItems = teams.map((teamItem) => {
        return(
          <li
            key={teamItem}
            onClick={() => {
              this.context.router.push('/instructor/dashboard/');
            }}
            >{teamItem}</li>
        )
    });

    return (

      <div className="divCenter">
        <div>
          <center>
            <h1>Team Select</h1>
          </center>
        </div>

        <div className="dropdown dropdown-center" >
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Team
        <span className="caret"></span></button>
        <ul className="dropdown-menu dropdown-menu-center">
          {teamItems}

        </ul>
        </div>
      </div>

    );
  };
};

export default connect(null,null)(TeamSelect);
