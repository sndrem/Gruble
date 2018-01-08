import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
	constructor() {
		super();
		this.state = {rows: ['Matrett', 'Kjendis', 'Hovedstad', "Klesmerke"], columns: ['A', 'D', 'E', 'P']}
	}

	createTableRows(rows) {
		return rows.map((row, i) => <th key={i}>{row}</th>);
	}

	fillData(nums) {
		let elements = [];
		for(let i = 0; i < nums; i++) {
			elements.push(<td key={i}></td>)
		}
		return elements;
	}

	createTableColumns(columns) {

		return columns.map((col, i) => {
			return <tr key={i}>
					<td key={i}>{col}</td>
					{this.fillData(this.state.columns.length)}
				</tr>
		})
	}

	render() {
		return (
				<div className="table">
					<table>
						<thead>
							<tr>
							<th></th>
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