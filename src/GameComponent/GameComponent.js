import React, { Component } from 'react';
import GameButtons from './GameButtons.js';

class GameComponent extends Component {
	render() {
		return (
				<div className="game-board">
					<GameButtons />
					{/*<GameBoard />*/}
				</div>
				
			)
	}
}

export default GameComponent;