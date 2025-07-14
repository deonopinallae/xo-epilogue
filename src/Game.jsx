import { useState } from 'react'
import { store, storeSetState } from '../store'
import styles from './Game.module.css'
import { Field } from './components/Field/Field'
import { Information } from './components/Information/Information'

export default function Game() {
	const { currentPlayer, field, isGameEnded, isDraw } = store.getState()
	const [isStateChanged, setIsStateChanged] = useState(true)

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
			storeSetState('SET_IS_GAME_ENDED', true)
			setIsStateChanged(!isStateChanged)
		} else if (newField.every((el) => el !== '')) {
			storeSetState('SET_IS_DRAW', true)
      setIsStateChanged(!isStateChanged)
		} else {
			storeSetState('SET_CURRENT_PLAYER', currentPlayer === 'X' ? 'O' : 'X')
			setIsStateChanged(!isStateChanged)
		}
		storeSetState('SET_FIELD', newField)
    setIsStateChanged(!isStateChanged)
	}

	const startAgain = () => {
    storeSetState('START_AGAIN')
    setIsStateChanged(!isStateChanged)
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
