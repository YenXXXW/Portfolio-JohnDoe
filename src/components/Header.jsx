import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

function Header({ user }) {
    const NavLinks = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Timeline', 'Testimonial', 'Contact'];

    console.log(user);

    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <nav className="w-full fixed pt-2 z-20">
            <div className="hidden md:flex font-Nunito text-sm justify-between">
                <h4 className="font-Tilt uppercase">{user.about.name}</h4>

                <ul className="flex gap-7 justify-center">
                    {NavLinks.map((link) => (
                        <a href={`#${link}`} key={link}>
                            <li className="cursor-pointer">{link}</li>
                        </a>
                    ))}
                </ul>
            </div>

            {/* Menu with links for small screens */}
            <div className="z-30 h-screen pl-5 w-[200px] md:hidden">
                <div className="flex gap-3">
                    <IoIosMenu size={25} onClick={() => setShowSidebar(!showSidebar)} />
                    <h4 className="font-Tilt uppercase">{user.about.name}</h4>
                </div>

                <div
                    className={
                        showSidebar
                            ? 'fixed left-0 top-0 w-[200px] h-screen bg-black  ease-in duration-500 z-30'
                            : 'fixed left-[-100%] top-0 ease-in duration-500  bg-black z-30'
                    }
                >
                    <ul className={`font-Nunito text-sm gap-3 w-[75%] flex flex-col items-end-end`}>
                        <div className="flex gap-3 mt-3 ml-4">
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
