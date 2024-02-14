import { useEffect, useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { facilitatorList, phaseConfig } from '../../../utils/constants';
import EthAmountIcon from '../../../assets/svg-components/EthAmountIcon';
import NumberIcon from '../../../assets/svg-components/NumberIcon';

function CalculateRewardsSection() {
    const userPhasesArray = Object.keys(phaseConfig).map((x) => {
        return { label: `Phase ${x}`, value: x };
    });
    const [userPhase, setUserPhase] = useState(userPhasesArray[0]);
    const [ethAmount, setEthAmount] = useState(0);
    const [nodesCount, setNodesCount] = useState(0);
    const [facilitator, setFacilitator] = useState('');
    const [amount, setAmount] = useState(0);
    const [cypReward, setCypReward] = useState(0);
    const [usdReward, setUsdReward] = useState(0);

    useEffect(() => {
        const amount = phaseConfig[userPhase.value].cost;
        setEthAmount(amount);
    }, [userPhase]);

    useEffect(() => {
        console.log({ ethAmount }, { nodesCount });
        const finalAmount = ethAmount * nodesCount;
        setAmount(finalAmount);
    }, [ethAmount, nodesCount]);

    return (
        <div className="mx-64 my-16">
            <h1 className="text-black-100 text-label-40px-semibold mb-8 text-center uppercase">Calculate Your Rewards</h1>
            <div className="flex flex-col gap-20">
                <div>
                    <div className="grid grid-cols-2 gap-20">
                        <CalculatorCard
                            title="User Phase"
                            controlType="selectbox"
                            options={userPhasesArray}
                            selected={userPhase}
                            setSelected={setUserPhase}
                        />
                        <CalculatorCard
                            title="ETH Amount"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={ethAmount}
                            disabled={true}
                        />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-20">
                        <CalculatorCard title="Select Nodes" />
                        <CalculatorCard
                            title="Enter number of Nodes"
                            leftImage={<NumberIcon />}
                            controlType="textbox"
                            controlValue={nodesCount}
                            controlOnChange={(e) => {
                                setNodesCount(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-20">
                        <CalculatorCard
                            title="Facilitators Choice"
                            controlType="selectbox"
                            options={facilitatorList}
                            selected={facilitator}
                            setSelected={setFacilitator}
                        />
                        <CalculatorCard title="Amount" leftImage={<EthAmountIcon />} controlType="textbox" controlValue={amount} disabled={true} />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-20">
                        <CalculatorCard
                            title="Reward in CYP"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={cypReward}
                            disabled={true}
                        />
                        <CalculatorCard
                            title="Reward in USD"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={usdReward}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculateRewardsSection;
