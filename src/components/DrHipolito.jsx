import { motion } from 'framer-motion';
import DrHipolitoImg from "../assets/docHipolito.jpg";
import { ABOUT_TEXT } from "../constants";
import Navbar from './Navbar';
import { HERO_CONTENT } from "../constants";

const DrHipolito = () => {
  return (

  <div className="container mx-auto px-8">
    <Navbar />
      <div id="aboutDrHipolito" className="scroll-mt-32 border-b border-neutral-900 pb-4 pt-12">
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
                          DR. CECILIO D.S HIPOLITO JR, M.D, DPBS
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
                  <img className="rounded-lg w-4/5" src={DrHipolitoImg} alt="about" />
                </div>
              </motion.div>
            </div>
      </div>
    
    <div className="flex flex-wrap">
      <div className="flex flex-col items-center lg:items-start">
                  <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.3 }}
                    className="bg-gradient-to-r from-blue-600 via-slate-400 
                              to-blue-700 bg-clip-text text-4xl tracking-tight 
                              text-transparent mb-1 pt-8">
                          HOSPITAL AFFILIATES ASDADSASDASDASD
                  </motion.span>
                  
        </div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/2">
                    <ul className="space-y-10 pt-10">
                        <li className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                <p className="text-gray-600 mt-1">
                                    Address
                                </p>
                        </li>
    
                        <li className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                <p className="text-gray-600 mt-1">
                                    Address
                                </p>
                        </li>

                        <li className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                <p className="text-gray-600 mt-1">
                                    Address
                                </p>
                        </li>

                    </ul>
                    </motion.div>
                    <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/2 lg:p-0">
                        <div className="flex flex-wrap>">
                            <ul className="space-y-10 pt-10">
                              <li className="border-l-4 border-blue-500 pl-4">
                                  <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                      <p className="text-gray-600 mt-1">
                                          Address
                                      </p>
                              </li>
          
                              <li className="border-l-4 border-blue-500 pl-4">
                                  <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                      <p className="text-gray-600 mt-1">
                                          Address
                                      </p>
                              </li>

                              <li className="border-l-4 border-blue-500 pl-4">
                                  <h3 className="text-xl font-semibold text-gray-800">Hospital</h3>
                                      <p className="text-gray-600 mt-1">
                                          Address
                                      </p>
                              </li>
                            </ul>
                        </div>
                    </motion.div>
      </div>
  </div>
  );
};

export default DrHipolito;
