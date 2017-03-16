import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    currTeam: store.globalReducer.currTeam,
    students: store.globalReducer.students
  }
})
class InstrDash extends Component {
  render() {

    var {students} = this.props;
    var studentItems = students.map((student) => {
      return(
        <tr key={student.student}>
          <td>{student.student}</td>
          <td>0</td>
          <td>View Review</td>
        </tr>
      )
    });

    return (
    	<div className ="container">
    		<h2>Team {this.props.currTeam} </h2>
    		<table className = "table table-hover">
    		  <thead>
    			<tr>
    			   <th> Student Lastname, Firstname</th>
    			   <th> Assigned Grade </th>
    			   <th> Reviews </th>
    			</tr>
    		  </thead>
    		  <tbody>

          {studentItems}

    		</tbody>
    		</table>
    	</div>
    );
  };
};

export default connect(null, null)(InstrDash);
