import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ServiceCard = ({ service }) => {
    return (
        <div tabIndex={0} className="collapse text-white">
            <div className="collapse-title text-xl font-medium">
                <span className="flex gap-3 items-center">
                    <span>{service.name}</span>
                    <MdOutlineKeyboardArrowDown />
                </span>
            </div>
            <div className="collapse-content relative flex gap-10 ">
                <div className="py-[5%] flex flex-col gap-5 basis-1/2">
                    <p className="text-sm">{service.desc}</p>
                    <h3>{service.charge}</h3>
                </div>
                <img src={service.image.url} className="w-[300px] h-[200px] object-cover" />
            </div>
        </div>
    );
};

function Services({ services }) {
    return (
        <div className="PageContainer" id="Services">
            <h2>Services</h2>
            {services.map((service, i) => (
                <div key={i} className="mb-2">
                    <ServiceCard service={service} />
                </div>
            ))}
        </div>
    );
}

export default Services;

Services.propTypes = {
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};
