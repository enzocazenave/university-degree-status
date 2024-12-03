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

			<span className={styles.chartSubjects}><span>{subjectsPassed}</span> materias aprobadas</span>
			<span className={styles.chartSubjects}><span>{subjectsTaken}</span> materias cursadas</span>
			<span className={styles.chartSubjects}><span style={{ backgroundColor: 'red' }}>{subjectsTaken - subjectsPassed}</span> materias en final previo</span>
			<span className={styles.chartSubjects}><span>{subjectsLength - subjectsTaken}</span> materias pendientes de cursar</span>
			<span className={styles.chartSubjects}><span>{subjectsLength - subjectsPassed}</span> materias pendientes de aprobar para recibirme</span>


		</section>
	)
}