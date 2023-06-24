import styles from '../styles/components/Chart.module.css'
import data from '../data/data.json'
import { getPassedDegrees } from '../helpers/getPassedDegrees';

export const Chart = () => {

	const subjectsLength = data.length;
	const subjectsPassed = getPassedDegrees()
	const percentage = Math.round((subjectsPassed / subjectsLength) * 100)

	return (
		<section className={styles.container}>
			<h2 style={{ textAlign: 'center' }}>Ingenieria en informatica</h2>
			<h3>Estado</h3>

			<div className={styles.chart}>
				<div className={styles.chartBar} style={{ width: `${20}%` }}></div>
				<span className={styles.chartPercentage}>{percentage}%</span>
			</div>

			<span className={styles.chartSubjects}>{subjectsPassed}/{subjectsLength} materias</span>
		</section>
	)
}