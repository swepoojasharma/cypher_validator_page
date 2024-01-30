import PartnerCard from './PartnerCard';

function PartnersSection() {
    return (
        <div className="bg-black-100 p-[60px] mx-64 mt-16 mb-28">
            <h3 className="text-white-100 text-label-20px-medium mb-8">Partners</h3>
            <div className="grid grid-cols-2 gap-4">
                <PartnerCard image="nodeops.png" title="NodeOps" description="" link="https://nodeops.xyz/" />
                <PartnerCard image="spheron.png" title="Spheron Network" description="" link="https://spheron.network/" />
            </div>
        </div>
    );
}

export default PartnersSection;
