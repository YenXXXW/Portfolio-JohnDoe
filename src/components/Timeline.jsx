import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';

function Timeline({ education, experience }) {
    return (
        <div className="PageContainer" id="Timeline">
            <h2 className="mb-10">Timeline</h2>
            <div className="flex flex-col md:flex-row gap-5 ">
                <div>
                    <h4 className="font-Montserrat mb-3">Education</h4>
                    <div className="flex flex-col gap-5 border-l-[1px] border-blue-700 ml-[10%]">
                        {education.map((edu, i) => (
                            <div key={i} className=" pl-[2%] flex flex-col gap-1 relative ">
                                <div className="flex text-[15px] items-center">
                                    <p className="font-bold p-1">{edu.jobTitle}</p>
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
                    <h4 className="font-Montserrat mb-3">Experience</h4>
                    <div className="flex flex-col gap-5 border-l-[1px] border-blue-700 ml-[10%]">
                        {experience.map((exp, i) => (
                            <div key={i} className=" pl-[2%] flex flex-col gap-1 relative ">
                                <div className="flex text-[15px] items-center">
                                    <p className="font-bold p-1">{exp.jobTitle}</p>
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

export default Timeline;

Timeline.propTypes = {
    education: PropTypes.arrayOf(PropTypes.object).isRequired,
    experience: PropTypes.arrayOf(PropTypes.object).isRequired,
};
