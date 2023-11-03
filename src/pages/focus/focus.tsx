import ReverseClock from './components/clock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Timer } from '../../interfaces/timer.interface';

export const Focus = () => {
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const { timerName } = useParams();
    const timer: Timer = JSON.parse(
        localStorage.getItem(timerName || '') || '{}'
    );

    const circularProgress = document.querySelector(
        '.circular-progress'
    ) as HTMLElement;

    let progressedTime: number;
    const totalSeconds: number = timer.targetMinutes * 60;
    const progressDegrees: number = 360 / totalSeconds;

    useEffect(() => {
        let progress: any;

        if (isClockRunning) {
            progress = setInterval(() => {
                setTimeProgress((prevState) => {
                    let time = prevState + progressDegrees;
                    progressedTime = time;
                    return time;
                });
                circularProgress.style.background = `conic-gradient(#93d2c2 ${progressedTime}deg, #ededed 0deg)`;

                if (progressedTime >= 360) {
                    stopClock();
                    clearInterval(progress);
                }
            }, 1000);
        }
        return () => clearInterval(progress);
    }, [isClockRunning]);

    const startClock = () => {
        setIsClockRunning(true);
    };

    const stopClock = () => {
        setIsClockRunning(false);
    };

    const resetClock = () => {
        setIsClockRunning(false);
        setTimeProgress(0);
        circularProgress.style.background = `conic-gradient(#93d2c2 0deg, #ededed 0deg)`;
    };

    return (
        <div className="container" data-type="wide">
            <section className="focus">
                <div>
                    <div className="circular-progress">
                        <ReverseClock
                            targetMinutes={timer.targetMinutes}
                            isClockRunning={isClockRunning}
                            timeProgress={timeProgress}
                        />
                    </div>
                </div>
                <button onClick={startClock} disabled={isClockRunning}>
                    start clock
                </button>
                <button onClick={stopClock} disabled={!isClockRunning}>
                    stop clock
                </button>
                <button onClick={resetClock}>reset clock</button>
            </section>
        </div>
    );
};
