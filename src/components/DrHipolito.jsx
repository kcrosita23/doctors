import { motion } from 'framer-motion';
import DrHipolitoImg from "../assets/docHipolito.jpg";
import { ABOUT_TEXT } from "../constants";
import Navbar from './Navbar';
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import { HERO_CONTENT } from "../constants";

const DrHipolito = () => {
  return (
<div>
  <div className="container mx-auto px-8">
    <Navbar />
      <div id="aboutDrHipolito" className="scroll-mt-32 border-b border-neutral-900 pb-8">
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
                    
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-8/9">
                      
                       <ul className="space-y-5 pt-5">
                          <li className=" pl-4">
                            <h3 className="pb-6 text-xl font-semibold text-gray-800">EDUCATION: </h3>
                            <h3 className="text-xl font-semibold text-gray-800">BS. Medical Technology </h3>
                              <p className="text-gray-600 mt-1">
                                University Of Santo Tomas Manila, Philippines 1990-1994  
                              </p>
                          </li>
                          <li className="pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Doctor Of Medicine</h3>
                              <p className="text-gray-600 mt-1">
                                University Of The East Ramon Magsaysay Memorial Medical Center Quezon City, Philippines 1994- 1998 <br />
                              </p>
                          </li>
                          <li className=" pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Post-Graduate internship</h3>
                              <p className="text-gray-600 mt-1">
                                University Of The East Ramon Magsaysay Memorial Medical Center Quezon City, Philippines 1998-1999 
                              </p>
                          </li>
                          <li className=" pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">General Surgery Residency </h3>
                              <p className="text-gray-600 mt-1">
                                University Of The East Ramon Magsaysay Memorial Medical Center Quezon City, Philippines 2002-2006  
                              </p>
                          </li>
                          <li className=" pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Surgical Oncology  </h3>
                              <p className="text-gray-600 mt-1">
                                St. Luke's Medical Center Quezon City, Philippines 2008-2009  
                              </p>
                          </li>
                        </ul>
                    </motion.div>
                  </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                  <div className="flex items-center justify-center pt-2">
                    <img className="rounded-lg" src={DrHipolitoImg} alt="about" />
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
                <ul className="space-y-10 pt-16">
                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Gynecologic Cancer Surgeries </h3>
                            <p className="text-gray-600 mt-1">
                                Hysterectomy – removal of the uterus for uterine or cervical cancer. <br />
                                Oophorectomy – removal of the ovaries. <br />
                                Debulking surgery – removing as much tumor as possible, especially in ovarian cancer.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Head, Neck & Skin Cancers</h3>
                            <p className="text-gray-600 mt-1">
                                Thyroidectomy – removal of the thyroid gland. <br />
                                Neck dissection – to remove lymph nodes with cancer. <br />
                                Wide local excision – for melanoma or skin cancers.
                            </p>
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">Soft Tissue Tumors (Sarcomas)</h3>
                            <p className="text-gray-600 mt-1">
                                Surgical removal of soft tissue or bone sarcomas, often involving limb-sparing techniques.
                            </p>
                    </li>
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
               <h3 className="font-bold mb-2 text-center">Dr. Hipolito</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Ann Carla  
                  <p className=" text-sm text-blue-600" >             
                <div className="flex items-center justify-center">
                  <FaPhone className="mr-1" />
                     <span><u>+63 916 946 8578 </u></span>
                </div></p>
                <div className="flex items-center justify-center">
                   <MdOutlinePinDrop className="mr-1" />
                     <span>St. Lukes BGC </span>
                </div></p>
            </div>
        </div>
    </div>
  );
};

export default DrHipolito;
