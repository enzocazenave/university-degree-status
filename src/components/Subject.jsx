import styles from '../styles/components/Subject.module.css'

export const Subject = ({ subject }) => {
    const { id, name, degree } = subject;

    return (
        <div className={styles.container}>
            <span className={styles.name}>{name}</span>
            <span className={styles.degree}>{degree}</span>
        </div>
    )
}