function PartnerCard({ image, title, description, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="bg-white-100 p-6 flex items-center justify-center">
            <img src={`img/partners/${image}`} style={{ width: '250px' }} className="" />
            {/* <div className="text-black-100 text-label-20px-medium uppercase mb-6">{title}</div> */}
            {/* <div className="text-black-100 text-label-14px-regular">{description}</div> */}
        </a>
    );
}
export default PartnerCard;
