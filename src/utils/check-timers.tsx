export const checkIfTimerNameExists = (timerName: string) => {
    const timer = localStorage.getItem(timerName);

    return timer;
};

export const checkIfDefaultTimersExist = () => {
    const defaultTimer1 = localStorage.getItem('default_timer_1');
    const defaultTimer2 = localStorage.getItem('default_timer_2');
    const defaultTimer3 = localStorage.getItem('default_timer_3');
    const defaultTimer4 = localStorage.getItem('default_timer_4');
    const fastStartTimer = localStorage.getItem('fast_start');

    if (
        !defaultTimer1 ||
        !defaultTimer2 ||
        !defaultTimer3 ||
        !defaultTimer4 ||
        !fastStartTimer
    ) {
        return false;
    } else {
        return true;
    }
};

export const checkIfTimerNamesListExists = () => {
    const timerNamesList = localStorage.getItem('timers_names');
    if (timerNamesList) {
        return true;
    } else {
        return false;
    }
};
