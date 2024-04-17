import PropTypes from 'prop-types';
import { useState } from 'react';

function Testimonial({ testimonials }) {
    const [index, setIndex] = useState(0);
    return (
        <div className="PageContainer" id="Testimonial">
            <h2>What people say</h2>
            <div className="bg-gradient-to-br from-purple-400 to-blue-700 p-[1px] lg:w-[60%]  mx-auto my-[5%] ">
                <div className=" bg-black p-[10%] flex flex-col gap-5">
                    <img src={testimonials[index].image.url} className="w-12 rounded-lg" />

                    <p className="text-sm font-Josefin">{testimonials[index].review}</p>
                    <div>
                        <h4>{testimonials[index].name}</h4>
                        <p className="text-sm">{testimonials[index].position}</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-[43%]">
                <div className="flex gap-3 mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <span
                            className={`cursor-pointer text-xs rounded-full h-[3px]  ${index === i ? 'w-5 bg-gradient-to-br from-purple-600 to-blue-700' : 'w-4 bg-white'}`}
                            key={i}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Testimonial;
