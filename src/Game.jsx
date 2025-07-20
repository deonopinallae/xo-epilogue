import styles from './Game.module.css'
import { Field } from './components/Field/Field'
import { Information } from './components/Information/Information'
import { useDispatch } from 'react-redux'
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
import { useSelector } from 'react-redux'

export const Game = () => {
	const isDraw = useSelector(isDrawSelector)
	const isGameEnded = useSelector(isGameEndedSelector)
	const currentPlayer = useSelector(currentPlayerSelector)
	const field = useSelector(fieldSelector)
	const dispatch = useDispatch()

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
		const newField = [...field]
		if (newField[elIndex] !== '' || isGameEnded || isDraw) return
		newField[elIndex] = currentPlayer

		// проверить итог
		const checkWin = WIN_PATTERNS.some((patt) => {
			return patt.every((pattEl) => newField[pattEl] === currentPlayer)
		})

		if (checkWin) {
			dispatch(setIsGameEnded(true))
		} else if (newField.every((el) => el !== '')) {
			dispatch(setIsDraw(true))
		} else {
			dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'))
		}
		dispatch(setField(newField))
	}

	const startAgain = () => {
		dispatch(setStartAgain())
	}

	return (
		<>
			<Information />
			<Field {...{ field, makeMove }} />
			<button onClick={startAgain} className={styles.button}>
				Начать заново
			</button>
		</>
	)
}
