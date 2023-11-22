import {
    createDefaultTimers,
    createTimerNameslist,
} from '../../utils/create-timers';
import {
    checkIfDefaultTimersExist,
    checkIfTimerNamesListExists,
} from '../../utils/check-timers';
import { Link } from 'react-router-dom';
import { CustomTimers } from './custom-timers/custom-timers';
import { useEffect, useState } from 'react';
import { Timer } from '../../interfaces/timer.interface';
import { formatTimerName } from '../../utils/create-timers';

export const Timers = () => {
    const [timersList, setTimersList] = useState<Timer[]>([]);

    const getDefaultTimers = () => {
        setTimersList([
            JSON.parse(localStorage.getItem('default_timer_1') || 'null'),
            JSON.parse(localStorage.getItem('default_timer_2') || 'null'),
            JSON.parse(localStorage.getItem('default_timer_3') || 'null'),
            JSON.parse(localStorage.getItem('default_timer_4') || 'null'),
        ]);
    };

    useEffect(() => {
        if (!checkIfDefaultTimersExist()) {
            createDefaultTimers();
        }

        if (!checkIfTimerNamesListExists()) {
            createTimerNameslist();
        }

        getDefaultTimers();
    }, []);

    return (
        <div className="container" data-type="wide">
            <div className="timer-list | padding-block-15 even-columns cols-4">
                {timersList.map((timer) => {
                    return (
                        <div
                            className="timer-item | bg-neutral-700 padding-5 border-radius-1"
                            key={timer.name}
                        >
                            <h3 className="timer-item__minutes | clr-neutral-100 opacity-5">
                                {timer.targetMinutes} <span>minutes</span>
                            </h3>
                            <p className="timer-item__description">
                                {timer.description}
                            </p>
                            <Link
                                className="button"
                                data-type="timer-select"
                                to={`/focus/${formatTimerName(timer.name)}`}
                            >
                                select timer
                            </Link>
                            <p className="timer-item__name | opacity-3 margin-block-start-6">
                                {timer.name}
                            </p>
                        </div>
                    );
                })}
                <CustomTimers />
            </div>
        </div>
    );
};
