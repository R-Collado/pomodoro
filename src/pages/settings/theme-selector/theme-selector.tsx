import { useState } from 'react';
import { ImportThemeIcon } from '../../../assets/svgs/import-theme';
import { Dialog } from '../../../components/common/dialog/dialog';

export const ThemeSelector = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="settings__section theme-selector | padding-10">
            <p className="clr-neutral-500">select website theme</p>
            <p>
                there are some default ones, but you can also have a custom one,
                either by importing it from discord or creating your own.
            </p>
            <div className="theme-selector__theme-list | flex margin-block-start-4">
                <select
                    className="theme-selector__theme-list"
                    name="theme"
                    id="theme"
                >
                    <option value="default_theme_1">default theme 1</option>
                    <option value="default_theme_2">default theme 2</option>
                </select>
                <button
                    className="button | clr-neutral-100"
                    onClick={() => setIsDialogOpen(true)}
                >
                    import theme
                    <ImportThemeIcon className="icon | margin-inline-start-2" />
                </button>
            </div>
            {!!isDialogOpen && (
                <Dialog closeDialog={() => setIsDialogOpen(false)}>
                    <form onSubmit={() => console.log('submitted')}>
                        <input type="file" name="theme" accept="json"></input>
                        <div className="buttons">
                            <button className="save-button | button">
                                save
                            </button>
                            <button
                                className="close-button | button"
                                data-type="transparent"
                                onClick={() => setIsDialogOpen(false)}
                            >
                                close
                            </button>
                        </div>
                    </form>
                </Dialog>
            )}
        </div>
    );
};
