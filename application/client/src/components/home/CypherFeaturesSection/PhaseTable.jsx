import { useEffect, useState } from 'react';
import { PHASE_CURRENCY, phaseConfig } from '../../../utils/constants';
import PhaseRow from './PhaseRow';
import { fetchUSDTPrice } from '../../../redux/action/action';

function PhaseTable() {
    const [ethUsdPrice, setEthUsdPrice] = useState(0);

    const getUsdPrice = async () => {
        const price = await fetchUSDTPrice();
        setEthUsdPrice(price);
    };

    useEffect(() => {
        getUsdPrice();
        const interval = setInterval(
            async () => {
                await getUsdPrice();
            },
            import.meta.env.REACT_APP_USDT_PRICE_REFRESH_SECONDS * 1000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="m-8 shadow-feature-card">
            <div className="grid grid-cols-6">
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Phase Level
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    ETH Fee
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    USD Fee
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Raise
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Total Nodes Sold
                </div>
                <div className="bg-purple-400 text-black-100 text-label-16px-semibold p-3 text-center border border-solid border-black-100">
                    Recovery Time (Months)
                </div>
            </div>
            {Object.keys(phaseConfig).map((x) => (
                <PhaseRow
                    key={x}
                    level={x}
                    cost={`${phaseConfig[x].cost} ${PHASE_CURRENCY}`}
                    usdPrice={ethUsdPrice}
                    usdCost={(phaseConfig[x].cost * ethUsdPrice).toFixed(2)}
                    raise={(phaseConfig[x].cost * ethUsdPrice * 200).toFixed(2)}
                    totalSold={200 * x}
                />
            ))}
        </div>
    );
}

export default PhaseTable;
