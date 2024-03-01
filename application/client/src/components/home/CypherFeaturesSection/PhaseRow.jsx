function PhaseRow({ level, cost, usdCost, raise, totalSold, recovery }) {
    return (
        <div className="grid grid-cols-6">
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">Phase {level}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{cost}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{usdCost}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{raise}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{totalSold}</div>
            <div className="text-black-100 text-label-14px-regular p-3 text-center border border-solid border-black-100">{recovery}</div>
        </div>
    );
}

export default PhaseRow;
