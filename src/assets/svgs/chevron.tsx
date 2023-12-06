interface IconProps {
    className: string;
}

export const ChevronIcon: React.FC<IconProps> = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7.20001 14.4001L12 9.6001L16.8 14.4001"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
