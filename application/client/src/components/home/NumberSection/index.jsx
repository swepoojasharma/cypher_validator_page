import { BLOCK_REWARD_CYP, BLOCK_SIZE_MB, BLOCK_TIME_SECONDS } from '../../../utils/constants';
import NumberCard from './NumberCard';

function NumberSection() {
    return (
        <div className="bg-black-100 p-[60px] mx-64 mt-16 mb-28">
            <h3 className="text-white-100 text-label-20px-medium mb-8">Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
                <NumberCard title="Block Timing" value={`${BLOCK_TIME_SECONDS} SEC`} />
                <NumberCard title="Block Reward" value={`${BLOCK_REWARD_CYP} CYP`} />
                <NumberCard title="Consensus" value="PoE (Proof of Engagement)" />
                <NumberCard title="Block Size" value={`${BLOCK_SIZE_MB} MB`} />
            </div>
        </div>
    );
}

export default NumberSection;
