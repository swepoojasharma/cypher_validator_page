import CheckmarkIcon from '../../../assets/svg-components/CheckmarkIcon';

function FeatureCard(props) {
    const { bgColor, image, title, description, btnLink } = props;

    return (
        <div
            className="p-8 border border-solid border-black-100 shadow-feature-card flex flex-col justify-between items-start gap-12"
            style={{ backgroundColor: `${bgColor}` }}
        >
            <div>
                {image}
                <div className="text-black-100 text-label-20px-medium uppercase">{title}</div>
            </div>
            <div className="flex">
                <CheckmarkIcon className="mr-4" width="120px" />
                <div className="text-black-100 text-label-14px-regular">{description}</div>
            </div>
            <a
                href={btnLink}
                target="_blank"
                rel="noreferrer"
                className="bg-black-100 text-white-100 text-label-12px-regular uppercase py-2 px-6 border border-solid border-black-100 hover:bg-white-100 hover:text-black-100"
            >
                Get Started
            </a>
        </div>
    );
}
export default FeatureCard;
