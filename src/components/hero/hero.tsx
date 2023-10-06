export const Hero = () => {
    return (
        <div className="hero | text-center">
            <h1 className="ff-accent">
                the <span className="clr-primary-400">pomodoro</span> technique.
            </h1>
            <p>manage your time to work in intervals</p>
            <div className="buttons | flex">
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
