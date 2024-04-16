const NavLinks = ['Home', 'About', 'Skllls', 'Projects', 'Services', 'Timeline', 'Testimonial', 'Contact'];

function Header() {
    return (
        <div className="w-full absolute">
            <ul className="flex font-Nunito text-sm gap-7 justify-center">
                {NavLinks.map((link) => (
                    <li key={link}>{link}</li>
                ))}
            </ul>
        </div>
    );
}

export default Header;
