import React, { Component } from 'react';

import './GameBoard.css';

class GameBoard extends Component {

	render() {
		return (
				<div className="table">
					<table>
						<thead>
							<tr>
							<th className="hidden"></th>
								{ this.props.createTableRows(this.props.rows)  }
							</tr>
						</thead>
						<tbody>
								{ this.props.createTableColumns(this.props.columns) }
						</tbody>
					</table>
				</div>
				
			)
	}
}

export default GameBoard;