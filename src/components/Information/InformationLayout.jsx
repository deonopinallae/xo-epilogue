import styles from './Information.module.css'

export const InformationLayout = ({currentPlayer, isGameEnded, isDraw}) => {
    return <p className={styles.title}>
            {
                isDraw ? 'Ничья'
                : !isDraw && isGameEnded ? `Победа: ${currentPlayer}`
                : !isDraw && !isGameEnded ? `Ходит: ${currentPlayer}`
                : 'Возникла ошибка'
            }
        </p>
}
