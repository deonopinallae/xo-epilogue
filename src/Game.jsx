import styles from './Game.module.css'
import { Field } from './components/Field/Field'
import { Information } from './components/Information/Information'
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
	fieldSelector,
} from './selectors'
import {
	setCurrentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
	setStartAgain,
} from './actions'
import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	isDraw: isDrawSelector(state),
	isGameEnded: isGameEndedSelector(state),
	currentPlayer: currentPlayerSelector(state),
	field: fieldSelector(state),
})

const mapDispatchToProps = {
	setCurrentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
	setStartAgain,
}

class GameContainer extends Component {
	constructor(props) {
		super(props)
		// this.makeMove = this.makeMove.bind(this)
		// this.startAgain = this.startAgain.bind(this)
	}

	render() {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // варианты побед по диагонали
		]

		const makeMove = (elIndex) => {
			// сделать ход
			const newField = [...this.props.field]
			if (newField[elIndex] !== '' || this.props.isGameEnded || this.props.isDraw)
				return
			newField[elIndex] = this.props.currentPlayer

			// проверить итог
			const checkWin = WIN_PATTERNS.some((patt) => {
				return patt.every(
					(pattEl) => newField[pattEl] === this.props.currentPlayer,
				)
			})

			if (checkWin) {
				this.props.setIsGameEnded(true)
			} else if (newField.every((el) => el !== '')) {
				this.props.setIsDraw(true)
			} else {
				this.props.setCurrentPlayer(this.props.currentPlayer === 'X' ? 'O' : 'X')
			}
			this.props.setField(newField)
		}

		const startAgain = () => {
			this.props.setStartAgain()
		}
		return (
			<>
				<Information />
				<Field field={this.props.field} makeMove={makeMove} />
				<button onClick={startAgain} className={styles.button}>
					Начать заново
				</button>
			</>
		)
	}
}

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer)
