import data from '../data/data.json'

export const getSubjectsTaken = () => data.reduce((acc, curr) => {
    if (curr.degree === 0) return acc;

    return acc + 1;
}, 0)