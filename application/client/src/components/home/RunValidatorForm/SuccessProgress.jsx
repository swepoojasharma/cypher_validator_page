import { useEffect, useState } from 'react';
import ProgressBar from '../../ui/ProgressBar';

function SuccessProgress(props) {
    const { address, isProgressRunning, setIsProgressRunning, setPrevAddress } = props;
    const [filled, setFilled] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (filled < 100 && isProgressRunning) {
            setIsVisible(true);
            setTimeout(() => setFilled((prev) => (prev += 2)), 50);
        }
    }, [filled, isProgressRunning]);

    useEffect(() => {
        if (filled === 100) {
            setTimeout(() => {
                setIsVisible(false);
                setFilled(0);
                setIsProgressRunning(false);
                setPrevAddress('');
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filled]);

    return (
        isVisible && (
            <div className="flex flex-col justify-center items-start gap-3 px-[18vw] pt-[15vh]">
                <div className="flex justify-center items-baseline gap-3">
                    <div className="px-4 py-3 rounded-[10px] border border-solid border-gray-500 shadown-text-field">
                        <p className="text-label-16px-regular text-gray-400">{address}</p>
                    </div>
                    <div>
                        <p className="text-label-14px-regular text-gray-400">{filled < 100 ? 'A few seconds ago' : 'funded'}</p>
                    </div>
                </div>
                <ProgressBar filled={filled} className="w-[375px]" />
            </div>
        )
    );
}
export default SuccessProgress;
