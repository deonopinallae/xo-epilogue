import { useState } from "react"
import { GameLayout } from "./GameLayout"


export default function Game(){
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

  const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // варианты побед по диагонали
	]

	const makeMove = (elIndex) => { 
		// сделать ход
    const newField = [...field]
		if(newField[elIndex] !== '' || isGameEnded || isDraw) return 
    newField[elIndex] = currentPlayer

		// проверить итог
		const checkWin = WIN_PATTERNS.some(patt => {
			return patt.every(pattEl => newField[pattEl] === currentPlayer)
		})

		checkWin 
    ? setIsGameEnded(true)
    : newField.every(el => el !== '')
      ? setIsDraw(true)
      : setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')

    setField(newField)
	}

  const startAgain = () => {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(['', '', '', '', '', '', '', '', ''])
  }

  return <GameLayout 
          field={field}
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
          makeMove={makeMove}
          startAgain={startAgain}
         />
}
