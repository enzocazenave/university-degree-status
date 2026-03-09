import data from '../data/data.json'

export const getSubjectsTaking = () => data.reduce((acc, curr) => {
    if (curr.degree === -1) return acc + 1;

    return acc;
}, 0)