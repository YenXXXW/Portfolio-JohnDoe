import PropTypes from 'prop-types';

function Hero({ user }) {
    console.log(user);
    return (
        <div className="w-full items-center flex h-screen lg:p-[10%] ">
            <div className="h-full max-w-[60%] flex flex-col justify-end">
                <p className="font-semibold mb-3">Craft Interactive Experiences, One Line of Code at a Time</p>
                <h1 className="uppercase text-blue-800">{user.about.name}</h1>
                <h2 className="uppercase">{user.about.title}</h2>
                <h3 className="mt-3 uppercase">{user.about.subTitle}</h3>
            </div>
            <img src={user.about.avatar.url} className="w-[280px] h-[250px] rounded-full " />
        </div>
    );
}

Hero.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the PropTypes as per your user object structure
};

export default Hero;
