import { Link } from 'react-router-dom';
import { LoadingScreen } from '../loading-screen/loading-screen';

export const Hero = () => {
    return (
        <div className="hero | text-center">
            <h1>
                the <span className="clr-primary-400">pomodoro</span> technique.
            </h1>

            <LoadingScreen />
            <p className="hero__subtitle">
                manage your time to work in intervals
            </p>
            <div className="hero__buttons | flex margin-block-start-10">
                <Link
                    to="/timers"
                    className="button "
                    data-type="primary"
                    data-shape="pill"
                >
                    go to timers
                </Link>
                <Link
                    to="/focus/fast_start"
                    className="button"
                    data-type="secondary"
                    data-shape="pill"
                >
                    fast start
                </Link>
            </div>
        </div>
    );
};
