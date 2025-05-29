import { motion } from 'framer-motion';
import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_TEXT } from "../constants";
import Navbar from './Navbar';
import Blank from "../assets/blank.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";

const DrRaymundo = () => {
  return (
<div>
  <div className="container mx-auto px-8">
    <Navbar />
    <div id="aboutDrRaymundo" className="scroll-mt-32 border-b border-neutral-900 pb-10 pt-12">
            <div className="flex flex-wrap pt-20 pb-20">
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

    <div className="px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32 border-b border-neutral-900">
                  <div className="flex flex-col items-center lg:items-start mb-10">
                    <motion.span
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 0 }}
                      transition={{ duration: 1.3 }}
                      className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                                bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
                    >
                      HOSPITAL AFFILIATES
                    </motion.span>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1.5 }}
                      className="w-full lg:w-1/2"
                    >
                      <ul className="space-y-8">
                        {[1, 2, 3].map((_, i) => (
                          <li key={i} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital {i + 1}</h3>
                            <p className="text-gray-600 mt-1">Address</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1.5 }}
                      className="w-full lg:w-1/2"
                    >
                      <ul className="space-y-8">
                        {[4, 5, 6].map((_, i) => (
                          <li key={i} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital {i + 4}</h3>
                            <p className="text-gray-600 mt-1">Address</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
              </div>
    
              <div className="px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32">
                  <div className="flex flex-col items-center lg:items-start mb-10">
                    <motion.span
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 0 }}
                      transition={{ duration: 1.3 }}
                      className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                                bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
                    >
                      SOCIETIES AND ORGANIZATIONS
                    </motion.span>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1.5 }}
                      className="w-full lg:w-1/2"
                    >
                      <ul className="space-y-8">
                        {[1, 2, 3].map((_, i) => (
                          <li key={i} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital {i + 1}</h3>
                            <p className="text-gray-600 mt-1">Address</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1.5 }}
                      className="w-full lg:w-1/2"
                    >
                      <ul className="space-y-8">
                        {[4, 5, 6].map((_, i) => (
                          <li key={i} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital {i + 4}</h3>
                            <p className="text-gray-600 mt-1">Address</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
              </div>
</div>
            <div className="scroll-mt-32 border-t border-neutral-900 pb-20 bg-gray-100">
                <h2 className="mt-10 text-center text-4xl font-montserrat">
                    SCHEDULE A CONSULTATION TODAY
                </h2>
                <p className="text-center text-2xl font-montserrat text-gray-600 m-1 pb-7">
                    Send us a message!
                </p>
                <div>
                   <h3 className="font-bold mb-2 text-center">Dr. Raymundo</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Nitz  
                      <p className=" text-sm text-blue-600" >             
                    <div className="flex items-center justify-center">
                      <FaPhone className="mr-1" />
                         <span><u>+63 917 848 1649 </u></span>
                    </div></p>
                    <div className="flex items-center justify-center">
                       <MdOutlinePinDrop className="mr-1" />
                         <span>UERM </span>
                    </div></p>
                </div>
            </div>

  </div>
  );
};

export default DrRaymundo
