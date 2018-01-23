import React, { Component } from 'react';
import data from '../data/data.js';
import Cell from './Cell.js';
import './GameBoard.css';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: this.props.pickRows(data.topics, 4), 
			columns: this.props.pickRows(data.letters, 5)
		};
	}

	createTableRows(rows) {
		return rows.map((row, i) => <th className="keys" key={i}>{row}</th>);
	}

	fillData(nums, letter) {
		let elements = [];
		for(let i = 0; i < nums; i++) {
			elements.push(
					<Cell letter={letter} key={i} />
				)
		}
		return elements;
	}

	createTableColumns(columns) {
		return columns.map((col, i) => {
			return <tr key={i}>
					<td className="keys" key={i}>{col.toUpperCase()}</td>
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