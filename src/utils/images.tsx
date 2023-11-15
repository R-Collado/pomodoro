export const saveImageOnLocalStorage = (image: any) => {
    const user = JSON.parse(localStorage.getItem('user') || '');
    user.image = image;
    localStorage.setItem('user', JSON.stringify(user));
};

export const transformBlobToImage = (blob: any) => {
    const image = URL.createObjectURL(blob);
    return image;
};
