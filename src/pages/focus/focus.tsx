import ReverseClock from './components/clock';
import { useEffect, useState } from 'react';

export const Focus = () => {
    const targetMinutes: number = 1;

    const [isClockRunning, setIsClockRunning] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);

    const circularProgress = document.querySelector(
        '.circular-progress'
    ) as HTMLElement;

    let progressedTime: number;
    let progress: number;
    const totalSeconds: number = targetMinutes * 60;
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
        clearInterval(progress);
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
                            targetMinutes={targetMinutes}
                            isClockRunning={isClockRunning}
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
