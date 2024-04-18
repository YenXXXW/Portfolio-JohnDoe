import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const ProjectCard = ({ project, setShowModal, setModalData }) => {
    return (
        <div
            className={`flex w-[350px] h-[250px] relative shadow-xl border-[1px] border-black/15 cursor-pointer `}
            onClick={() => {
                setShowModal(true), setModalData(project);
            }}
        >
            <img src={project.image.url} className="absolute " />
        </div>
    );
};

const Modal = ({ project, setShowModal }) => {
    return (
        <div className=" px-[5%] lg:px-[10%] relative flex flex-col sm:flex-row-reverse gap-3 w-full h-full lg:h-[60%] lg:mt-[5%] lg:w-[80%] lg:mx-auto bg-white text-black backdrop-blur-sm">
            <IoCloseOutline
                className=" absolute top-0 right-0 text-3xl hover:bg-red-600 text-black hover:text-white"
                onClick={() => {
                    setShowModal(false);
                }}
            />
            <div className=""></div>
            <img src={project.image.url} className="object-contain mt-5 h-[200px] md:w-[300px] md:h-[250px] lg:w-[350px] lg:h-[300px]" />
            <div className="flex gap-4 items-center ">
                <div className=" flex flex-col gap-4 text-sm lg:text-base">
                    <h3 className="uppercase">{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                        <p className="font-bold  mt-5">Tech stack</p>
                        <div className="flex gap-3 mt-2">
                            {project.techStack.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <a href={project.githuburl} target="_blank" rel="noreferrer">
                            <span className="w-[80px] py-1 bg-gray-800 rounded-md text-white inline-block text-center">code</span>
                        </a>

                        <a href={project.liveurl}>
                            <span className="w-[80px] py-1 bg-gray-800 rounded-md text-white inline-block  text-center">live</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

//Modle to pop up when the project is clicked
// const Modal = ({ project, setShowModal }) => {
//     return (
//         <div className="relative sm:flex sm:flex-row-reverse gap-3 text-black pl-[5%]  py-[5%] bg-white">
//             <IoCloseOutline
//                 className="absolute top-0 right-0 text-2xl hover:bg-red-600 hover:text-white"
//                 onClick={() => {
//                     setShowModal(false);
//                 }}
//             />
//             <img src={project.image.url} className="object-cover h-[200px] md:w-[300px] md:h-[250px] lg:w-[500px] lg:h-[300px]" />

//             <div className="flex gap-4">
//                 <div className=" flex flex-col gap-4 text-sm lg:text-base">
//                     <h3 className="uppercase">{project.title}</h3>
//                     <p>{project.description}</p>
//                     <div>
//                         <p className="font-bold  mt-5">Tech stack</p>
//                         <div className="flex gap-3 mt-2">
//                             {project.techStack.map((tech) => (
//                                 <span key={tech}>{tech}</span>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="flex gap-4 mt-5">
//                         <a href={project.githuburl} target="_blank" rel="noreferrer">
//                             <span className="w-[80px] py-1 bg-gray-800 rounded-md text-white inline-block text-center">code</span>
//                         </a>

//                         <a href={project.liveurl}>
//                             <span className="w-[80px] py-1 bg-gray-800 rounded-md text-white inline-block  text-center">live</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

function Projects({ projects }) {
    // const selectedProjects = projects.slice(3, 7);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();

    return (
        <div className={`PageContainer relative z-0`} id="Projects">
            <h2>Projects</h2>
            <div className="grid mt-[5%] lg:grid-cols-3 justify-center gap-5 lg:gap-10">
                {projects.map((project) => (
                    <div key={project.image.url}>
                        <ProjectCard project={project} setShowModal={setShowModal} setModalData={setModalData} />
                    </div>
                ))}
            </div>
            {showModal && (
                <>
                    {/* changes the background color when the modal shows */}
                    <div className="fixed left-0 top-0 w-full h-full bg-white/30 backdrop-blur-2xl z-20"></div>
                    <div className="fixed left-0 top-9 w-full h-full z-30">
                        <Modal project={modalData} setShowModal={setShowModal} />
                    </div>
                </>
            )}
        </div>
    );
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    setShowModal: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
};

Modal.propTypes = {
    project: PropTypes.object.isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default Projects;
