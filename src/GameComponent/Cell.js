import React, { Component } from 'react';

class Cell extends Component {
	render() {
		return (
				<td className="user-generated-content" key={this.props.key}>
						<div className="flex-container">
							<input data-letter={this.props.letter} type="text"/> 
							<span className="score"></span>
						</div>
					</td>
			)
	}
}

export default Cell;