import styles from '../styles/components/Chart.module.css'
import data from '../data/data.json'
import { getPassedDegrees } from '../helpers/getPassedDegrees';
import { getSubjectsTaken } from '../helpers/getSubjectsTaken';

export const Chart = () => {

	const subjectsLength = data.length;
	const subjectsPassed = getPassedDegrees()
	const subjectsTaken = getSubjectsTaken()
	const percentage = Math.round((subjectsPassed / subjectsLength) * 100)

	return (
		<section className={styles.container}>
			<h2 style={{ textAlign: 'center' }}>Ingenieria en informatica</h2>
			<h3>Estado</h3>

			<div className={styles.chart}>
				<div className={styles.chartBar} style={{ width: `${percentage}%` }}></div>
				<span className={styles.chartPercentage}>{percentage}%</span>
			</div>

			<span className={styles.chartSubjects}>{subjectsPassed}/{subjectsLength} materias aprobadas</span>
			<span className={styles.chartSubjects}>{subjectsTaken} materias cursadas</span>
		</section>
	)
}