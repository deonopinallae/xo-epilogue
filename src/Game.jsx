import { useState } from "react"
import PropTypes from 'prop-types'
import { GameLayout } from "./GameLayout"


export default function Game(){
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

  const startAgain = () => {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(['', '', '', '', '', '', '', '', ''])
  }

  return <GameLayout 
          field={field}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          startAgain={startAgain}
         />
}
GameLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.boolean,
  isDraw: PropTypes.boolean,
  field: PropTypes.array
}
