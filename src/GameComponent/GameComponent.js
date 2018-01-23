import React, { Component } from 'react';
import GameButtons from './GameButtons.js';
import GameBoard from './GameBoard.js';
import Cell from './Cell.js';
import data from '../data/data.js';

class GameComponent extends Component {

	constructor() {
		super();
		this.state = {
			rows: this.pickRows(data.topics, 4), 
			columns: this.pickRows(data.letters, 5),
			statusClass: 'unintialized'
		};

	}

	createTableRows(rows) {
		return rows.map((row, i) => <th className="keys" key={i}>{row}</th>);
	}

	fillData(nums, letter) {
		console.log("Filling data");
		let elements = [];
		for(let i = 0; i < nums; i++) {
			elements.push(
					<Cell letter={letter} key={i} statusClass={this.state.statusClass} />
				)
		}
		return elements;
	}

	createTableColumns(columns) {
		return columns.map((col, i) => {
			return <tr key={i}>
					<td className="keys" key={i}>{col.toUpperCase()}</td>
					{ this.fillData(columns.length, col) }
				</tr>
		})
	}


	pickRows(rows, numOfRows) {
		if(numOfRows > rows.length || numOfRows <= 0) {
			throw new Error(`You must pick a positive number between 0 and ${rows.length}`);
		} 
		const gameRows = [...rows];
		let pickedRows = [];
		for(let i = 0; i < numOfRows; i++) {
			const random = this.generateRandomNumber(0, gameRows.length);
			pickedRows[i] = gameRows[random]
			gameRows.splice(random, 1);
		}
		return pickedRows;
	}

	generateRandomNumber(from = 1, to = 10) {
		return Math.floor(Math.random() * to) + from;
	}

	resetBoard() {
		this.setState({
			rows: this.pickRows(data.topics, 4), 
			columns: this.pickRows(data.letters, 5),
			statusClass: 'unintialized'
		});

		this.createTableColumns(this.state.columns);
		this.createTableRows(this.state.rows);
	}

	render() {
		return (
				<div className="game-board">
					<GameButtons resetBoard={this.resetBoard.bind(this)} />
					<GameBoard pickRows={this.pickRows.bind(this)} createTableRows={this.createTableRows.bind(this)} createTableColumns={this.createTableColumns.bind(this)} rows={this.state.rows} columns={this.state.columns} />
				</div>
				
			)
	}
}

export default GameComponent;