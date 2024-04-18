import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

function Header({ user }) {
    const NavLinks = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Timeline', 'Testimonial', 'Contact'];

    const [showSidebar, setShowSidebar] = useState(false);
    const [background, setBackground] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setBackground(true);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    return (
        <nav className="w-full fixed z-20">
            <div className={`px-10 hidden lg:flex font-Nunito text-sm justify-between items-center ${background && 'bg-black'}`}>
                <h4 className="font-Tilt uppercase">{user.about.name}</h4>

                <ul className="flex gap-7 justify-center">
                    {NavLinks.map((link) => (
                        <a href={`#${link}`} key={link}>
                            <li className="cursor-pointer">{link}</li>
                        </a>
                    ))}
                </ul>
                <button className="border-[1px] border-blue-700 py-1 px-2 text-sm ">About Me</button>
            </div>

            {/* Menu with links for small screens */}
            <div className=" pl-5 w-full lg:hidden">
                <div className={`flex gap-3 items-center  ${background && 'bg-black'}`}>
                    <IoIosMenu size={25} onClick={() => setShowSidebar(!showSidebar)} />
                    <h4 className="font-Tilt uppercase">{user.about.name}</h4>
                </div>

                <div
                    className={
                        showSidebar
                            ? 'fixed left-0 top-0 w-[200px] h-screen bg-black  ease-in duration-500 z-30'
                            : 'fixed left-[-100%] top-0 ease-in duration-500  bg-black'
                    }
                >
                    <ul className={`font-Nunito gap-3 w-[75%] flex flex-col items-end-end`}>
                        <div className="flex gap-3 mt-3 ml-4 items-center">
                            <AiOutlineClose onClick={() => setShowSidebar(false)} size={20} />
                            <h4 className="font-Tilt uppercase">{user.about.name}</h4>
                        </div>

                        {NavLinks.map((link) => (
                            <a href={`#${link}`} key={link}>
                                <li className="cursor-pointer pl-4 hover:bg-blue-700 rounded-sm">{link}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

Header.propTypes = {
    user: PropTypes.object.isRequired,
};
