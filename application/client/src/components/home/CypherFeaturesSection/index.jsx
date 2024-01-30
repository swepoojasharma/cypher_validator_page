import DaoIcon from '../../../assets/svg-components/DaoIcon';
import RedemptionIcon from '../../../assets/svg-components/RedemptionIcon';
import TestnetIcon from '../../../assets/svg-components/TestnetIcon';
import CypherProgramCard from './CypherProgramCard';
import FeatureCard from './FeatureCard';
import PhaseTable from './PhaseTable';

function CypherFeaturesSection() {
    return (
        <div className="relative">
            <div className="mx-64 mb-16">
                <h1 className="text-black-100 text-label-40px-semibold mb-8 text-center uppercase">Cypher Blockchain</h1>
                <div className="grid grid-cols-3 gap-[60px] relative z-[1]">
                    <FeatureCard
                        bgColor="#EDFFE0"
                        image={<TestnetIcon height="150px" />}
                        title="Testnet Details"
                        description="To kickstart the program, all validators will be credited with 2000 TestNet CYPHER.It's important to note that these TestNet tokens are non-redeemable and cannot be converted into real-world currency."
                        btnLink="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/cypher-blockchain-validator-program"
                    />
                    <FeatureCard
                        bgColor="#FEFFE5"
                        image={<RedemptionIcon height="150px" />}
                        title="Redemption and Mainnet"
                        description="All rewards accumulated during the TestNet phase will be redeemable into MainNet CYPHER at a 1:1 ratio starting from September 06th, 2024. These MainNet tokens will be 100% unlocked, allowing validators to cash out their rewards."
                        btnLink="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/cypher-blockchain-validator-program"
                    />
                    <FeatureCard
                        bgColor="#E5F4FF"
                        image={<DaoIcon height="150px" />}
                        title="Dao Participation"
                        description="Cypher Blockchain is establishing a Decentralised Autonomous Organisation (DAO). All validators will be automatically enrolled as members of this DAO. The DAO will play a crucial role in decision-making processes, including project grants and fund allocations."
                        btnLink="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/cypher-blockchain-validator-program"
                    />
                </div>
            </div>
            <div className="bg-cypher-features bg-no-repeat bg-contain absolute w-full h-[80%] top-[30%]"></div>
            <div className="relative z-[1]">
                <div className="bg-black-100 p-[60px] mx-64 mt-16">
                    <div className="grid grid-cols-2 gap-4">
                        <CypherProgramCard
                            title="Cypher Grant Program"
                            value="As part of our commitment to community involvement, validators will have the opportunity to participate in the Cypher Grant Program. This program allocates 4% of the Total Supply to the Cypher Foundation. Validators, along with the Foundation, will collectively decide on project grants through DAO voting."
                        />
                        <CypherProgramCard
                            title="Distribution & ROI"
                            value="The Cypher Foundation and Node Validators will share the 4% allocation in a 30%-70% ratio. This ensures that a significant portion (70%) is earmarked for validators, serving as a strong incentive for their continued participation and contribution to the network."
                        />
                    </div>
                </div>
                <div className="mx-64 bg-white-100 flex flex-col items-center mb-28">
                    <PhaseTable />
                    <h1 className="text-black-100 text-label-40px-regular mb-12">Get started today</h1>
                </div>
            </div>
        </div>
    );
}

export default CypherFeaturesSection;
