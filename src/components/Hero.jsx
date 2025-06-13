import { ABOUT_DRRAYMUNDO, HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import DrHipolitoDrCortez from "../assets/DrHipolito&DrCortez.jpg";
import DrCortez1 from "../assets/docCortez1.jpg";
import HeroPhoto from "../assets/Hero_photo.png";
import { image } from "framer-motion/client";
import HeroBg from "../assets/hero_bg.png";
import Operation3 from "../assets/Operation3.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="home" className="scroll-mt-32 flex flex-wrap">
      <img
        className="float-right w-auto top-0 -z-10 fixed  hidden xl:block"
        src="..\src\assets\Herobg7.png"
        alt="Herobg"
      />

      <div className="py-40 px-10 mt-10  md:p-20">
        <div className="flex mx-auto items-center lg:items-start">
          <div className="mx-auto text-center md:text-start md:mt-10 md:ml-20">
            <h1
              h1
              className="text-5xl mb-5 pt-10 md:pt-20  md:pr-80 font-montserrat"
            >
              Surgical Excellence, Lifesaving Results
            </h1>

            <div className="m-30 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </div>

            <div className="mt-8 gap-x-4 md:flex">
              <a
                href="/#contact"
                className="px-3 py-3 md:px-8 md:py-3 text-lg font-semibold text-white rounded-lg bg-sky-500  hover:bg-sky-500 hover:text-black transition duration-300 transform hover:-translate-y-1 hover:scale-105 
                  shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="/#doctors"
                className="hidden md:flex md:px-8 md:py-3 text-lg font-semibold rounded-lg bg-gray-300  hover:bg-white hover:text-sky-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 
                  shadow-md hover:shadow-lg "
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-transparent bg-gradient-to-b from-transparent to-sky-400 w-full h-48"></div>
    </div>
  );
};

export default Hero;
