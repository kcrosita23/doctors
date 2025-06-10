import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_DRCORTEZ, ABOUT_DRHIPOLITO, ABOUT_DRRAYMUNDO, ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import DrCortez1 from "../assets/docCortez1.jpg";
import DrHipolitoDrCortez from "../assets/DrHipolito&DrCortez.jpg";
import DrRaymundo1 from "../assets/docRaymundo.jpg";
import DrHipolitoScrub from "../assets/DrHipolitoScrub.jpg";

const About = () => {
    return (
        <div id="about" className="scroll-mt-32 pb-4 bg-slate-100 px-4">

            <h2 className="mb-4 text-center text-4xl font-montserrat">
                    ABOUT US
            </h2>
              {/*
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.3 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg: mt-16 lg:text-4xl"> SURGICAL ONCOLOGY TEAM
                        </motion.h1>
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.3 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            CECILIO D.S HIPOLITO JR, M.D, DPBS
                        </motion.span>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.3 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-6">
                    <div className="flex justify-center">
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.9 }}
                            className="rounded-lg" src={profilePic} alt="Doc Hipolito Pic" />
                    </div>
                </div>
            </div>
        </div>
        */}

            <div id="dr-hipolito-main" className="flex flex-wrap">
                <motion.div
                    id="dr-hipolito-img"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:px-6 lg:py-4">
                    <div className="flex items-center justify-center px-4">
                    <img className="rounded-lg w-3/5" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    id="dr-hipolito-about"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:pr-6 lg:py-4">
                    <div className="flex flex-col items-center lg:items-start">
                    <motion.span
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5}}
                        className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                        bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                        DR. CECILIO D.S HIPOLITO JR, M.D, DPBS
                    </motion.span>
                    <p className="my-2 max-w-xl py-6 text-justify">
                        {ABOUT_DRHIPOLITO}
                    </p>
                    </div>
                </motion.div>
            </div>

            <div id="dr-raymundo-main" className="flex flex-wrap">
                <motion.div
                    id="dr-raymundo-about"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:pl-20 lg:py-4">
                    <div className="flex flex-col items-center lg:items-start">
                    <motion.span
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                        bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                        DR. GRACE DIANNE GONZALEZ RAYMUNDO, MD, FSOSP
                    </motion.span>
                    <p className="my-2 max-w-xl py-6 text-justify">
                        {ABOUT_DRRAYMUNDO}
                    </p>
                    </div>
                </motion.div>

                <motion.div
                    id="dr-raymundo-img"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:px-6 lg:py-4">
                    <div className="flex items-center justify-center px-4">
                    <img className="rounded-lg w-3/5" src={DrRaymundo1} alt="about" />
                    </div>
                </motion.div>
            </div>


            <div id="dr-cortez-main" className="flex flex-wrap">
                <motion.div
                    id="dr-cortez-about"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:pr-6 lg:py-4 order-1 lg:order-2">
                    <div className="flex flex-col items-center lg:items-start">
                    <motion.span
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700 
                        bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                        DR. EDGARDO R. CORTEZ M.D., FPCS, FACS
                    </motion.span>
                    <p className="my-2 max-w-xl py-6 text-justify">
                        {ABOUT_DRCORTEZ}
                    </p>
                    </div>
                </motion.div>

                <motion.div
                    id="dr-cortez-img"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:px-6 lg:py-4 order-2 lg:order-1 pt-2">
                    <div className="flex items-center justify-center px-4">
                    <img className="rounded-lg w-3/5" src={DrCortez1} alt="about" />
                    </div>
                </motion.div>
            </div>
        </div>
        
    );
};

export default About
