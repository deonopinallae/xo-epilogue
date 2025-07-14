import { store } from '../../../store'
import styles from './Information.module.css'

export const Information = () => {
	const {isDraw, isGameEnded, currentPlayer} = store.getState()
	const status = isDraw ? 'Ничья'
	: !isDraw && isGameEnded ? `Победа: ${currentPlayer}`
	: !isDraw && !isGameEnded ? `Ходит: ${currentPlayer}`
	: 'Возникла ошибка'
	return <p className={styles.title}>{status}</p>
}
