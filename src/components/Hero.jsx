import { ABOUT_DRRAYMUNDO, HERO_CONTENT } from "../constants"
import { motion } from "framer-motion";
import DrHipolitoDrCortez from "../assets/DrHipolito&DrCortez.jpg";
import DrCortez1 from "../assets/docCortez1.jpg";
import HeroPhoto from "../assets/Hero_photo.png"
import { image } from "framer-motion/client";
import HeroBg from "../assets/hero_bg.png";
import Operation3 from "../assets/Operation3.jpg";

const Hero = () => {
    return (

        
        <div id="home" className="scroll-mt-32 border-b border-neutral-900 pb-4 pt-10">


           <div className="ml-40 mb-20">

                <div className="flex mx-auto items-center lg:items-start">
                    
                
                 <div className="block mt-20 mr-10">

                        <h1   h1 className="text-5xl mb-5 pt-20 font-montserrat">
                         Surgical Excellence, Lifesaving Results
                        </h1>

                        <div className="m-30 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                        </div>

                        <div className="mt-8 flex gap-x-4">
                            <a href="#" className="px-8 py-3 text-lg font-semibold outline-orange-400 rounded-lg bg-sky-500">Contact Us</a>
                            <a href="#" className="px-8 py-3 text-lg font-semibold rounded-lg bg-gray-300 ">Team</a>
                        </div>

                    </div>


                    <div className = "md:ml-20 mt-30">
                        

                        {/* <img className="rounded-lg w-1/2" src={DrCortez1} alt="about" /> */}
                        <img className="rounded-lg w-90" src={HeroPhoto} alt="heropic" />
                
                    </div>  

                </div>         

           </div>
        </div>
    )
}

export default Hero