import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCurrTeam, getTeamData } from 'actions';

@connect((store) => {
	return {
		teams: store.globalReducer.teams,
    currClass: store.globalReducer.currClass
	}
})
class TeamSelect extends Component {
   // Allow page rendering with actions
  static contextTypes = {
    router: PropTypes.object
  };

	updatePeerReviews() {
		var sheetId = document.getElementById('peer').value;
		var url = 'https://script.google.com/macros/s/AKfycbyoijcM0rHfRUMOUP7Nt_HnRFrWGYoKA5xLeSa_O1xLaVFDVfE/exec?sheetId=' + sheetId;
		var win = window.open(url, '_blank');
  	win.focus();
	}

	updateTeamReviews() {
		var sheetId = document.getElementById('team').value;
		var url = 'https://script.google.com/macros/s/AKfycbxz7K-IBjkAis40f0hQzSNvxfgLDodw5mRN0yVFUdoUg36Xzms/exec?sheetId=' + sheetId;
		var win = window.open(url, '_blank');
  	win.focus();
	}

  render() {

    var {teams, currClass} = this.props;

    var teamItems = teams.map((teamItem) => {
        return(
          <li
            key={teamItem}
            onClick={() => {
              this.props.setCurrTeam({teamItem});
              this.props.getTeamData(currClass, {teamItem});
              this.context.router.push('/instructor/dashboard/');
            }}
            >Team {teamItem}</li>
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

				{/* <div>
					<input type="text" id="peer" />
					<button onClick={() => {
						this.updatePeerReviews()
					}}>Update Peer Reviews</button>
				</div>
				<div>
					<input type="text" id="team" />
					<button onClick={() => {
						this.updateTeamReviews()
					}}>Update Team Reviews</button>
				</div> */}
      </div>

    );
  };
};

export default connect(null,{setCurrTeam, getTeamData})(TeamSelect);
