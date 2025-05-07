import {FieldLayout} from './FieldLayout'

export const Field = ({field, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw}) => {
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // варианты побед по диагонали
	]

	const makeMove = (elIndex) => {

		// сделать ход
		if(field[elIndex] === '') field[elIndex] = currentPlayer

		// проверить итог
		const checkWin = WIN_PATTERNS.some(patt => {
			return patt.every((pattEl) => field[pattEl] === currentPlayer)
		})

		checkWin ? setIsGameEnded(true) :
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')

		!checkWin && !field.some(el => el === '') ? setIsDraw(true) : null
	}
	return <FieldLayout field={field} makeMove={makeMove} isGameEnded={isGameEnded}/>
}
