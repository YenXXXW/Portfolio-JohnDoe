import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';

function Timeline({ education, experience }) {
    const [timeline, setTimeline] = useState('education');

    return (
        <div className="md:px-[10%] pt-[10%] md:pt-[5%]" id="Timeline">
            <h2 className="mb-10">Timeline</h2>
            <ul className={`${timeline === 'experience' ? 'block' : 'hidden'} timeline timeline-vertical`}>
                {experience.map((exp, i) => (
                    <li key={i}>
                        <div className="flex timeline-end  bg-black">
                            <h4 className="text-blue-600 font-thin timeline-start">{exp.company_name}</h4>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start timeline-box bg-black">
                            <div className="  flex flex-col md:flex-row justify-between items-center">
                                <p>{exp.jobTitle}</p>

                                <div className="flex  flex-col md:flex-row gap-2 items-center">
                                    <div className="flex gap-2">
                                        <IoLocationSharp />
                                        <span className="text-xs">{exp.jobLocation}</span>
                                    </div>

                                    <span className="text-xs ml-2">
                                        {exp.startDate.slice(0, 10).replace(/-/g, '/')}-{exp.endDate.slice(0, 10).replace(/-/g, '/')}
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs mt-2">{exp.summary}</p>
                        </div>
                        <hr />
                        <hr />
                        <hr />
                    </li>
                ))}
            </ul>
            <ul className={`${timeline === 'education' ? 'block' : 'hidden'} timeline timeline-vertical`}>
                {education.map((edu, i) => (
                    <li key={i}>
                        <h4 className="text-blue-600 font-thin timeline-start">{edu.company_name}</h4>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box bg-black">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <p>{edu.jobTitle}</p>

                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                    <div className="flex gap-2">
                                        <IoLocationSharp />
                                        <span className="text-xs">{edu.jobLocation}</span>
                                    </div>

                                    <span className="text-xs ml-2">
                                        {edu.startDate.slice(0, 10).replace(/-/g, '/')}-{edu.endDate.slice(0, 10).replace(/-/g, '/')}
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs mt-2">{edu.summary}</p>
                        </div>
                        <hr />
                        <hr />
                        <hr />
                    </li>
                ))}
            </ul>
            <div className="flex w-full justify-center  mt-20 gap-4">
                <button
                    className={`w-[100px] py-1 ${timeline === 'education' ? 'bg-blue-700' : 'border-2 border-blue-700'}`}
                    onClick={() => setTimeline('education')}
                >
                    Education
                </button>
                <button
                    className={`w-[100px] py-1 ${timeline === 'experience' ? 'bg-blue-700' : 'border-2 border-blue-700'}`}
                    onClick={() => setTimeline('experience')}
                >
                    Experience
                </button>
            </div>
        </div>
    );
}

export default Timeline;

Timeline.propTypes = {
    education: PropTypes.arrayOf(PropTypes.object).isRequired,
    experience: PropTypes.arrayOf(PropTypes.object).isRequired,
};
