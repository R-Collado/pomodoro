import { Contact } from './contact/contact';
import { Integrations } from './integrations/integrations';
import { ThemeSelector } from './theme-selector/theme-selector';
import { UserSettings } from './user-settings/user-settings';

export const Settings = () => {
    return (
        <section className="settings">
            <div className="container" data-type="ultra-wide">
                <div className="settings__sections | grid">
                    <UserSettings />
                    <Integrations />
                    <Contact />
                    <ThemeSelector />
                </div>
            </div>
        </section>
    );
};
