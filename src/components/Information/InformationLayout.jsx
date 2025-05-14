import styles from './Information.module.css'

export const InformationLayout = ({ status }) => {
	return <p className={styles.title}>{status}</p>
}
