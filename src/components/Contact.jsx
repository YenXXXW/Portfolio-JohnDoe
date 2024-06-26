import PropTypes from 'prop-types';
import { CiMail, CiPhone } from 'react-icons/ci';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Contact({ user, socialMedia }) {
    const variant = {
        visible: {
            left: '100%',
            top: '100%',
        },
    };

    const ref = useRef(null);

    const isInView = useInView(ref);

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView]);
    return (
        <div className="md:flex md:flex-col PageContainer" id="Contact">
            <h2 className="uppercase">Contact</h2>
            <div className="flex md:flex-1 flex-col md:flex-row my-auto gap-10 md:items-center">
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
                <form ref={ref} onSubmit={(e) => e.preventDefault()} className="flex flex-col  w-full md:basis-1/2 gap-5 font-Josefin pb-3">
                    <div className="relative overflow-hidden">
                        <motion.div
                            variants={variant}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1, type: 'none' }}
                            className="z-20 absolute top-[-200px] left-[-50px] w-full h-[600px] transform rotate-45 bg-black"
                        />

                        <input type={'text'} required placeholder="Name" />
                    </div>

                    <div className="relative overflow-hidden">
                        <motion.div
                            variants={variant}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.5, duration: 1, type: 'none' }}
                            className="z-20 absolute top-[-200px] left-[-50px] w-full h-[600px] transform rotate-45 bg-black"
                        />

                        <input type={'email'} required placeholder="Email" />
                    </div>

                    <div className="relative overflow-hidden">
                        <motion.div
                            variants={variant}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 1, duration: 1, type: 'none' }}
                            className="z-20 absolute top-[-200px] left-[-50px] w-full h-[600px] transform rotate-45 bg-black"
                        />

                        <textarea required rows={6} placeholder="Message" />
                    </div>

                    <button className="bg-blue-700 w-[100px] text-sm py-1 mx-auto">Submit</button>
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
