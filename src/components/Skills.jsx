import PropTypes from 'prop-types';

function Skills({ skills }) {
    const selectedSkills = skills.slice(0, 13);

    return (
        <div className="w-full">
            <h3 className="mb-3">Skills</h3>
            <ul className="flex w-[400px]">
                {selectedSkills.map((skill) => (
                    <li key={skill.name}>
                        <span className="flex flex-col">
                            <img src={skill.image.url} className="w-[50px] h-[40px]" />
                            <span className="font-Nunito">{skill.name}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skills;
