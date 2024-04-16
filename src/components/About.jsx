import PropTypes from 'prop-types';
import Skills from './Skills';

function About({ user }) {
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    return (
        <div className="lg:px-[10%] lg:py-[5%] h-screen w-full">
            <h2>Who Am I</h2>
            <div className="flex justify-around md:pt-[10%] h-full ">
                <div className="max-w-[60%] flex flex-col gap-5">
                    <h2>I am {user.about.name}</h2>
                    <p className="text-sm">{user.about.description}</p>
                    <Skills skills={sortedFilteredSkills} />
                </div>
                <img src={user.about.alternateAvatars[0].url} className="w-[220px] h-[300px] rounded-md" />
            </div>
        </div>
    );
}

About.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the PropTypes as per your user object structure
};

export default About;
