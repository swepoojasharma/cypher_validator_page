function CopyIcon({ className, ...props }) {
    return (
        <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M13.438 13.125h3.75v-10h-10v3.75"
                stroke="#110C22"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            />
            <path
                d="M13.438 6.875h-10v10h10v-10z"
                stroke="#110C22"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            />
        </svg>
    );
}

export default CopyIcon;
