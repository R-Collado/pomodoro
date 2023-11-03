import React, { useState, useEffect } from 'react';

type ReverseClockProps = {
    targetMinutes: number;
    isClockRunning: boolean;
    timeProgress: number;
};

const ReverseClock = ({
    targetMinutes,
    isClockRunning,
    timeProgress,
}: ReverseClockProps) => {
    const totalSeconds = targetMinutes * 60;

    const calculateTimeRemaining = (totalSeconds: number) => {
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60);
        return {
            total: totalSeconds,
            minutes,
            seconds,
        };
    };

    useEffect(() => {
        if (timeProgress === 0) {
            setTimeRemaining(calculateTimeRemaining(targetMinutes * 60));
        }
    }, [timeProgress]);

    useEffect(() => {
        let clockInterval: any;

        if (isClockRunning) {
            clockInterval = setInterval(() => {
                setTimeRemaining((prevState) => {
                    let totalSeconds = prevState.total - 1;
                    const minutes = Math.floor(totalSeconds / 60);
                    const seconds = totalSeconds % 60;

                    if (totalSeconds == 0) {
                        clearInterval(clockInterval);
                    }

                    return {
                        total: totalSeconds,
                        minutes,
                        seconds,
                    };
                });
            }, 1000);
        }

        return () => clearInterval(clockInterval);
    }, [isClockRunning]);

    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeRemaining(totalSeconds)
    );

    return (
        <div>
            <div>
                <p className="fs-700">
                    {timeRemaining.minutes.toString().padStart(2, '0')}:
                    {timeRemaining.seconds.toString().padStart(2, '0')}
                </p>
            </div>
        </div>
    );
};

export default ReverseClock;
