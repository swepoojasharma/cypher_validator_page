function PhaseRow({ level, count, cost }) {
    return (
        <div className="grid grid-cols-3">
            <div className="text-black-100 text-label-16px-regular p-5 text-center border border-solid border-black-100">Phase {level}</div>
            <div className="text-black-100 text-label-16px-regular p-5 text-center border border-solid border-black-100">{count}</div>
            <div className="text-black-100 text-label-16px-regular p-5 text-center border border-solid border-black-100">{cost}</div>
        </div>
    );
}

export default PhaseRow;
