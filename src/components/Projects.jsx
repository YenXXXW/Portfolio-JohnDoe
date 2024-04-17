import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const ProjectCard = ({ project, setShowModal, setModalData }) => {
    return (
        <div
            className={`flex w-[350px] h-[250px] relative shadow-xl border-[1px] border-black/15 cursor-pointer`}
            onClick={() => {
                setShowModal(true), setModalData(project);
            }}
        >
            <img src={project.image.url} className="absolute z-10" />
        </div>
    );
};

//Modle to pop up when the project is clicked
const Modal = ({ project, setShowModal }) => {
    return (
        <div className="relative md:flex md:flex-row-reverse bg-black/80  pl-[5%] py-[6%]">
            <IoCloseOutline
                className="absolute top-0 right-0 text-2xl hover:bg-red-600 hover:text-white"
                onClick={() => {
                    setShowModal(false);
                }}
            />
            <img src={project.image.url} className="object-cover h-[200px] md:w-[300px] md:h-[250px]   lg:w-[500px] lg:h-[300px]" />

            <div className="flex gap-4">
                <div className=" flex flex-col gap-4 text-sm">
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

function Projects({ projects }) {
    // const selectedProjects = projects.slice(3, 7);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    console.log(showModal);

    return (
        <div className={`PageContainer relative z-10`} id="Projects">
            {/* changes the background color when the modal shows */}
            {showModal && <div className={`fixed top-0 left-0 z-30 w-full h-screen bg-black/60 backdrop-blur-sm`} />}
            <h2>Projects</h2>
            <div className="flex mt-[5%] flex-wrap justify-center gap-5 lg:gap-10">
                {projects.map((project) => (
                    <div key={project.image.url}>
                        <ProjectCard project={project} setShowModal={setShowModal} setModalData={setModalData} />
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="fixed mx-auto top-0 bottom-0 lg:bottom-0 left-0 right-0 m-auto z-40 w-[95%] h-[90%] md:w-[75%] md:h-[86%]">
                    <Modal project={modalData} setShowModal={setShowModal} />
                </div>
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
