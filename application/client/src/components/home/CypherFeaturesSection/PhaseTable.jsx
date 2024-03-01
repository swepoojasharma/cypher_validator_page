import { PHASE_CURRENCY, phaseConfig } from '../../../utils/constants';
import PhaseRow from './PhaseRow';

function PhaseTable() {
    return (
        <div className="m-8 shadow-feature-card">
            <div className="grid grid-cols-6">
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Phase Level
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">Fee</div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">USD</div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Raise
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Total Sold
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Recovery Time
                </div>
            </div>
            {Object.keys(phaseConfig).map((x) => (
                <PhaseRow
                    key={x}
                    level={x}
                    cost={`${phaseConfig[x].cost} ${PHASE_CURRENCY}`}
                    usdCost={`$${phaseConfig[x].usdCost}`}
                    raise={`$${phaseConfig[x].raise}`}
                    totalSold={`${phaseConfig[x].totalSold}`}
                    recovery={phaseConfig[x].recovery}
                />
            ))}
        </div>
    );
}

export default PhaseTable;
