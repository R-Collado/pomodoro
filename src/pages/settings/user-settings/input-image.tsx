import { saveImageOnLocalStorage } from '../../../utils/images';
import { resizeFile } from '../../../utils/resizer';

interface saveImage {
    onCloseClick: () => void;
}

export const InputImageModal: React.FC<saveImage> = ({ onCloseClick }) => {
    const saveImage = async (e: any) => {
        e.preventDefault();
        const image = e.target.firstChild.files[0];

        try {
            const resizedImage = await resizeFile(image);
            saveImageOnLocalStorage(resizedImage);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="input-image-modal | bg-neutral-700 padding-6">
            <form onSubmit={saveImage}>
                <input type="file" name="user-image" accept="image/*"></input>
                <div className="buttons">
                    <button className="save-button | button">save</button>
                    <button
                        className="close-button | button"
                        data-type="transparent"
                        onClick={onCloseClick}
                    >
                        close
                    </button>
                </div>
            </form>
        </div>
    );
};
