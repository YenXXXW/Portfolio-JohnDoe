import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const ProjectCard = ({ project, setShowModal, setModalData }) => {
    return (
        <div
            className={`flex  w-[350px] h-[250px] relative shadow-xl border-[1px] border-black/15 cursor-pointer`}
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
    console.log('Modal data', project);
    return (
        <div className="relative flex gap-4 bg-black/80 w-[70vw] h-[60vh] pl-[5%] pt-[5%]">
            <IoCloseOutline
                className="absolute top-0 right-0 text-2xl hover:bg-red-600 hover:text-white"
                onClick={() => {
                    setShowModal(false);
                }}
            />

            <div className="basis-1/2 flex flex-col gap-4 text-sm">
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
            <img src={project.image.url} className="w-[350px] h-[300px]" />
        </div>
    );
};

function Projects({ projects }) {
    // const selectedProjects = projects.slice(3, 7);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();

    return (
        <div className={`lg:px-[10%] lg:py-[5%] w-full relative z-10`}>
            {/* changes the background color when the modal shows */}
            {showModal && <div className={`fixed top-0 left-0 z-30 w-full h-screen bg-black/60 backdrop-blur-sm`} />}
            <h2>Projects</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {projects.map((project) => (
                    <div key={project.image.url}>
                        <ProjectCard project={project} setShowModal={setShowModal} setModalData={setModalData} />
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="fixed mx-auto top-0 bottom-0 left-0 right-0 m-auto z-40 w-[75%] h-[60%]">
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
