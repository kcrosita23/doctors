import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="scroll-mt-32 border-b border-neutral-900 pb-4">

            <h2 className="mt-8 mb-2 text-center text-4xl font-montserrat">
                    About
                <span className="text-neutral-500 font-montserrat"> Us
                </span>
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

            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                                <img className="rounded-lg w-4/5" src={aboutImg} alt="about" />
                        </div>
                </motion.div>
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.3}}
                            className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700 bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                            DR. CECILIO D.S HIPOLITO JR, M.D, DPBS
                        </motion.span>
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-wrap">
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.3 }}
                            className="bg-gradient-to-r  from-blue-600 via-slate-400 to-blue-700 bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                            DR. GRACE DIANNE GONZALEZ RAYMUNDO, MD, FSOSP
                        </motion.span>
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                                <img className="rounded-lg w-4/5" src={aboutImg} alt="about" />
                        </div>
                </motion.div>
            </div>

            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:p-8 pt-2">
                        <div className="flex items-center justify-center">
                                <img className="rounded-lg w-4/5" src={aboutImg} alt="about" />
                        </div>
                </motion.div>
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.3 }}
                            className="bg-gradient-to-r  from-blue-600 via-slate-400 to-blue-700 bg-clip-text text-4xl tracking-tight text-transparent mb-1 pt-8">
                            DR. EDGARDO R. CORTEZ M.D., FPCS, FACS
                        </motion.span>
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>    
        </div>
    );
};

export default About
