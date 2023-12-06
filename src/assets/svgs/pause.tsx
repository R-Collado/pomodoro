interface IconProps {
    className: string;
}

export const PauseIcon: React.FC<IconProps> = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M9.60002 15.5999V8.3999M14.4 15.5999V8.3999M12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C17.302 2.3999 21.6 6.69797 21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
