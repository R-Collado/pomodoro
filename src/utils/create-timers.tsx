import { Timer } from '../interfaces/timer.interface';

export const createDefaultTimers = () => {
    const defaultTimers: Timer[] = [
        {
            name: 'default timer 1',
            description: 'perfect for a short work session or a simple task.',
            targetMinutes: 25,
            breaks: false,
            alarm: 'default',
        },
        {
            name: 'default timer 2',
            description:
                'for those times when you need to work a little bit longer.',
            targetMinutes: 50,
            breaks: false,
            alarm: 'default',
        },
        {
            name: 'default timer 3',
            description: 'feeling stressed? take a break in between intervals.',
            targetMinutes: 60,
            breaks: true,
            typeOfBreaks: 25,
            alarm: 'default',
        },
        {
            name: 'default timer 4',
            description: 'this should be perfect for a long working session.',
            targetMinutes: 120,
            breaks: true,
            typeOfBreaks: 50,
            alarm: 'default',
        },
        {
            name: 'default timer 4',
            description: 'this should be perfect for a long working session.',
            targetMinutes: 120,
            breaks: true,
            typeOfBreaks: 50,
            alarm: 'default',
        },
        {
            name: 'fast start',
            targetMinutes: 25,
            breaks: false,
            alarm: 'default',
        },
    ];

    defaultTimers.forEach((timer) => {
        const formattedTimerName = formatTimerName(timer.name);
        localStorage.setItem(formattedTimerName, JSON.stringify(timer));
    });

    localStorage.setItem('timers_names', JSON.stringify([]));
    console.log('created');
};

export const createTimer = (timer: Timer) => {
    const formattedTimerName = formatTimerName(timer.name);
    localStorage.setItem(formattedTimerName, JSON.stringify(timer));
};

export const formatTimerName = (timerName: string) => {
    return timerName.replace(/ /g, '_');
};

const presetValues = [
    {
        name: '',
        description: '',
        targetMinutes: 25,
        alarm: 'alarm 1',
        breaks: false,
        typeOfBreaks: 0,
    },
    {
        name: '',
        description: '',
        targetMinutes: 50,
        alarm: 'alarm 1',
        breaks: true,
        typeOfBreaks: 25,
    },
    {
        name: '',
        description: '',
        targetMinutes: 90,
        alarm: 'alarm 1',
        breaks: true,
        typeOfBreaks: 25,
    },
];
export const getPreset = (presetIndex: number) => {
    return presetValues[presetIndex];
};
