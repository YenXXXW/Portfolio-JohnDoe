import { easeIn, motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface RevealProps {
    children: JSX.Element;
    small?: boolean;
}

export default function Reveal({ children, small }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);
    return (
        <div ref={ref} className={`relative overflow-hidden w-fit`}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' },
                }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: easeIn,
                }}
                initial="hidden"
                animate={slideControls}
                className={`absolute left-0 right-0 z-30 bg-blue-700 shadow-lg w-full ${small ? 'top-1 bottom-1' : 'top-4 bottom-4'}`}
            />
        </div>
    );
}
