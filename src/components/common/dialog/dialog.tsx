interface Dialog {
    openDialog?: () => void;
    closeDialog: () => void;
    children: any;
}

export const Dialog: React.FC<Dialog> = ({ closeDialog, children }) => {
    return (
        <div className="dialog">
            <div className="dialog__overlay" onClick={closeDialog}></div>
            <div className="dialog__content">{children}</div>
        </div>
    );
};
