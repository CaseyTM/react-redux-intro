import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={index}>{student.name} - {student.seat}</li>)
		});
		
		return(
			<div>
			{studentArray}
			</div>
			)
	}

}

function mapStateToProps(state){
  return{
    // from our master reducer, we have a state object, inside our state object we have a property: students
    // we need to set up the state of that object to the props of this componentDidMount() {
      students: state.students,
      students2: state.students2
    
  }
};


export default connect(mapStateToProps)(ReduxStyle);