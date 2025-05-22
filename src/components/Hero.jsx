import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/docHipolito.jpg";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import DocCortez from "../assets/docCortez.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
    <div id="home" className="scroll-mt-36 border-b border-neutral-900 pb-2 pt-12">

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
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="px-20 pb-20 flex justify-center gap-20 flex-wrap">
                    <Link to="/dr-hipolito">
                        <ImageCard
                        image={profilePic}
                        title="Dr. Hipolito"
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
                    <Link to="/dr-raymundo">
                        <ImageCard
                        image={profilePic}
                        title="Dr. Raymundo"
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
                    <Link to="/dr-cortez">
                        <ImageCard
                        image={DocCortez}
                        title="Dr. Cortez"
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
            </motion.div>
        </div>
    </div>
    )
}

export default Hero
