import { HERO_CONTENT } from "../constants";
import DrHipolito from "../assets/docHipolito.jpg";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import DrCortez from "../assets/docCortez.jpg";
import { Link } from "react-router-dom";
import Blank from "../assets/blank.jpg";

const DocsCards = () => {
    return (
    <div id="doctors" className="scroll-mt-32 border-t border-b border-neutral-900 pb-2 pt-6">

        <div className="text-center">
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
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
                    <Link to="/dr-raymundo">
                        <ImageCard
                        image={Blank}
                        title="Dr. Raymundo"
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
                    <Link to="/dr-cortez">
                        <ImageCard
                        image={DrCortez}
                        title="Dr. Cortez"
                        description="A stunning landscape from Unsplash."
                        />
                    </Link>
            </motion.div>
        </div>
    </div>
    )
}

export default DocsCards
