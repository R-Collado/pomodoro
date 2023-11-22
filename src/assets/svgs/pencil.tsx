interface IconProps {
    className: string;
}

export const PencilIcon: React.FC<IconProps> = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6.90884 0.90697L1.30686 6.70459L0.45459 9.5455L3.2955 8.69323L9.09312 3.09125C9.69629 2.48808 9.69629 1.51014 9.09312 0.906968C8.48995 0.303796 7.51201 0.303797 6.90884 0.90697Z"
                fill="#FEFAFB"
            />
            <path
                d="M1.59095 6.70459L3.57959 8.40914M1.30686 6.70459L6.90884 0.90697C7.51201 0.303797 8.48995 0.303796 9.09312 0.906968C9.69629 1.51014 9.69629 2.48808 9.09312 3.09125L3.2955 8.69323L0.45459 9.5455L1.30686 6.70459Z"
                stroke="#1C1415"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
