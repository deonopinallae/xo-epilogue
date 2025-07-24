import styles from './styles.module.css'
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
} from '../../selectors'
import {Component} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	isDraw: isDrawSelector(state),
	isGameEnded: isGameEndedSelector(state),
	currentPlayer: currentPlayerSelector(state),
})

class InformationContainer extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props
		const status = isDraw
		? 'Ничья'
		: !isDraw && isGameEnded
			? `Победа: ${currentPlayer}`
			: !isDraw && !isGameEnded
				? `Ходит: ${currentPlayer}`
				: 'Возникла ошибка'
		return <p className={styles.title}>{status}</p>
	}
}

export const Information = connect(mapStateToProps)(InformationContainer)
