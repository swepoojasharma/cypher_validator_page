import TokenomicsIcon from '../../../assets/svg-components/TokenomicsIcon';

function TokenomicsSection() {
    return (
        <>
            <TokenomicsIcon className="w-full h-auto" />
            <div className="bg-black-100 p-8">
                <div className="grid grid-cols-[1fr_1.5fr] gap-8">
                    <div className="flex flex-col justify-center">
                        <div className="h-full">
                            <div className="bg-launch-price bg-no-repeat bg-[length:100%_100%] text-center">
                                <h2 className="text-white-100 text-label-24px-semibold pb-[12px] pt-[20px]">Launch Price</h2>
                            </div>
                            <div className="text-center my-5">
                                <div className="text-white-100 text-label-18px-regular mb-3">
                                    ICO Price: <span className="">$1</span>
                                </div>
                                <div className="text-white-100 text-label-18px-regular">
                                    Listing Price: <span className="">$5</span>
                                </div>
                            </div>
                            <div className="bg-launch-price bg-no-repeat bg-[length:100%_100%] text-center">
                                <h2 className="text-white-100 text-label-24px-semibold pb-[12px] pt-[20px]">ROI</h2>
                            </div>
                            <div className="text-center mt-5">
                                <div className="text-white-100 text-label-18px-regular">
                                    Return Of Investment: <span className="">660%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-run-validator bg-no-repeat bg-[length:100%_100%] h-full px-20 w-[80%]">
                            <h2 className="text-white-100 text-label-24px-semibold pb-[12px] pt-12 mb-8">Testnet Validator Rewards</h2>
                            <ul className="list-disc pl-4">
                                <li className="text-white-100 text-label-16px-regular mb-3">
                                    Testnet $CYP Coin Rewards would be swapped 1:1 with Mainnet $CYP coins on Mainnet release
                                </li>
                                <li className="text-white-100 text-label-16px-regular">
                                    $10,000 worth of $CYP coins on Mainnet launch per validator
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TokenomicsSection;
