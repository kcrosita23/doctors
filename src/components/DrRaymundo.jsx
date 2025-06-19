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
      <h1 className="justify-center flex flex-auto pt-20">
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
      </h1>

      <div className="container mx-auto px-8">
        <div
          id="aboutDrRaymundo"
          className="scroll-mt-32 border-b border-neutral-900 pb-10"
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
                  <div className="flex flex-col items-center lg:items-start mt-6 mb-4"></div>
                  <ul className="space-y-10 ">
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Doctor of Medicine
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University of the East Ramon Magsaysay Memorial Medical
                        Center, Philippines, 2007 - 2011
                      </p>
                    </li>

                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Bachelor of Science in Geography{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University of the Philippines, Diliman, 2004 - 2007
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        High School Diploma
                      </h3>
                      <p className="text-gray-600 mt-1">
                        St. Scholastica's College, Manila, Philippines, 1998 -
                        2002
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Elementary Diploma
                      </h3>
                      <p className="text-gray-600 mt-1">
                        O.B. Montessori Center, Inc., Sta. Ana, Philippines 1992
                        - 1998
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

        <div className=" py-2 scroll-mt-32 border-b border-neutral-900 ">
          <div className="flex flex-col items-center lg:items-start mb-6 ">
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                            bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight pt-6"
            >
              HOSPITAL AFFILIATES
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
                    N-809 CHBC, 279 E. Rodriguez Sr. Ave, Quezon City, 1112
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    CONSULTANT, Department of Surgery, Diliman Doctors Hospital,
                    Inc.
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Rm. 706 MAB, #251 Commonwealth Ave., Matandang Balara,
                    Quezon City, 1119
                    <br />
                  </p>
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
                    Rm. 322 MAB, #64 Aurora Boulevard, Quezon City, 1113
                  </p>
                </li>
              </ul>
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
      {/* Footer Section */}
      <div className="bg-transparent bg-gradient-to-b from-transparent to-sky-400 w-full h-24"></div>
      <div className="scroll-mt-32  bg-sky-400">
        <h2 className="text-center text-4xl font-montserrat">
          SCHEDULE AN APPLICATION TODAY
        </h2>
        <p className="text-center text-2xl font-montserrat m-1 pb-1">
          Send us a message on viber!
        </p>
        <div>
          <h3 className="font-medium mb-1 mt-4 text-center text-xl">
            Dr. Raymundo`s Secretaries
          </h3>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3  text-center">
          <div>
            <div className="mt-6 flex items-center font-normal justify-center text-sm">
              <div className="flex items-center justify-center hover:text-gray-100">
                <MdOutlinePinDrop className="mr-1 my-1" />
                <a
                  href="https://maps.app.goo.gl/2MP4cPaDFQ4PPHXg8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <u>St. Lukes Medical City - BGC </u>
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-center ">
                MAB 908 <br /> Wed | 10:00am - 12:00pm <br />
                Thu | 1:00pm - 3:00pm
              </p>
            </div>
            <div className="text-sm text-black font-semibold text-center  pb-2">
              Ms. Carla
              <p className="text-sm text-gray-100">
                <div className="flex items-center justify-center font-normal">
                  <FaPhone className="mr-1" />
                  <span>+63 916 946 8578</span>
                </div>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center font-normal justify-center">
              <div className="text-sm flex items-center justify-center hover:text-gray-100 mt-6">
                <MdOutlinePinDrop className="mr-1" />
                <a
                  href="https://maps.app.goo.gl/y18zGKChkNF1vEDD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <u>St. Lukes Medical City - QC </u>
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-center ">
                CHBC 809-N <br /> Tue and Thu <br />
                9:00am - 12:00pm
              </p>
            </div>
            <p className="text-sm text-black font-semibold text-center  pb-2">
              Ms. Jenny
              <p className="text-sm text-gray-100">
                <div className="flex items-center  justify-center font-normal">
                  <FaPhone className="mr-1" />
                  <span>+63 966 837 2756</span>
                </div>
              </p>
            </p>
          </div>
          <div>
            <div className="flex items-center font-normal justify-center">
              <div className="text-sm flex items-center justify-center hover:text-gray-100 mt-6">
                <MdOutlinePinDrop className="mr-1" />
                <a
                  href="https://maps.app.goo.gl/Adibmy3UPxtJUJxN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <u>UERM Medical Center </u>
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-center ">
                MAB 322 <br /> Wed | 1:00pm - 3:00pm <br />
                Sat | . . .
              </p>
            </div>
            <p className="text-sm text-black font-semibold text-center  pb-2">
              Ms. Nitz
              <p className="text-sm text-gray-100">
                <div className="flex items-center  justify-center font-normal">
                  <FaPhone className="mr-1" />
                  <span>+63 917 848 1649</span>
                </div>
              </p>
            </p>
          </div>
        </div>
        <p className="p-2 mt-1 flex items-center justify-center text-gray-600 font-montserrat border-t border-neutral-700">
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
