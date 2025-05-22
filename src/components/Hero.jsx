import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/docHipolito.jpg";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import DocCortez from "../assets/docCortez.jpg";
import { Link } from "react-router-dom";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: delay },
    }
})

const Hero = () => {
    return (
    <div id="home" className="scroll-mt-32 border-b border-neutral-900 pb-4">

        <div className="text-center">
            <motion.h1 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.3 }}
                className="text-4xl mb-auto pt-20 font-montserrat">SURGICAL ONCOLOGY TEAM
            </motion.h1>

            <div className="flex justify-center">
                <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                </motion.p>
            </div>

            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="px-20 pb-20 flex justify-center gap-20 flex-wrap">
                    
                        <ImageCard
                        image={profilePic}
                        title="Dr. Hipolito"
                        description="A stunning landscape from Unsplash."
                        />
                    
                    
                        <ImageCard
                        image={DocCortez}
                        title="Dr. Cortez"
                        description="A stunning landscape from Unsplash."
                        />
                    
                    
                        <ImageCard
                        image={profilePic}
                        title="Dr. Raymundo"
                        description="A stunning landscape from Unsplash."
                        />
                    
            </motion.div>
        </div>
        
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
    </div>
    )
}

export default Hero
