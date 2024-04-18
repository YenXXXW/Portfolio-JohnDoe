import { useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Skills({ skills }) {
    const horizontalLine = {
        hidden: {
            x: '-100%',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.75,
                type: 'none',
            },
        },
    };

    const ref = useRef(null);

    const isInView = useInView(ref);

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView]);

    return (
        <div className="PageContainer" id="Skills" ref={ref}>
            <h2 className="mb-3">Skills</h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-4">
                {skills.map((skill) => (
                    <li key={skill.name}>
                        <span className="flex bg-gray-900 w-[300px] h-[70px] pl-3 gap-3 items-center">
                            <img src={skill.image.url} className="w-[40px] h-[40px]" />
                            <div>
                                <h4 className="font-Nunito">{skill.name}</h4>
                                <div className=" mt-2 h-[2px] w-[200px] bg-white overflow-hidden">
                                    <motion.div
                                        variants={horizontalLine}
                                        initial="hidden"
                                        animate={controls}
                                        className={`bg-red-600 h-full w-[${skill.percentage}%]`}
                                    ></motion.div>
                                </div>
                            </div>
                        </span>
                    </li>
                ))}
            </ul>
            {/* {showMore ? <button onClick={() => setShowMore(false)}>showLess</button> : <button onClick={() => setShowMore(true)}>showMore</button>} */}
        </div>
    );
}

export default Skills;

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};
