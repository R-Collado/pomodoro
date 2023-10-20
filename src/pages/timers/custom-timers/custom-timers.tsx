export const CustomTimers = () => {
    return (
        <div className="custom-timers | even-columns cols-5 bg-neutral-700 padding-5 border-radius-1">
            <div className="flex-group flex-col">
                <h3 className="custom-timers__heading | margin-block-end-4">
                    custom timer
                </h3>
                <p className="custom-timers__description | margin-block-end-6">
                    create your own timer to use however you feel like it
                </p>
                <button className="button" data-type="timer-select">
                    create timer
                </button>
            </div>
            <div className="custom-timers__preset-description">
                <p>also, feel free to use one of this presets:</p>
            </div>
            <div className="custom-timers__preset">
                <h4 className="custom-timers__preset__name">preset 1</h4>
                <ul className="custom-timers__preset__feature-list | padding-inline-start-6 padding-block-4">
                    <li className="custom-timers__preset__feature-list__feature">
                        25 minutes
                    </li>
                    <li className="custom-timers__preset__feature-list__feature">
                        no breaks
                    </li>
                </ul>
                <button className="button">use preset</button>
            </div>
            <div className="custom-timers__preset">
                <h4 className="custom-timers__preset__name">preset 2</h4>
                <ul className="custom-timers__preset__feature-list | padding-inline-start-6 padding-block-4">
                    <li className="custom-timers__preset__feature-list__feature">
                        50 minutes
                    </li>
                    <li className="custom-timers__preset__feature-list__feature">
                        1 break
                    </li>
                </ul>
                <button className="button">use preset</button>
            </div>
            <div className="custom-timers__preset">
                <h4 className="custom-timers__preset__name">preset 3</h4>
                <ul className="custom-timers__preset__feature-list | padding-inline-start-6 padding-block-4">
                    <li className="custom-timers__preset__feature-list__feature">
                        90 minutes
                    </li>
                    <li className="custom-timers__preset__feature-list__feature">
                        3 breaks
                    </li>
                    {/* <li className="custom-timers__preset__feature-list__feature">
                        task list
                    </li> */}
                </ul>
                <button className="button">use preset</button>
            </div>
        </div>
    );
};
