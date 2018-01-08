import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
	constructor() {
		super();
		this.state = {rows: ['Matrett', 'Kjendis', 'Hovedstad', "Klesmerke"], columns: ['A', 'D', 'E', 'P']}
	}

	createTableRows(rows) {
		return rows.map((row, i) => <th className="keys" key={i}>{row}</th>);
	}

	keyPressed(e) {
		const letter = e.target.dataset.letter;
		const value = e.target.value.toLowerCase();

		if(letter !== value && value !== '') {
			e.target.classList.add("error");
		} else {
			e.target.classList.remove("error");
		}
		
	}

	fillData(nums, letter) {
		let elements = [];
		for(let i = 0; i < nums; i++) {
			elements.push(
					<td className="user-generated-content" key={i}>
						<div className="flex-container">
							<input data-letter={letter.toLowerCase()} onKeyUp={this.keyPressed} type="text"/> 
							<span className="score"></span>
						</div>
					</td>
				)
		}
		return elements;
	}

	createTableColumns(columns) {
		return columns.map((col, i) => {
			return <tr key={i}>
					<td className="keys" key={i}>{col}</td>
					{this.fillData(this.state.columns.length, col)}
				</tr>
		})
	}

	render() {
		return (
				<div className="table">
					<table>
						<thead>
							<tr>
							<th className="hidden"></th>
								{ this.createTableRows(this.state.rows)  }
							</tr>
						</thead>
						<tbody>
								{ this.createTableColumns(this.state.columns)}
						</tbody>
					</table>
				</div>
				
			)
	}
}

export default GameBoard;