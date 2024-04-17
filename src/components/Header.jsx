const NavLinks = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Timeline', 'Testimonial', 'Contact'];

function Header() {
    return (
        <div className="w-full fixed pt-2 z-20">
            <ul className="flex font-Nunito text-sm gap-7 justify-center">
                {NavLinks.map((link) => (
                    <a href={`#${link}`} key={link}>
                        <li className="cursor-pointer">{link}</li>
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default Header;
