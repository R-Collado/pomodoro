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
        const formattedTimerName = timer.name.replace(/ /g, '_');
        localStorage.setItem(formattedTimerName, JSON.stringify(timer));
    });
};
