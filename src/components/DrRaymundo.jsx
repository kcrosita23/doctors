import { motion } from 'framer-motion';
import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_TEXT } from "../constants";
import Navbar from './Navbar';
import Blank from "../assets/blank.jpg"; // Placeholder for Dr. Raymundo's image

const DrRaymundo = () => {
  return (

  <div className="container mx-auto px-8">
    <Navbar />
    <div id="aboutDrRaymundo" className="scroll-mt-32 border-b border-neutral-900 pb-4 pt-12">
            <div className="flex flex-wrap pt-20">
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
                    className="bg-gradient-to-r from-blue-600 via-slate-400 
                              to-blue-700 bg-clip-text text-4xl tracking-tight 
                              text-transparent mb-1 pt-8">
                          DR. GRACE DIANNE GONZALEZ RAYMUNDO, MD, FSOSP
                  </motion.span>
                  <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                  <img className="rounded-lg w-4/5" src={Blank} alt="about" />
                </div>
              </motion.div>
            </div>
    </div>
  </div>
  );
};

export default DrRaymundo
