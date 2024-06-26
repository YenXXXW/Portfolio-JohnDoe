import PropTypes from 'prop-types';
import Reveal from './Reveal';

function About({ user }) {
    return (
        <div className="PageContainer" id="About">
            <Reveal>
                <h2>Who Am I</h2>
            </Reveal>

            <div className="flex flex-col-reverse sm:flex-row justify-around gap-4 pt-[10%] h-full ">
                <div className="sm:max-w-[60%] flex flex-col gap-5">
                    <Reveal>
                        <h2>I am {user.about.name}</h2>
                    </Reveal>

                    <Reveal>
                        <p className="text-xs md:text-sm">{user.about.description}</p>
                    </Reveal>

                    <Reveal>
                        <h3 className="mt-3 uppercase">{user.about.subTitle}</h3>
                    </Reveal>
                </div>
                <div className="relative  w-[150px] h-[200px] lg:w-[220px] lg:h-[300px] rounded-md border-2 border-blue-700">
                    <img
                        src={user.about.alternateAvatars[0].url}
                        className="absolute bottom-2 right-2 w-[150px] h-[200px] lg:w-[220px] lg:h-[300px] rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;

About.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the PropTypes as per your user object structure
};
