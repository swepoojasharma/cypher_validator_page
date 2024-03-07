import { useEffect, useState } from 'react';
import { AVG_BLOCK_PER_VALIDATOR_PER_MONTH, BLOCK_REWARD_CYP } from '../../../utils/constants';

function PhaseRow({ level, cost, usdCost, raise, totalSold }) {
    const [recoveryTime, setRecoveryTime] = useState(0);
    const rewardPerMonth = AVG_BLOCK_PER_VALIDATOR_PER_MONTH * BLOCK_REWARD_CYP;
    const roiMonthly = rewardPerMonth - 35;

    useEffect(() => {
        const recovery = (usdCost / roiMonthly).toFixed(2);
        setRecoveryTime(recovery);
    }, [roiMonthly, usdCost]);

    return (
        <div className="grid grid-cols-6">
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">Phase {level}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{cost}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{`$${usdCost}`}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{`$${raise}`}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{totalSold}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{recoveryTime}</div>
        </div>
    );
}

export default PhaseRow;
