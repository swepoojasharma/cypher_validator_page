import BlockTimeIcon from '../../assets/svg-components/BlockTimeIcon';
import MaxValidatorsIcon from '../../assets/svg-components/MaxValidatorsIcon';
import CalculateRewardsSection from '../../components/home/CalculateRewardsSection';
import CypherFeaturesSection from '../../components/home/CypherFeaturesSection';
import HeroSection from '../../components/home/HeroSection';
import NumberSection from '../../components/home/NumberSection';
import PartnersSection from '../../components/home/PartnersSection';
import TokenomicsSection from '../../components/home/TokenomicsSection';
import { BLOCK_REWARD_CYP, MAX_VALIDATORS } from '../../utils/constants';

function HomePage() {
    return (
        <div>
            <HeroSection />
            <div className="bg-home-gradient pb-24">
                <div className="">
                    <div className="flex justify-center mx-96 gap-24 pt-24">
                        <div className="basis-1/2 text-center">
                            <MaxValidatorsIcon className="text-center mx-auto" />
                            <h5 className="text-black-100 text-label-16px-medium mb-2 mt-6">Maximum Validators</h5>
                            <p className="text-black-100 text-label-14px-regular">
                                The Cypher Blockchain Validator Program will accommodate a maximum of {MAX_VALIDATORS} validators.
                            </p>
                        </div>
                        <div className="basis-1/2 text-center">
                            <BlockTimeIcon className="text-center mx-auto" />
                            <h5 className="text-black-100 text-label-16px-medium mb-2 mt-6">Block Time</h5>
                            <p className="text-black-100 text-label-14px-regular">
                                The block time for Cypher Blockchain is set at 12 seconds, ensuring efficient processing and validation. Validators
                                will receive {BLOCK_REWARD_CYP} CYPHER as a reward for each successfully mined block.
                            </p>
                        </div>
                    </div>
                </div>
                <NumberSection />
                <PartnersSection />
                <CypherFeaturesSection />
                <TokenomicsSection />
                <CalculateRewardsSection />
            </div>
        </div>
    );
}

export default HomePage;
