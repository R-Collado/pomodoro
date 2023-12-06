interface IconProps {
    className: string;
}

export const ResetIcon: React.FC<IconProps> = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C17.302 2.3999 21.6 6.69797 21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M8.40002 9.7499C8.40002 9.00432 9.00444 8.3999 9.75002 8.3999H14.25C14.9956 8.3999 15.6 9.00432 15.6 9.7499V14.2499C15.6 14.9955 14.9956 15.5999 14.25 15.5999H9.75002C9.00444 15.5999 8.40002 14.9955 8.40002 14.2499V9.7499Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
};
