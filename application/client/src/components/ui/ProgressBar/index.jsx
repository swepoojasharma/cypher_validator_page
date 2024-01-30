function ProgressBar(props) {
    const { className, filled } = props;
    return (
        <div className={`bg-gray-300 rounded-full h-1.5 mb-4 ${className} `}>
            <div
                className="bg-green-200 h-1.5 rounded-full"
                style={{
                    width: `${filled}%`,
                    transition: 'width 0.5s',
                }}
            ></div>
        </div>
    );
}
export default ProgressBar;
