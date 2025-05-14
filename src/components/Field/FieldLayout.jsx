import styles from './Field.module.css'

export const FieldLayout = ({ field, makeMove }) => {
	return (
		<div className={styles.field}>
			{field.map((el, index) => (
				<div key={index} className={styles.fieldEL}>
					<button
						onClick={() => makeMove(index)}
						className={`${styles.fieldButton} ${el ? styles[el] : ''}`}
					>
					</button>
				</div>
			))}
		</div>
	)
}
