import React, { Component } from 'react';
import './GameButtons.css';

class GameButtons extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
				<div className="game-buttons">
					<ul>
						<li onClick={this.props.resetBoard}>Start nytt spill</li>
					</ul>
					<p>Blacklist the letters you do not want to use. Separate each letter with a comma. Default {this.props.blacklist}</p>
					<input type="text" placeholder="blacklist letters. Separate the letters you do not want with a comma" defaultValue={this.props.blacklist} onChange={this.props.editBlacklist} />
				</div>
			)
	}
}

export default GameButtons;