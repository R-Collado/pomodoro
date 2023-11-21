interface Icon {
    onClick: () => void;
}
export const TrashIcon: React.FC<Icon> = ({ onClick }) => {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M1.5 3.375H13.5M5.25 1.125H9.75M10.125 13.875H4.875C4.04657 13.875 3.375 13.2034 3.375 12.375L3.03255 4.15622C3.0148 3.73013 3.35544 3.375 3.7819 3.375H11.2181C11.6446 3.375 11.9852 3.73013 11.9674 4.15622L11.625 12.375C11.625 13.2034 10.9534 13.875 10.125 13.875Z"
                stroke="currentColor"
                stroke-linecap="round"
            />
        </svg>
    );
};
