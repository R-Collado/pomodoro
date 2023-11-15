import { InformationIcon } from '../../../assets/svgs/information';

import { saveImageOnLocalStorage } from '../../../utils/images';
import { InputImageModal } from './input-image';
import { useState } from 'react';
import { Dialog } from '../../../components/common/dialog/dialog';

export const UserSettings = () => {
    const [isImageInputOpen, setIsImageInputOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const userImg = JSON.parse(localStorage.getItem('user') || '').image;

    const saveUserImage = () => {
        saveImageOnLocalStorage(userImg);
    };

    const openImageInput = () => {
        setIsImageInputOpen(true);
    };

    const closeImageInput = () => {
        setIsImageInputOpen(false);
    };

    const openInfoDialog = () => {
        setIsDialogOpen(true);
    };

    const closeInfoDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="settings__section user-settings | padding-10">
            <header className="flex">
                <button onClick={saveUserImage}>edit profile</button>
                <p
                    className="user-settings__information-button | clr-neutral-500 flex pointer"
                    onClick={openInfoDialog}
                >
                    what does this mean?
                    <InformationIcon />
                </p>
            </header>

            <main className="user-settings__user-info">
                <div className="user-settings__image-plus-socials">
                    <img
                        onClick={openImageInput}
                        className="user-settings__image"
                        src={userImg}
                    />
                </div>
            </main>

            {isImageInputOpen && (
                <>
                    <div className="overlay" onClick={closeImageInput}></div>
                    <InputImageModal onCloseClick={closeImageInput} />
                </>
            )}

            {isDialogOpen && (
                <Dialog closeDialog={closeInfoDialog}>
                    <h4 className="dialog__header">welcome to your profile</h4>
                    <div className="dialog__profile-info">
                        <div className="dialog__profile-info__group">
                            <p className="dialog__profile-info__question | clr-neutral-500">
                                what is this?
                            </p>
                            <p className="dialog__profile-info__explanation">
                                this is your personal space, you can add any of
                                your social platforms, even your personal
                                website if you have one.
                            </p>
                        </div>
                        <div className="dialog__profile-info__group">
                            <p className="dialog__profile-info__question | clr-neutral-500">
                                should i write a bio?
                            </p>
                            <p className="dialog__profile-info__explanation">
                                it can help you connect with people based on
                                your interests or just be another way to express
                                yourself.
                            </p>
                        </div>
                        <div className="dialog__profile-info__group">
                            <p className="dialog__profile-info__question | clr-neutral-500">
                                what does that eye icon do?
                            </p>
                            <p className="dialog__profile-info__explanation">
                                you can use it to toggle the info that users
                                will see if they enter your profile, if the
                                information is in grey it means that it is
                                invisible for everyone besides you. note that
                                you will be able to watch other profiles even if
                                you go private.
                            </p>
                        </div>
                        <div className="dialog__profile-info__group">
                            <p className="dialog__profile-info__question | clr-neutral-500">
                                how do i edit this information?
                            </p>
                            <p className="dialog__profile-info__explanation">
                                clicking the edit button will make everything
                                editable, this way you can see exactly how users
                                will see your profile after saving your changes.
                            </p>
                        </div>
                    </div>
                    {/* <h4 className="dialog__header">create your timer</h4>
                    <form className="dialog__form">
                        <div className="dialog__form__input__group">
                            <label
                                className="dialog__form__label"
                                htmlFor="timer_name"
                            >
                                timer name
                            </label>
                            <input
                                className="dialog__form__input"
                                name="timer_name"
                                id="timer_name"
                            ></input>
                        </div>
                        <div className="dialog__form__input__group">
                            <label
                                htmlFor="timer__description"
                                className="dialog__form__label"
                            >
                                timer description
                            </label>
                            <textarea
                                name="timer__description"
                                id="timer__description"
                                className="dialog__form__textarea"
                            ></textarea>
                        </div>
                    </form> */}
                </Dialog>
            )}
        </div>
    );
};
