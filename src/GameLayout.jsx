import styles from './Game.module.css'
import { Field } from "./components/Field/Field"
import { Information } from "./components/Information/Information"


export const GameLayout = ({field, startAgain, ...gameInfo}) => {
    return (
        <>
            <Information {...gameInfo}/>
            <Field field={field} {...gameInfo}/>
            <button onClick={startAgain} className={styles.button}>Начать заново</button>
        </>
    )
}
