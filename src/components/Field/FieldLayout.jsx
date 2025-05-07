import styles from './Field.module.css'

export const FieldLayout = ({ field, isGameEnded, makeMove }) => {
	return (
		<div className={styles.field}>
			{field.map((el, index) => (
				<div key={setTimeout(() => Date.now(), 10)} className={styles.fieldEL}>
					<button
						disabled={isGameEnded || el !== ''}
						id={index}
						onClick={() => makeMove(index)}
						className={`${styles.fieldButton} ${el ? styles[el] : ''}`}
					>
					</button>
				</div>
			))}
		</div>
	)
}
