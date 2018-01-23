import React, { Component } from 'react';
import './GameButtons.css';

class GameButtons extends Component {



	render() {
		return (
				<div className="game-buttons">
					<ul>
						<li onClick={this.props.resetBoard}>Start nytt spill</li>
					</ul>
				</div>
			)
	}
}

export default GameButtons;