import { getSubjectStyle } from '../helpers/getSubjectStyle';
import styles from '../styles/components/Subject.module.css'



export const Subject = ({ subject }) => {
    const { id, name, degree, promote } = subject;

    const subjectStyle = getSubjectStyle(degree, promote);

    return (
        <div className={`${styles.container} ${subjectStyle}`}>
            <span className={styles.name}>{name}</span>
            {degree == 0
                ? null
                : <span className={styles.degree}>{degree}</span>
            }
        </div>
    )
}
