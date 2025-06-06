import { HERO_CONTENT } from "../constants";
import DrHipolito from "../assets/docHipolito1.png";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import DrCortez from "../assets/DrCortez.png";
import { Link } from "react-router-dom";
import DrRaymundo from "../assets/DraRaymundo.png";

const DocsCards = () => {
    return (
    <div id="doctors" className="scroll-mt-40 pb-2">
        
        <div className="text-center bg-sky-400">
            <motion.h1 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.3 }}
                className="text-4xl mb-10 pt-6 font-montserrat">SURGICAL ONCOLOGY TEAM
            </motion.h1>

            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="px-20 pb-20 flex justify-center gap-20 flex-wrap">
                    <Link to="/dr-hipolito">
                        <ImageCard
                        image={DrHipolito}
                        title="Dr. Hipolito"
                        description="Click to know more about Dr. Hipolito."
                        />
                    </Link>
                    <Link to="/dr-raymundo">
                        <ImageCard
                        image={DrRaymundo}
                        title="Dr. Raymundo"
                        description="Click to know more about Dr. Raymundo."
                        />
                    </Link>
                    <Link to="/dr-cortez">
                        <ImageCard
                        image={DrCortez}
                        title="Dr. Cortez"
                        description="Click to know more about Dr. Cortez."
                        />
                    </Link>
            </motion.div>
        </div>
    </div>
    )
}

export default DocsCards
