import React, { Component } from 'react';

class InstrDash extends Component {
  render() {
    return (
	<div className ="container">
		<h2> Team Name </h2>
		<table className = "table table-hover">
		  <thead>
			<tr>
			   <th> Student Lastname, Firstname</th>
			   <th> Assigned Grade </th>
			   <th> Reviews </th>
			</tr>
		  </thead>
		  <tbody>
		  	<tr>
			   <td> Lastname,Firstname1</td>
			   <td> 90 </td>
			   <td> View Review </td>
			</tr>

			
		  	<tr>
			   <td> Lastname,Firstname2</td>
			   <td> 70 </td>
			   <td> View Review </td>
			</tr>

			
		  	<tr>
			   <td> Lastname,Firstname3</td>
			   <td> 85 </td>
			   <td> View Review </td>
			</tr>

			
		  	<tr>
			   <td> Lastname,Firstname4</td>
			   <td> 88 </td>
			   <td> View Review </td>
			</tr>
		</tbody>
		</table>			 
	</div>	    
    );
  };
};

export default InstrDash;
