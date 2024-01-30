import { useState } from 'react';
import Countdown from 'react-countdown';

function CountDown() {
    const [targetDate] = useState(new Date(2024, 3, 6, 12, 0, 0)); // 6th April, 12:00AM IST // 1712341800000

    return (
        <div className="countdown-wrapper flex flex-col">
            <h1 className="text-white-100 text-label-24px-medium mb-8">Block Mining Starts in</h1>
            <Countdown
                date={targetDate}
                renderer={(props) => (
                    <div className="countdown-inner-box">
                        <div className="countdown-item">
                            <div className="header">
                                <span className="text-label-40px-semibold text-white-100 txt-value">{props.days}</span>
                            </div>
                            <div className="footer">
                                <span className="text-label-20px-medium text-black-100 txt-time">Days</span>
                            </div>
                        </div>
                        <span className="text-label-40px-semibold text-white-100 colon">:</span>
                        <div className="countdown-item">
                            <div className="header">
                                <span className="text-label-40px-semibold text-white-100 txt-value">{props.hours}</span>
                            </div>
                            <div className="footer">
                                <span className="text-label-20px-medium text-black-100 txt-time">Hours</span>
                            </div>
                        </div>
                        <span className="text-label-40px-semibold text-white-100 colon">:</span>
                        <div className="countdown-item">
                            <div className="header">
                                <span className="text-label-40px-semibold text-white-100 txt-value">{props.minutes}</span>
                            </div>
                            <div className="footer">
                                <span className="text-label-20px-medium text-black-100 txt-time">Minutes</span>
                            </div>
                        </div>
                        <span className="text-label-40px-semibold text-white-100 colon">:</span>
                        <div className="countdown-item">
                            <div className="header">
                                <span className="text-label-40px-semibold text-white-100 txt-value">{props.seconds}</span>
                            </div>
                            <div className="footer">
                                <span className="text-label-20px-medium text-black-100 txt-time">Seconds</span>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}

export default CountDown;
