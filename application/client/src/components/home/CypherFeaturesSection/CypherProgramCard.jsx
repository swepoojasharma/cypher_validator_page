function CypherProgramCard({ title, value }) {
    return (
        <div className="bg-white-100 p-6">
            <div className="text-black-100 text-label-20px-semibold uppercase mb-6">{title}</div>
            <div className="text-black-100 text-label-16px-regular">{value}</div>
        </div>
    );
}
export default CypherProgramCard;
