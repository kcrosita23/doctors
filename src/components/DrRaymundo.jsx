import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import DraRaymundo from "../assets/DraRaymundo.jpg";
import { TbCircleLetterC } from "react-icons/tb";

const DrRaymundo = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-center flex flex-auto pt-20">
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="bg-gradient-to-r from-blue-600 via-slate-400 
                              to-blue-700 bg-clip-text tracking-tight 
                              text-transparent text-4xl lg:text-5xl mb-4 pt-8 text-center"
        >
          DR. GRACE DIANNE GONZALEZ RAYMUNDO, MD, FSOSP
        </motion.span>
      </div>

      <div className="container mx-auto px-8">
        <div
          id="aboutDrRaymundo"
          className="scroll-mt-32 border-b border-neutral-900 pb-14"
        >
          <div className="flex flex-wrap">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-8/9"
                >
                  <div className="flex flex-col items-center lg:items-start mt-6 mb-4">
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
                  <ul className="space-y-8 pt-2">
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {" "}
                        CLINICAL PRECEPTOR for SURGERY I, Department of Surgery,
                        College of Medicine, University of the East Ramon
                        Magsaysay Memorial Medical Center, Inc.
                      </h3>
                    </li>
                    <li className="pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        CONSULTANT, Institute of Surgery, St. Luke’s Medical
                        Center – Quezon City{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        N-809 CHBC, 279 E. Rodriguez Sr. Ave, Quezon City, 1112
                        <br />
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        CONSULTANT, Department of Surgery, Diliman Doctors
                        Hospital, Inc.
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Rm. 706 MAB, #251 Commonwealth Ave., Matandang Balara,
                        Quezon City, 1119
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        CONSULTANT, Institute of Surgery, St. Luke’s Medical
                        Center – Global City{" "}
                      </h3>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        CONSULTANT, Department of Surgery, University of the
                        East Ramon Magsaysay Memorial Medical Center, Inc.
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Rm. 322 MAB, #64 Aurora Boulevard, Quezon City, 1113
                      </p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:p-8 order-1 lg:order-2"
            >
              <div className="flex items-center justify-center pt-2">
                <img
                  className="rounded-lg w-3/5"
                  src={DraRaymundo}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" py-6 scroll-mt-32 ">
          <div className="flex flex-col items-center lg:items-start mb-6">
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                            bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            >
              SOCIETIES AND ORGANIZATION
            </motion.span>
          </div>
          <div className="flex flex-col lg:flex-row gap-7">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-1 pb-10">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Surgical Oncology Society of the Philippines{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    FELLOW
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Da Vinci Basic Surgery Training Course, IRCAD Taiwan,
                    Lukang, Taiwan
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ROBOTIC SURGERY TRAINING
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Division of Surgical Oncology, Institute of Surgery, St.
                    Luke’s Medical Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">FELLOWSHIP TRAINING</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    University of the East Ramon Magsaysay Memorial Medical
                    Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">POST-GRADUATE INTERNSHIP</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Medical Association
                  </h3>
                  <p className="text-gray-600 mt-1">MEMBER</p>
                </li>
              </ul>
              <br />
              <br />
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Hepatopancreatobiliary Surgery Section, Complex General
                    Surgical Oncology Program, Memorial Sloan Kettering Cancer
                    Center, New York, USA
                  </h3>
                  <p className="text-gray-600 mt-1">OBSERVERSHIP</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Department of Surgery, University of the East Ramon
                    Magsaysay Memorial Medical Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">RESIDENCY TRAINING</p>
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
        <p className="text-center text-2xl font-montserrat  m-1 pb-1">
          Send us a message!
        </p>
        <div>
          <p className="text-sm text-black font-semibold text-center mt-6 pb-2">
            Nitz
            <p className="text-sm text-gray-100">
              <div className="flex items-center justify-center">
                <FaPhone className="mr-1" />
                <span>
                  <u>+63 917 848 1649 </u>
                </span>
              </div>
            </p>
            <div className="flex items-center font-normal justify-center">
              <MdOutlinePinDrop className="mr-1" />
              <span>UERM </span>
            </div>
          </p>
        </div>
        <p className="pt-2 flex items-center justify-center text-gray-600 font-montserrat m-1 border-t border-neutral-700">
          <TbCircleLetterC className="mr-1" />
          <span className="text-center text-sm">
            2025 Copyright | vibecoders04@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default DrRaymundo;
