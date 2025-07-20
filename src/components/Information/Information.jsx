import styles from './styles.module.css'
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
} from '../../selectors'
import { useSelector } from 'react-redux'

export const Information = () => {
	const isDraw = useSelector(isDrawSelector)
	const isGameEnded = useSelector(isGameEndedSelector)
	const currentPlayer = useSelector(currentPlayerSelector)

	const status = isDraw
		? 'Ничья'
		: !isDraw && isGameEnded
			? `Победа: ${currentPlayer}`
			: !isDraw && !isGameEnded
				? `Ходит: ${currentPlayer}`
				: 'Возникла ошибка'
	return <p className={styles.title}>{status}</p>
}
