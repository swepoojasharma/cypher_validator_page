import { PHASE_CURRENCY, phaseConfig } from '../../../utils/constants';
import PhaseRow from './PhaseRow';

function PhaseTable() {
    return (
        <div className="m-16 shadow-feature-card">
            <div className="grid grid-cols-3">
                <div className="bg-purple-400 text-black-100 text-label-18px-semibold p-5 text-center border border-solid border-black-100">
                    Phase Level
                </div>
                <div className="bg-purple-400 text-black-100 text-label-18px-semibold p-5 text-center border border-solid border-black-100">
                    Validator Counts
                </div>
                <div className="bg-purple-400 text-black-100 text-label-18px-semibold p-5 text-center border border-solid border-black-100">
                    Validator Cost
                </div>
            </div>
            {Object.keys(phaseConfig).map((x, index, { length }) => (
                <PhaseRow
                    key={x}
                    level={x}
                    count={phaseConfig[x].count}
                    cost={`${phaseConfig[x].cost} ${index === length - 1 ? 'Cypher Coins (Mainnet)' : PHASE_CURRENCY}`}
                />
            ))}
        </div>
    );
}

export default PhaseTable;
