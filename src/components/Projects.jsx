import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Operation2 from "../assets/operation2.jpg";
import Operation3 from "../assets/operation3.jpg";



const Projects = () => {
    return (
        <div id="interventions" className="scroll-mt-32 border-b border-neutral-900 pb-4">

            <h2 className="my-8 text-center text-4xl font-montserrat">
                Surgical Interventions
            </h2>

            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2">
                <ul className="space-y-10 pt-10">
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Breast Cancer Surgery</h3>
                            <p className="text-gray-600 mt-1">
                                Lumpectomy – removal of the tumor and a small margin of tissue. <br />
                                Mastectomy – removal of one or both breasts (partial or total). <br />
                                Sentinel lymph node biopsy – to check if cancer has spread.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Colorectal Surgery</h3>
                            <p className="text-gray-600 mt-1">
                                Colectomy – removal of all or part of the colon. <br />
                                Low anterior resection – removes part of the rectum while preserving anal function. <br />
                                Abdominoperineal resection – complete removal of the rectum and anus.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Gastrointestinal (GI) Cancer Surgeries</h3>
                            <p className="text-gray-600 mt-1">
                                Gastrectomy – removal of part or all of the stomach. <br />
                                Whipple procedure (pancreaticoduodenectomy) – for pancreatic or bile duct cancer. <br />
                                Liver resection – to remove cancerous liver tissue. <br />
                                Esophagectomy – removal of part or all of the esophagus.
                            </p>
                    </li>
                </ul>
                </motion.div>
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2 lg:p-0">
                    <div className="flex items-center justify-center pt-2">
                        <img className="rounded-lg w-2/3" src={Operation2} alt="about" />
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-wrap pb-10">
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2 lg:p-0">
                    <div className="flex items-center justify-center pt-10">
                        <img className="rounded-lg w-2/3" src={Operation3} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2">
                <ul className="space-y-10 pt-16">
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Gynecologic Cancer Surgeries </h3>
                            <p className="text-gray-600 mt-1">
                                Hysterectomy – removal of the uterus for uterine or cervical cancer. <br />
                                Oophorectomy – removal of the ovaries. <br />
                                Debulking surgery – removing as much tumor as possible, especially in ovarian cancer.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Head, Neck & Skin Cancers</h3>
                            <p className="text-gray-600 mt-1">
                                Thyroidectomy – removal of the thyroid gland. <br />
                                Neck dissection – to remove lymph nodes with cancer. <br />
                                Wide local excision – for melanoma or skin cancers.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Soft Tissue Tumors (Sarcomas)</h3>
                            <p className="text-gray-600 mt-1">
                                Surgical removal of soft tissue or bone sarcomas, often involving limb-sparing techniques.
                            </p>
                    </li>
                </ul>
                </motion.div>


            </div>

            {/* 
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            */}
        </div >
    )
}

export default Projects
