import { useEffect, useState } from 'react';
import CalculatorCard from './CalculatorCard';
import {
    BLOCK_REWARD_PER_MONTH_PER_VALIDATOR,
    CYP_BONUS_PER_MONTH_PER_VALIDATOR,
    CYP_USD_PRICE,
    facilitatorList,
    facilitatorUsdCost,
    phaseConfig,
} from '../../../utils/constants';
import EthAmountIcon from '../../../assets/svg-components/EthAmountIcon';
import NumberIcon from '../../../assets/svg-components/NumberIcon';
import Button from '../../ui/Button';
import { getSlot } from '../../../web3-module/library/validator.ethers';
import { getPhaseBySlot } from '../../../utils/helpers';

function CalculateRewardsSection({ runValidatorRef }) {
    const userPhasesArray = Object.keys(phaseConfig).map((x) => {
        return { label: `Phase ${x}`, value: x };
    });
    const [userPhase, setUserPhase] = useState(userPhasesArray[0]);
    const [ethAmount, setEthAmount] = useState(0);
    const [nodesCount, setNodesCount] = useState(1);
    const [facilitator, setFacilitator] = useState('');
    const [amount, setAmount] = useState(0);
    const [cypReward, setCypReward] = useState(0);
    const [usdReward, setUsdReward] = useState(0);

    useEffect(() => {
        async function calculatePhase() {
            const currentSlot = await getSlot();
            const currentPhase = getPhaseBySlot(currentSlot);
            setUserPhase(userPhasesArray.find((x) => Number(x.value) === currentPhase));
        }
        calculatePhase();
    }, [userPhasesArray]);

    useEffect(() => {
        const amount = phaseConfig[userPhase.value].cost;
        setEthAmount(amount);
    }, [userPhase]);

    useEffect(() => {
        if (facilitator) {
            const finalCostPerValidator = facilitatorUsdCost[facilitator.value];
            const finalAmount = Number(finalCostPerValidator) * Number(nodesCount);
            setAmount(finalAmount);
        } else {
            setAmount(0);
        }
    }, [facilitator, nodesCount]);

    useEffect(() => {
        const rewardPerMonthPerValidator = CYP_BONUS_PER_MONTH_PER_VALIDATOR + BLOCK_REWARD_PER_MONTH_PER_VALIDATOR;
        const finalReward = Number(rewardPerMonthPerValidator) * Number(nodesCount);
        setCypReward(finalReward);
    }, [nodesCount]);

    useEffect(() => {
        // For 5 months
        const totalCypReward = cypReward * 5;
        const totalUsdReward = totalCypReward * CYP_USD_PRICE;
        setUsdReward(totalUsdReward);
    }, [cypReward]);

    return (
        <div className="mx-56 my-16">
            <h1 className="text-black-100 text-label-40px-semibold mb-8 text-center uppercase">Calculate Your Rewards</h1>
            <div className="flex flex-col gap-20">
                <div>
                    <div className="grid grid-cols-3 gap-12">
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
                    <div className="grid grid-cols-3 gap-12">
                        <CalculatorCard
                            title="Facilitators Choice"
                            controlType="selectbox"
                            options={facilitatorList}
                            selected={facilitator}
                            setSelected={setFacilitator}
                        />
                        <CalculatorCard
                            title="Cost per Validator per Month(USD) (Approx.)"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={amount}
                            disabled={true}
                        />
                        <div className="flex flex-col gap-12">
                            <CalculatorCard
                                title="Reward in CYP per Month"
                                leftImage={<EthAmountIcon />}
                                controlType="textbox"
                                controlValue={cypReward}
                                disabled={true}
                            />
                            <CalculatorCard
                                title="Total Rewards in USD (Apr - Sept)"
                                leftImage={<EthAmountIcon />}
                                controlType="textbox"
                                controlValue={usdReward}
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="grid grid-cols-2 gap-20">
                        <CalculatorCard
                            title="Reward in CYP per Month"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={cypReward}
                            disabled={true}
                        />
                        <CalculatorCard
                            title="Total Rewards in USD (Apr - Sept)"
                            leftImage={<EthAmountIcon />}
                            controlType="textbox"
                            controlValue={usdReward}
                            disabled={true}
                        />
                    </div>
                </div> */}
                <div className="flex justify-center">
                    <Button
                        type="button"
                        className="text-white-100 font-interMedium text-label-14px-regular py-3 !px-[48px] min-w-[183px] whitespace-nowrap disabled:opacity-60 !h-[40px]"
                        onClick={() => {
                            runValidatorRef.current.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Buy your Validator Node Today
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CalculateRewardsSection;
