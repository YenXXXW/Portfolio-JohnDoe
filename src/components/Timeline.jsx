import PropTypes from 'prop-types';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IoLocationOutline } from 'react-icons/io5';
import { useEffect, useRef } from 'react';

export default function Timeline({ education, experience }) {
    const expRef = useRef(null);
    const eduRef = useRef(null);
    const isEduInView = useInView(eduRef);
    const isExpInView = useInView(expRef);
    const eduControls = useAnimation();
    const expControls = useAnimation();

    useEffect(() => {
        if (isEduInView) {
            eduControls.start('visible');
        }
        if (isExpInView) {
            expControls.start('visible');
        }
    }, [isEduInView, isExpInView]);

    const jobTitleVariant = {
        hidden: {
            left: 0,
        },
        visible: { left: '100%' },
    };

    const verticalLine = {
        hidden: {
            y: '-100%',
        },
        visible: { y: 0 },
    };

    return (
        <div className="PageContainer" id="Timeline">
            <h2 className="mb-10">Timeline</h2>
            <div className="flex flex-col md:flex-row gap-5 ">
                <div>
                    <h4 className="font-Montserrat mb-3" ref={eduRef}>
                        Education
                    </h4>
                    <div className="relative flex flex-col gap-5  ml-[10%] overflow-hidden">
                        <motion.div
                            variants={verticalLine}
                            initial="hidden"
                            animate={eduControls}
                            transition={{ delay: 0.4, duration: 1.2 }}
                            className="top-0 left-0 w-[1px] absolute bg-red-600 h-full"
                        />
                        {education.map((edu, i) => (
                            <div key={i} className=" pl-[2%] flex flex-col gap-1 relative ">
                                <div className="flex text-[15px] items-center">
                                    <div
                                        className="relative overflow-hidden
                                    font-bold p-1  text-red-500 "
                                    >
                                        {edu.jobTitle}
                                        <motion.div
                                            variants={jobTitleVariant}
                                            initial="hidden"
                                            animate={eduControls}
                                            transition={{
                                                duration: 1.2,
                                                delay: (i + 1) * 0.4,
                                            }}
                                            className="absolute bg-black top-0 left-0 w-full h-full"
                                        />
                                    </div>
                                    <span className=" px-3 border-2 pt-1 border-gray-900 font-semibold rounded-sm font-Josefin">
                                        {edu.company_name}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationOutline size={20} className="text-blue-700" />
                                    <p className="text-xs md:text-sm">{edu.jobLocation}</p>
                                </div>
                                <p className="text-xs md:text-sm pl-2">{edu.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-Montserrat mb-3" ref={expRef}>
                        Experience
                    </h4>
                    <div className="relative flex flex-col gap-5  ml-[10%] overflow-hidden">
                        <motion.div
                            variants={verticalLine}
                            initial="hidden"
                            animate={expControls}
                            transition={{ delay: 0.4, duration: 1.2 }}
                            className="top-0 left-0 w-[1px] absolute bg-red-600 h-full"
                        />
                        {experience.map((exp, i) => (
                            <div key={i} className=" pl-[2%] flex flex-col gap-1 relative ">
                                <div className="flex text-[15px] items-center">
                                    <div className="relative overflow-hidden font-bold p-1 text-red-500">
                                        {exp.jobTitle}
                                        <motion.div
                                            variants={jobTitleVariant}
                                            initial="hidden"
                                            animate={eduControls}
                                            transition={{
                                                duration: 1.2,
                                                delay: (i + 1) * 0.4,
                                            }}
                                            className="absolute bg-black top-0 left-0 w-full h-full"
                                        />
                                    </div>

                                    <span className=" px-3 border-2 pt-1 border-gray-900 font-semibold rounded-sm font-Josefin">
                                        {exp.company_name}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationOutline size={20} className="text-blue-700" />
                                    <p className="md:text-sm">{exp.jobLocation}</p>
                                </div>
                                <p className="text-xs md:text-sm pl-2">{exp.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Timeline.propTypes = {
    education: PropTypes.arrayOf(PropTypes.object).isRequired,
    experience: PropTypes.arrayOf(PropTypes.object).isRequired,
};
