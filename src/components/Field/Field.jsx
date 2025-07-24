import { Component } from 'react'
import styles from './styles.module.css'

export class Field extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={styles.field}>
				{this.props.field.map((el, index) => (
					<div key={index} className={styles.fieldEL}>
						<button
							onClick={() => this.props.makeMove(index)}
							className={`${styles.fieldButton} ${el ? styles[el] : ''}`}
						></button>
					</div>
				))}
			</div>
		)
	}
}
