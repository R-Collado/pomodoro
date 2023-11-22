import { InformationIcon } from '../../../assets/svgs/information';

import { InputImageModal } from './input-image';
import { useState } from 'react';
import { Dialog } from '../../../components/common/dialog/dialog';
import { InstagramIcon } from '../../../assets/svgs/instagram';
import { TwitterIcon } from '../../../assets/svgs/twitter';
import { User } from '../../../interfaces/user.interface';
import { PencilIcon } from '../../../assets/svgs/pencil';

export const UserSettings = () => {
    const [isImageInputOpen, setIsImageInputOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const profileImg = JSON.parse(localStorage.getItem('user') || '').image;
    const user: User = JSON.parse(localStorage.getItem('user') || '');

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
                <div className="user-settings__edit-button-div">
                    <PencilIcon className="icon | clr-primary-900" />
                </div>
                <p
                    className="user-settings__information-button | clr-neutral-500 flex pointer"
                    onClick={openInfoDialog}
                >
                    what does this mean?
                    <InformationIcon />
                </p>
            </header>

            <main className="user-settings__user-info | flex">
                <div className="user-settings__visual-info">
                    <div className="user-settings__image-plus-socials">
                        <img
                            onClick={openImageInput}
                            className="user-settings__image"
                            src={profileImg}
                        />
                        <div className="socials | flex">
                            <TwitterIcon className="user-settings__social-icon | clr-neutral-500 pointer"></TwitterIcon>
                            <InstagramIcon className="user-settings__social-icon | clr-neutral-500 pointer" />
                        </div>
                    </div>
                    <div className="user-settings__badges | margin-block-start-10">
                        <p className="clr-neutral-500 text-center">badges</p>
                    </div>
                </div>
                <div className="user-settings__personal-info">
                    <div className="user-settings__personal-info__information-bit username">
                        <p className="user-settings__personal-info__info-bit__label | clr-neutral-500">
                            username
                        </p>
                        <p className="user-settings__personal-info__info-bit__value">
                            {user.username}
                        </p>
                    </div>
                    <div className="user-settings__personal-info__information-bit email">
                        <p className="user-settings__personal-info__info-bit__label | clr-neutral-500">
                            email
                        </p>
                        <p className="user-settings__personal-info__info-bit__value">
                            {user.email}
                        </p>
                    </div>
                    <div className="user-settings__personal-info__information-bit bio">
                        <p className="user-settings__personal-info__info-bit__label | clr-neutral-500">
                            bio
                        </p>
                        <p className="user-settings__personal-info__info-bit__value">
                            name’s {user.username}, i’ve been a ux/ui designer
                            for 5 years, needed a change in my workflow so i
                            started to find new ways to improve my productivity.
                            discovered the pomodoro technique and haven’t looked
                            back since.
                        </p>
                    </div>
                    <div className="user-settings__personal-info__information-bit member-since">
                        <p className="user-settings__personal-info__info-bit__label | clr-neutral-500">
                            member since
                        </p>
                        <p className="user-settings__personal-info__info-bit__value">
                            30 nov 2023
                        </p>
                    </div>
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
                </Dialog>
            )}
        </div>
    );
};
