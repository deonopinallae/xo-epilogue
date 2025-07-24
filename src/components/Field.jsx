import { Component } from 'react'

export class Field extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='grid grid-cols-3 field'>
				{this.props.field.map((el, index) => (
					<div key={index} className='fieldEL'>
						<button
							onClick={() => this.props.makeMove(index)}
							className={`w-full h-full ${el ? [el] : ''}`}
						></button>
					</div>
				))}
			</div>
		)
	}
}
