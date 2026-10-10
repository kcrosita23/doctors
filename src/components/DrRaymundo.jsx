import Contact from "./Contact";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DraRaymundo from "../assets/DraRaymundo.webp";

const DrRaymundo = () => {
  return (
    <div className="profile-page">
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

      <div className="container mx-auto px-8 lg:px-16">
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
                        St. Scholastica`s College, Manila, Philippines, 1998 -
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
                <img loading="lazy" decoding="async"
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
      <Contact doctor="Raymundo" />
    </div>
  );
};

export default DrRaymundo;
