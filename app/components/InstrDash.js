import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

@connect((store) => {
  return {
    currClass: store.globalReducer.currClass,
    currTeam: store.globalReducer.currTeam,
    students: store.globalReducer.students
  }
})
class InstrDash extends Component {

  getAvgGrade(classNum, teamNum, student) {
    var pid = student.pid;
    var res;
    var param = {
      classNum: classNum,
      teamNum: teamNum,
      pid: pid
    }

    const request = axios.post('/cumulativeAverage/', qs.stringify(param));

    request.then((response)=>{
      console.log(response.data);
      res = response.data
    });

    return 1;
  };

  render() {
    var {students, currTeam, currClass} = this.props;
    var studentItems = students.map((student) => {
      return(
        <tr key={student.student}>
          <td>{student.student}</td>
          <td>{this.getAvgGrade(currClass, currTeam, student)}</td>
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
