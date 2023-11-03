import { Hero } from '../hero/hero';
import { Tips } from '../tips/tips';
import { createDefaultTimers } from '../../utils/create-timers';
import { checkIfDefaultTimersExist } from '../../utils/check-timers';

export const Home = () => {
    if (!checkIfDefaultTimersExist()) {
        createDefaultTimers();
    }

    return (
        <div className="container" data-type="wide">
            <Hero />
            <Tips />
        </div>
    );
};
