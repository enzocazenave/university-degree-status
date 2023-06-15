import styles from '../styles/components/Chart.module.css'

export const Chart = () => {
	return (
		<section className={styles.container}>
			<h2>Estado de carrera universitaria</h2>
			<div className={styles.chart}>
				<span className={styles.chartPercentage}>65%</span>
			</div>
			<span className={styles.chartSubjects}>11/50 materias</span>
		</section>
	)
}