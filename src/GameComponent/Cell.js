import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

	constructor(props) {
		super(props);
		this.state = {
			statusClass: this.props.statusClass
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState = {
		    statusClass: nextProps.statusClass
		  };	  
	}

	

	checkInput(e) {
		const value = e.target.value.toLowerCase();
		const letter = this.props.letter.toLowerCase();
		let status = '';
		
		if(value === '') {
			status = 'unintialized';
		} else if(value.startsWith(letter)) {
			status = 'valid';
		} else status = 'not-valid';

		this.setState({
			statusClass: status
		});

	}

	render() {
		return (
				<td className="user-generated-content">
						<div className="flex-container">
							<input data-letter={this.props.letter} key={this.props.letter} type="text" className={this.state.statusClass} onChange={this.checkInput.bind(this)} /> 
							<span className="score"></span>
						</div>
					</td>
			)
	}
}

export default Cell;