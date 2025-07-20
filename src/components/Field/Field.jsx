import styles from './styles.module.css'


export const Field = ({ field, makeMove }) => {
	
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