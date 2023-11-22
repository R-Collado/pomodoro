import { DiscordIcon } from '../../../assets/svgs/discord';
import { InstagramIcon } from '../../../assets/svgs/instagram';
import { TwitterIcon } from '../../../assets/svgs/twitter';

export const Contact = () => {
    return (
        <div className="settings__section contact | padding-10">
            <p>
                if you need support, want to give some suggestions or have some
                feedback just contact me on any of my socials, i’ll gladly
                respond!
            </p>
            <p className="clr-neutral-500">
                if you are a discord user and have it linked with the app that
                would be the easiest and fastest routes
            </p>
            <div className="socials | flex">
                <DiscordIcon className="icon | clr-neutral-500 pointer" />
                <InstagramIcon className="icon | clr-neutral-500 pointer" />
                <TwitterIcon className="icon | clr-neutral-500 pointer" />
            </div>
        </div>
    );
};
