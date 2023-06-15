import styles from '../styles/components/Subject.module.css'

export const getSubjectStyle = (degree, promote) => {
    if (promote) return styles.promociona;
    if (degree == 0) return null;
    if (degree > 3) return styles.aprobado;
    if (degree < 4) return styles.desaprobado;
}