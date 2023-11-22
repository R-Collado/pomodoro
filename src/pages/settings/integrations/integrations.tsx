import { DiscordIcon } from '../../../assets/svgs/discord';
import { SpotifyIcon } from '../../../assets/svgs/spotify';

export const Integrations = () => {
    return (
        <div className="settings__section integrations | padding-10">
            <div className="integrations__bit">
                <p className="integrations__bit__label  | clr-neutral-500">
                    <SpotifyIcon className="icon | clr-neutral-500 inline-block margin-inline-end-2" />
                    <span>spotify integration</span>
                </p>
                <p className="integrations__bit__description">
                    this will be used so you’re able to control some (or maybe
                    every action) features of spotify. mainly you will be able
                    to skip or go to previous songs, pause/resume or even add
                    some song to the ones that you like!
                </p>
                <button
                    className="button | padding-block-2 padding-inline-8 margin-block-start-2"
                    data-shape="small-rounded"
                >
                    link spotify
                </button>
            </div>
            <div className="integrations__bit | margin-block-start-6">
                <p className="integrations__bit__label  | clr-neutral-500">
                    <DiscordIcon className="icon | clr-neutral-500 inline-block margin-inline-end-2" />
                    <span>discord integration</span>
                </p>
                <p className="integrations__bit__description">
                    if you connect the app with discord you’ll be redirected to
                    the pomodoor discord server, right now it’s still on
                    development stage but it will have some nice features, count
                    on it
                </p>
                <button
                    className="button | padding-block-2 padding-inline-8 margin-block-start-2"
                    data-shape="small-rounded"
                >
                    link discord
                </button>
            </div>
        </div>
    );
};
