import PropTypes from 'prop-types';

function Skills({ skills }) {
    return (
        <div className="PageContainer" id="Skills">
            <h2 className="mb-3">Skills</h2>
            <ul className="flex flex-wrap w-full gap-4">
                {skills.map((skill) => (
                    <li key={skill.name}>
                        <span className="flex bg-gray-900 w-[300px] h-[70px] pl-3 gap-3 items-center">
                            <img src={skill.image.url} className="w-[40px] h-[40px]" />
                            <div>
                                <h4 className="font-Nunito">{skill.name}</h4>
                                <div className=" mt-2 h-[2px] w-[200px] bg-white">
                                    <div className={`bg-blue-700 h-full w-[${skill.percentage}%]`}></div>
                                </div>
                            </div>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};
