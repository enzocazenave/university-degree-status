import data from '../data/data.json'
import { Subject } from './Subject'
import styles from '../styles/components/ListOfSubjects.module.css'

export const ListOfSubjects = () => {
	return (
		<section className={styles.container}>
			{data.map((subject, index) => <Subject key={index} subject={subject} />)}
		</section>
	)
}