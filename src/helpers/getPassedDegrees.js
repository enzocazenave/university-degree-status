import data from '../data/data.json'

export const getPassedDegrees = () => {
    let passedDegrees = 0;

    data.forEach(subject => {
        if (subject.degree >= 4) passedDegrees++;
    })

    return passedDegrees
}