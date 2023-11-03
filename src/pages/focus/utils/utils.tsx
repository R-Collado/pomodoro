export const checkIfTimerNameExists = (timerName: string) => {
    const timer = localStorage.getItem(timerName);

    return timer;
};
