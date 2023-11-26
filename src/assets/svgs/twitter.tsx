interface IconProps {
    className: string;
}

export const TwitterIcon: React.FC<IconProps> = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.774 9.59988C8.3022 9.59988 10.779 5.90601 10.779 2.7031C10.779 2.59795 10.779 2.49359 10.7718 2.38962C11.2536 2.047 11.6694 1.62159 12 1.13484C11.5512 1.33096 11.0742 1.45958 10.5864 1.51628C11.1 1.21324 11.4846 0.737145 11.6688 0.175365C11.1852 0.457731 10.6566 0.657013 10.1052 0.763939C9.1728 -0.211943 7.6134 -0.259224 6.6216 0.658764C5.9826 1.25067 5.7108 2.13319 5.9094 2.97497C3.93 2.87692 2.0856 1.95658 0.8352 0.442553C0.1818 1.55016 0.516 2.96657 1.5978 3.67781C1.206 3.66658 0.8226 3.56273 0.48 3.37488V3.40564C0.4806 4.55933 1.3068 5.55272 2.4552 5.78132C2.0928 5.87879 1.7124 5.89293 1.344 5.82263C1.6662 6.81033 2.5908 7.48683 3.6438 7.50632C2.772 8.18093 1.695 8.54725 0.5862 8.54607C0.3906 8.54548 0.195 8.53424 0 8.51121C1.1262 9.22244 2.436 9.59989 3.774 9.59812"
                fill="currentColor"
            />
        </svg>
    );
};
