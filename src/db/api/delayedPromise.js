const getRandomDelayInMS = () => {
    const min = 100;
    const max = 900;

    return Math.floor(Math.random() * (max - min) + min);
}
export const delayedPromise = (returnValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(returnValue);
            // reject({message: 'Error'});
        }, getRandomDelayInMS());
    });
}