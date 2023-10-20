import { CustomTimers } from './custom-timers/custom-timers';

export const Timers = () => {
    return (
        <div className="container" data-type="wide">
            <div className="timer-list | padding-block-15 even-columns cols-4">
                <div className="timer-item | bg-neutral-700 padding-5 border-radius-1">
                    <h3 className="timer-item__minutes | clr-neutral-100 opacity-5">
                        25 <span>minutes</span>
                    </h3>
                    <p className="timer-item__description">
                        perfect for a short work session or a simple task.
                    </p>
                    <button className="button" data-type="timer-select">
                        select timer
                    </button>
                    <p className="timer-item__name | opacity-3 margin-block-start-6">
                        default timer 1
                    </p>
                </div>
                <div className="timer-item | bg-neutral-700 padding-5 border-radius-1">
                    <h3 className="timer-item__minutes | clr-neutral-100 opacity-5">
                        50 <span>minutes</span>
                    </h3>
                    <p className="timer-item__description">
                        for those times when you need to work a little bit
                        longer.
                    </p>
                    <button className="button" data-type="timer-select">
                        select timer
                    </button>
                    <p className="timer-item__name | opacity-3 margin-block-start-6">
                        default timer 2
                    </p>
                </div>
                <div className="timer-item | bg-neutral-700 padding-5 border-radius-1">
                    <h3 className="timer-item__minutes | clr-neutral-100 opacity-5">
                        60 <span>minutes with 1 break</span>
                    </h3>
                    <p className="timer-item__description">
                        feeling stressed? take a breake in between intervals.
                    </p>
                    <button className="button" data-type="timer-select">
                        select timer
                    </button>
                    <p className="timer-item__name | opacity-3 margin-block-start-6">
                        default timer 3
                    </p>
                </div>
                <div className="timer-item | bg-neutral-700 padding-5 border-radius-1">
                    <h3 className="timer-item__minutes | clr-neutral-100 opacity-5">
                        120 <span>minutes with 2 breaks</span>
                    </h3>
                    <p className="timer-item__description">
                        this should be perfect for a long working session.
                    </p>
                    <button className="button" data-type="timer-select">
                        select timer
                    </button>
                    <p className="timer-item__name | opacity-3 margin-block-start-6">
                        default timer 4
                    </p>
                </div>
                <CustomTimers />
            </div>
        </div>
    );
};
