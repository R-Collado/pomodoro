import { useState } from 'react';
import { Dialog } from '../../../components/common/dialog/dialog';

import { createTimer } from '../../../utils/create-timers';

export const CustomTimers = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [timerHasBreaks, setTimerHasBreaks] = useState(true);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const resetForm = (e: any) => {
        e.preventDefault();
        const form = getForm();
        form.reset();
        setTimerHasBreaks(true);
    };

    const checkBreaks = (e: any) => {
        const value = e.target.value;

        if (value === 'true') setTimerHasBreaks(true);
        else setTimerHasBreaks(false);
    };

    const handleTimerCreation = (e: any) => {
        e.preventDefault();
        const timer = {
            name: e.target[0].value,
            description: e.target[1].value,
            targetMinutes: e.target[2].value,
            alarm: e.target[3].value,
            breaks: e.target[4].value,
            typeOfBreaks: e.target[5].value,
        };
        createTimer(timer);
    };

    const getForm = () => {
        return document.querySelector('.dialog__form') as HTMLFormElement;
    };
    return (
        <div className="custom-timers | even-columns cols-5 bg-neutral-700 padding-5 border-radius-1">
            <div className="flex-group flex-col">
                <h3 className="custom-timers__heading | margin-block-end-4">
                    custom timer
                </h3>
                <p className="custom-timers__description | margin-block-end-6">
                    create your own timer to use however you feel like it
                </p>
                <button
                    className="button"
                    data-type="timer-select"
                    onClick={openDialog}
                >
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
                </ul>
                <button className="button">use preset</button>
            </div>

            {isDialogOpen && (
                <Dialog closeDialog={closeDialog}>
                    <h4 className="dialog__header">create your timer</h4>
                    <form
                        className="dialog__form"
                        onSubmit={handleTimerCreation}
                    >
                        <div className="dialog__form__input__group">
                            <label
                                className="dialog__form__label"
                                htmlFor="name"
                            >
                                timer name
                            </label>
                            <input
                                className="dialog__form__input"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="dialog__form__input__group">
                            <label
                                htmlFor="description"
                                className="dialog__form__label"
                            >
                                dialog description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                className="dialog__form__textarea"
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="dialog__form__input__group">
                            <label
                                htmlFor="targetMinutes"
                                className="dialog__form__label"
                            >
                                target minutes
                            </label>
                            <input
                                type="number"
                                id="targetMinutes"
                                name="targetMinutes"
                                className="dialog__form__input"
                            />
                        </div>
                        <div className="dialog__form__input__group">
                            <label
                                htmlFor="alarm"
                                className="dialog__form__label"
                            >
                                choose your alarm
                            </label>
                            <select
                                className="dialog__form__select"
                                name="alarm"
                                id="alarm"
                            >
                                <option>alarm 1</option>
                                <option>alarm 2</option>
                            </select>
                        </div>

                        <div className="dialog__form__double__input__group">
                            <div className="dialog__form__input__group">
                                <label
                                    htmlFor="breaks"
                                    className="dialog__form__label"
                                >
                                    will it have breaks?
                                </label>
                                <select
                                    className="dialog__form__select"
                                    name="breaks"
                                    id="breaks"
                                    onChange={checkBreaks}
                                >
                                    <option value="true">yes</option>
                                    <option value="false">no</option>
                                </select>
                            </div>
                            <div className="dialog__form__input__group">
                                <label
                                    htmlFor="typeOfBreaks"
                                    className={'dialog__form__label'}
                                >
                                    type of intervals
                                </label>
                                <select
                                    className={`dialog__form__select ${
                                        !timerHasBreaks ? 'disabled' : ''
                                    }`}
                                    name="typeOfBreaks"
                                    id="typeOfBreaks"
                                    disabled={!timerHasBreaks}
                                >
                                    {timerHasBreaks && (
                                        <>
                                            <option>25 minutes</option>
                                            <option>50 minutes</option>
                                        </>
                                    )}

                                    {!timerHasBreaks && (
                                        <option>no intervals</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <footer className="dialog__form__footer">
                            <button
                                className="dialog__form__reset-button | button"
                                data-type="transparent"
                                onClick={resetForm}
                            >
                                reset settings
                            </button>
                            <button
                                className="dialog__form__save-button | button"
                                data-type="tertiary"
                            >
                                create timer
                            </button>
                        </footer>
                    </form>
                </Dialog>
            )}
        </div>
    );
};
