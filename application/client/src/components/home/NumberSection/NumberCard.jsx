function NumberCard({ title, value }) {
    return (
        <div className="bg-white-100 p-6">
            <div className="text-black-100 text-label-14px-regular uppercase mb-6">{title}</div>
            <div className="text-black-100 text-label-20px-medium">{value}</div>
        </div>
    );
}
export default NumberCard;
