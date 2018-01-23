import React, { Component } from 'react';
import GameButtons from './GameButtons.js';
import GameBoard from './GameBoard.js';

class GameComponent extends Component {

	constructor() {
		super();
	}


	pickRows(rows, numOfRows) {
		if(numOfRows > rows.length || numOfRows <= 0) {
			throw new Error(`You must pick a positive number between 0 and ${rows.length}`);
		} 

		let pickedRows = [];
		for(let i = 0; i < numOfRows; i++) {
			const random = this.generateRandomNumber(0, rows.length);
			pickedRows[i] = rows[random]
			rows.splice(random, 1);
		}
		return pickedRows;
	}

	generateRandomNumber(from = 1, to = 10) {
		return Math.floor(Math.random() * to) + from;
	}

	render() {
		return (
				<div className="game-board">
					<GameButtons />
					<GameBoard pickRows={this.pickRows.bind(this)} />
				</div>
				
			)
	}
}

export default GameComponent;