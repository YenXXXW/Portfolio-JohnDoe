import PropTypes from 'prop-types';
import HeroImg from '../assets/hero.jpg';

function Hero({ user }) {
    return (
        <div className="flex flex-col w-full items-start relative bg-blend-normal PageContainer " id="Home">
            <div className="h-[50vh] md:flex-1 lg:max-w-[60%] flex flex-col justify-end md:justify-center z-10">
                <p className="font-semibold mb-3">Craft Interactive Experiences, One Line of Code at a Time</p>
                <h1 className="uppercase text-blue-800">{user.about.name}</h1>
                <h2 className="uppercase text-white">{user.about.title}</h2>
                <a href="#About">
                    <button className="border-[1px] border-blue-700 py-1 px-2 mt-3 text-sm ">About Me</button>
                </a>
            </div>
            <img src={HeroImg} className="w-[350px] h-[250px] lg:w-[700px] lg:h-[500px] absolute top-10 right-0" />
        </div>
    );
}

Hero.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the PropTypes as per your user object structure
};

export default Hero;
