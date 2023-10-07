export const LoginPopup = () => {
    return (
        <div className="login-popup | bg-primary-700 padding-10">
            <h3 className="fs-600 fw-bold">welcome back!</h3>
            <p>enter your credentials</p>
            <form>
                <label htmlFor="email">email address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="joh_doe@domain.com"
                />
                <label htmlFor="password">password</label>
                <input id="password" type="password" placeholder="password" />
            </form>
        </div>
    );
};
