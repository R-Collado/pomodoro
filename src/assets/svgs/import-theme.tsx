interface IconProps {
    className: string;
}

export const ImportThemeIcon: React.FC<IconProps> = ({
    className,
}: IconProps) => {
    return (
        <svg
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2.8 11.0971L7.9 6.29706L10.3 8.69706M2.8 11.0971H8.8C9.79411 11.0971 10.6 10.2912 10.6 9.29706V6.29706M2.8 11.0971C1.80589 11.0971 1 10.2912 1 9.29706V3.29706C1 2.30294 1.80589 1.49706 2.8 1.49706H6.7M10 4.39411L10 2.69706M10 2.69706L10 1M10 2.69706L8.30294 2.69706M10 2.69706L11.6971 2.69706M4.6 4.19706C4.6 4.69411 4.19706 5.09706 3.7 5.09706C3.20294 5.09706 2.8 4.69411 2.8 4.19706C2.8 3.7 3.20294 3.29706 3.7 3.29706C4.19706 3.29706 4.6 3.7 4.6 4.19706Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
