import { motion } from "framer-motion";
import DrHipolitoImg from "../assets/docHipolito.jpg";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";

const DrHipolito = () => {
  return (
    <div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div
          id="aboutDrHipolito"
          className="scroll-mt-32 border-b border-neutral-900 pb-8 pt-20"
        >
          <div className="flex flex-wrap ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 via-slate-400 
                              to-blue-700 bg-clip-text text-4xl tracking-tight 
                              text-transparent mb-1 pt-8"
                >
                  DR. CECILIO D.S HIPOLITO JR, M.D, DPBS
                </motion.span>

                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-8/9"
                >
                  <div className="flex flex-col items-left lg:items-start mt-6 mb-4">
                    <motion.span
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                            bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
                    >
                      HOSPITAL AFFILIATES
                    </motion.span>
                  </div>

                  <ul className="space-y-8 pt-5">
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        St. Luke`s Medical Center - Global City
                      </h3>
                      <p className="text-gray-600 mt-1">
                        32nd St. Bonifacio Global City Taguig City, 1634
                      </p>
                    </li>
                    <li className="pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        St Luke`s Medical Center - Quezon City
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Rm.1018 South Cathedral Heights Bldg. Complex, St.
                        Luke`s Medical Center 279 E. Rodriquez Sr. Boulevard
                        Quezon City, 1112
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        UERM Memorial Medical Center
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Rm.112 College of Medicine Bldg. 64 Aurora Blvd. Brgy.
                        Dona Imelda, Quezon City, 1113h
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        International Clinical Rotation{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        - Hepatopancreatico-biliary Section Memorial Sloan
                        Kettering, New York USA 2009 - Peritoneal Surface
                        Malignancy Division St Agnes Hospital,Baltimore USA 2011
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
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:p-8"
            >
              <div className="flex items-center justify-center pt-6">
                <img
                  className="rounded-lg w-4/5"
                  src={DrHipolitoImg}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" lg: py-6 scroll-mt-32 ">
          <div className="flex flex-col items-center lg:items-start mb-6">
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                            bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            >
              SOCIETIES AND ORGANIZATIONS
            </motion.span>
          </div>
          <div className="flex flex-col lg:flex-row gap-7">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-2 pb-2">
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    American Society of Peritoneal Surface Malignancies{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER <br />
                  </p>
                </li>
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Medical Association
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER
                    <br />
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-2 pb-2">
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Association for Study of Liver Diseases
                  </h3>
                  <p className="text-gray-600 mt-1">MEMBER</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="scroll-mt-32 border-t border-neutral-400 pb-2 bg-sky-400">
        <h2 className="mt-10 text-center text-4xl font-montserrat">
          SCHEDULE A CONSULTATION TODAY
        </h2>
        <p className="text-center text-2xl font-montserrat m-1 pb-1">
          Send us a message!
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3  text-center">
          <div>
            <div className="text-sm text-black font-bold text-center mt-8 ">
              Ann Carla
              <p className="text-sm text-gray-100">
                <div className="flex items-center justify-center">
                  <FaPhone className="mr-1" />
                  <span>
                    <u>+63 916 946 8578 </u>
                  </span>
                </div>
              </p>
              <div className="flex items-center  font-normal justify-center">
                <MdOutlinePinDrop className="mr-1" />
                <span>St. Lukes BGC </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-black font-bold text-center mt-8">
              Jennifer
              <p className="text-sm text-gray-100">
                <div className="flex items-center justify-center">
                  <FaPhone className="mr-1" />
                  <span>
                    <u>+63 963 709 2072 </u>
                  </span>
                </div>
              </p>
              <div className="flex items-center font-normal justify-center ">
                <MdOutlinePinDrop className="mr-1" />
                <span>St. Lukes Quezon City </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-black font-bold text-center mt-8">
              Marylen
              <p className="text-sm text-gray-100">
                <div className="flex items-center  justify-center">
                  <FaPhone className="mr-1" />
                  <span>
                    <u>+63 997 188 7848</u>
                  </span>
                </div>
              </p>
              <div className="flex items-center font-normal justify-center">
                <MdOutlinePinDrop className="mr-1" />
                <span>UERM </span>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-6 flex items-center justify-center text-gray-500 font-montserrat  ">
          <TbCircleLetterC className="mr-1" />
          <span className="text-center">
            2025 Copyright | vibecoders04@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default DrHipolito;
