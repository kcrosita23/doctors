import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import DraRaymundo from "../assets/DraRaymundo.jpg";
import { TbCircleLetterC } from "react-icons/tb";

const DrRaymundo = () => {
  return (
    <div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div
          id="aboutDrRaymundo"
          className="scroll-mt-32 border-b border-neutral-900 pb-8 pt-12"
        >
          <div className="flex flex-wrap pt-10">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3 }}
                  className="bg-gradient-to-r from-blue-600 via-slate-400 
                              to-blue-700 bg-clip-text text-4xl tracking-tight 
                              text-transparent mb-1 pt-8"
                >
                  DR. GRACE DIANNE GONZALEZ RAYMUNDO, MD, FSOSP
                </motion.span>

                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-8/9"
                >
                  <ul className="space-y-8 pt-5">
                    <li className=" pl-4">
                      <h3 className="pb-6 text-xl font-semibold text-gray-800">
                        EDUCATION:{" "}
                      </h3>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {" "}
                        Doctor of Medicine
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University of the East Ramon Magsaysay Memorial Medical
                        Center, Philippines, 2007 to 2011
                      </p>
                    </li>
                    <li className="pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Bachelor of Science in Geography{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University of the Philippines, Diliman, 2004 to 2007{" "}
                        <br />
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        High School Diploma
                      </h3>
                      <p className="text-gray-600 mt-1">
                        St. Scholastica's College, Manila, Philippines, 1998 to
                        2002
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Elementary Diploma{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        O.B. Montessori Center, Inc., Sta. Ana, Philippines
                        1992-1998
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
              <div className="flex items-center justify-center pt-2">
                <img
                  className="rounded-lg w-4/5"
                  src={DraRaymundo}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-6 scroll-mt-32 border-b border-neutral-900">
          <div className="flex flex-col items-center lg:items-start mb-6">
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
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-1 pb-10">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CLINICAL PRECEPTOR for SURGERY I, Department of Surgery,
                    College of Medicine, University of the East Ramon Magsaysay
                    Memorial Medical Center, Inc.{" "}
                  </h3>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CONSULTANT, Institute of Surgery, St. Luke’s Medical Center
                    – Quezon City
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ADDRESS : N-809 CHBC, 279 E Rodriguez Sr. Ave, Quezon City,
                    1112 Metro Manila <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CONSULTANT, Department of Surgery, Diliman Doctors Hospital,
                    Inc.
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ADDRESS : Room 706 MAB, #251 Commonwealth Ave., Matandang
                    Balara, Quezon City, 1119
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
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CONSULTANT, Institute of Surgery, St. Luke’s Medical Center
                    – Global City
                  </h3>
                </li>
              </ul>
              <br />
              <br />
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CONSULTANT, Department of Surgery, University of the East
                    Ramon Magsaysay Memorial Medical Center, Inc.
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ADDRESS : Room 322 MAB, #64 Aurora Boulevard, Quezon City,
                    1113
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 pb-12 pt-6 scroll-mt-32">
          <div className="flex flex-col items-center lg:items-start mb-10 ">
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
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Surgical Oncology Society of the Philippines{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    FELLOW <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Da Vinci Basic Surgery Training Course, IRCAD Taiwan,
                    Lukang, Taiwan
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ROBOTIC SURGERY TRAINING <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Division of Surgical Oncology, Institute of Surgery, St.
                    Luke’s Medical Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">
                    FELLOWSHIP TRAINING <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    University of the East Ramon Magsaysay Memorial Medical
                    Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">
                    POST-GRADUATE INTERNSHIP <br />
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-1">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Medical Association
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Hepatopancreatobiliary Surgery Section, Complex General
                    Surgical Oncology Program, Memorial Sloan Kettering Cancer
                    Center, New York, USA
                  </h3>
                  <p className="text-gray-600 mt-1">
                    OBSERVERSHIP <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Department of Surgery, University of the East Ramon
                    Magsaysay Memorial Medical Center, Philippines
                  </h3>
                  <p className="text-gray-600 mt-1">
                    RESIDENCY TRAINING <br />
                  </p>
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
          <h3 className="font-bold mb-2 text-center mt-8 ">Dr. Raymundo</h3>
          <p className="text-sm text-black font-semibold text-center">
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
        <p className="pt-6 flex items-center justify-center text-gray-500 font-montserrat  ">
          <TbCircleLetterC className="mr-1" />
          <span>2025 Copyright | vibecoders04@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default DrRaymundo;
