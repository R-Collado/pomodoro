import { InformationIcon } from '../../../assets/svgs/information';

import userImg from '../../../assets/imgs/user_img.png';
import { saveImageOnLocalStorage } from '../../../utils/images';
import { InputImageModal } from './input-image';
import { useState } from 'react';

export const UserSettings = () => {
    const [isImageInputOpen, setIsImageInputOpen] = useState(false);

    const saveUserImage = () => {
        saveImageOnLocalStorage(userImg);
    };

    const openImageInput = () => {
        setIsImageInputOpen(true);
    };

    const closeImageInput = () => {
        setIsImageInputOpen(false);
    };

    return (
        <div className="settings__section user-settings | padding-10">
            <header className="flex">
                <button onClick={saveUserImage}>edit profile</button>
                <p className="user-settings__information-button | clr-neutral-500 flex pointer">
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
        </div>
    );
};
