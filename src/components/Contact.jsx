import PropTypes from 'prop-types';
import { CiMail, CiPhone } from 'react-icons/ci';

function Contact({ user, socialMedia }) {
    return (
        <div className="md:flex md:flex-col PageContainer" id="Contact">
            <h2 className="uppercase">Contact</h2>
            <div className="md:flex md:flex-1 my-auto gap-10 items-center ">
                <div className="md:basis-1/2 pl-[10%] flex flex-col gap-5">
                    <h3>Let&apos;s talk</h3>
                    <h2 className="text-blue-700">{user.about.name}</h2>
                    <div>
                        <div className="flex gap-2 items-center">
                            <CiPhone className="text-blue-600" size={24} /> <span className="text-sm">{user.about.phoneNumber}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <CiMail className="text-blue-600" size={24} /> <span className="text-sm">{user.about.contactEmail}</span>
                        </div>
                    </div>

                    <h4 className="inline">Social Media</h4>
                    <div className="flex gap-5 w-full">
                        {socialMedia.map((platform, i) => (
                            <a key={i} href={platform.url} target="_blank" rel="noreferrer">
                                <img src={platform.image.url} className="w-8" />
                            </a>
                        ))}
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col  md:basis-1/2 gap-5 font-Josefin">
                    <input type={'text'} required placeholder="Name" />
                    <input type={'email'} required placeholder="Email" />
                    <textarea required rows={6} placeholder="Message" />
                    <button className="bg-blue-700 w-[100px] text-sm py-1">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

Contact.propTypes = {
    user: PropTypes.object.isRequired,
    socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
};
