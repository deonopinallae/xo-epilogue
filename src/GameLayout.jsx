import styles from './Game.module.css'
import PropTypes from 'prop-types'
import { Field } from "./components/Field/Field"
import { Information } from "./components/Information/Information"


export const GameLayout = ({field, startAgain, makeMove, ...gameInfo}) => {
    return (
        <>
            <Information {...gameInfo}/>
            <Field field={field} makeMove={makeMove}/>
            <button onClick={startAgain} className={styles.button}>Начать заново</button>
        </>
    )
}
GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.boolean,
    isDraw: PropTypes.boolean,
    field: PropTypes.array,
    startAgain: PropTypes.func,
    makeMove: PropTypes.func
  }
  