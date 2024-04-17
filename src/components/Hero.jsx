import PropTypes from 'prop-types';

function Hero({ user }) {
    return (
        <div className="flex flex-col w-full items-center relative bg-blend-normal PageContainer" id="Home">
            <div className="flex-1 lg:max-w-[60%] flex flex-col justify-center md:justify-end z-20">
                <p className="font-semibold mb-3">Craft Interactive Experiences, One Line of Code at a Time</p>
                <h1 className="uppercase text-blue-800">{user.about.name}</h1>
                <h2 className="uppercase">{user.about.title}</h2>
                <h3 className="mt-3 uppercase">{user.about.subTitle}</h3>
            </div>
        </div>
    );
}

Hero.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the PropTypes as per your user object structure
};

export default Hero;
