import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function Testimonial({ testimonials }) {
    const [index, setIndex] = useState(0);

    const [direction, setDirection] = useState('right');

    const variant = {
        enter: () => {
            return {
                x: direction === 'right' ? 100 : -100,
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: () => {
            return {
                x: direction === 'right' ? -100 : 100,
                opacity: 0,
            };
        },
    };

    return (
        <div className="PageContainer" id="Testimonial">
            <h2>What people say</h2>

            <div className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-purple-400 to-blue-700 p-[1px] lg:w-[63%]  mx-auto my-[5%]  ">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        variants={variant}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: 'none',
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute h-full top-0 left-0 w-full  p-[10%] md:p-[3%] lg:p-[10%] flex flex-col gap-5 overflow-hidden"
                    >
                        <img src={testimonials[index].image.url} className="w-12 rounded-lg" />

                        <p className=" lg:text-lg font-Josefin">{testimonials[index].review}</p>
                        <div>
                            <h4 className="font-Montserrat">{testimonials[index].name}</h4>
                            <p className="text-sm">{testimonials[index].position}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* arrow animation for small screen */}
                <motion.div
                    animate={{
                        left: ['-9%', '-10%', '-10%', '-9%'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                    className={`absolute md:hidden top-[45%] left-[-9%] text-purple-600 text-4xl cursor-pointer ${index === 0 && 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                        setIndex(index - 1), setDirection('left');
                    }}
                >
                    <IoMdArrowDropleft />
                </motion.div>
                <motion.div
                    animate={{
                        right: ['-9%', '-10%', '-10%', '-9%'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                    className={` absolute  md:hidden  top-[45%] right-[-9%] text-purple-600 text-4xl cursor-pointer ${index === testimonials.length - 1 && 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                        setIndex(index + 1), setDirection('right');
                    }}
                >
                    <IoMdArrowDropright />
                </motion.div>

                {/* arrow animation for large screen */}
                <motion.div
                    animate={{
                        left: ['-7%', '-8%', '-8%', '-7%'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                    className={`hidden md:block absolute top-[45%] left-[-7%]  text-purple-600 text-4xl cursor-pointer ${index === 0 && 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                        setIndex(index - 1), setDirection('left');
                    }}
                >
                    <IoMdArrowDropleft />
                </motion.div>
                <motion.div
                    animate={{
                        right: ['-7%', '-8%', '-8%', '-7%'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                    className={`hidden md:block absolute top-[45%] right-[-7%] text-purple-600 text-4xl cursor-pointer ${index === testimonials.length - 1 && 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                        setIndex(index + 1), setDirection('right');
                    }}
                >
                    <IoMdArrowDropright />
                </motion.div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Testimonial;
