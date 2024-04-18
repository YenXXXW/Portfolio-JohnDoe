import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ServiceCard = ({ service }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView]);
    return (
        <div tabIndex={0} className="collapse text-white">
            <div className="collapse-title text-xl font-medium">
                <p className="flex gap-3 items-center text-lg lg:text-2xl ">
                    <span>{service.name}</span>
                    <MdOutlineKeyboardArrowDown />
                </p>
            </div>
            <div className="collapse-content relative flex gap-10 ">
                <div className="py-[5%] flex flex-col gap-5 md:basis-1/2">
                    <p className="text-sm">{service.desc}</p>
                    <h3>{service.charge}</h3>
                </div>
                <motion.img
                    variants={{ hidden: { x: 0, y: 0 }, visible: { scaleX: 0.9, scaleY: 1.2 } }}
                    initial="hidden"
                    animate={mainControls}
                    src={service.image.url}
                    className="hidden md:block md:w-[300px] md:h-[200px] object-cover"
                />
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
