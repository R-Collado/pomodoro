export const Hero = () => {
    return (
        <div className="hero | text-center">
            <h1>
                the <span className="clr-primary-400">pomodoro</span> technique.
            </h1>
            <p className="hero__subtitle">
                manage your time to work in intervals
            </p>
            <div className="hero__buttons | flex margin-block-start-10">
                <button
                    className="button "
                    data-type="primary"
                    data-shape="pill"
                >
                    go to timers
                </button>
                <button
                    className="button"
                    data-type="secondary"
                    data-shape="pill"
                >
                    fast start
                </button>
            </div>
        </div>
    );
};
