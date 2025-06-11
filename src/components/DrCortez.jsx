import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DrCortezImg from "../assets/docCortez.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";

const DrCortez = () => {
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
          DR. EDGARDO R. CORTEZ M.D., FPCS, FACS
        </motion.span>
      </div>

      <div className="container mx-auto px-8">
        <div
          id="aboutDrCortez"
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
              <div className="flex flex-col items-center lg:items-start mt-6 mb-4">
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                            bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
                >
                  POSITION HELD
                </motion.span>
              </div>
              <ul className="space-y-6 pt-6">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {" "}
                    Philippine College of Surgeons, 2004{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">PRESIDENT</p>
                </li>
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine College of Surgeons Foundation, 2004{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    CHAIRMAN <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine College of Surgeons Foundation, 2003{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">PRESIDENT</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Board of Surgery, 2003{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">CHAIRMAN</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Board of Surgery, Inc. 1998 - 2010{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER OF THE BOARD OF DIRECTORS
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Surgical Oncology Society of the Philippines, 1998 - 2000{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Academy for Head and Neck Surgery, 1999 - 2001{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Association of Training Officers in Surgery, 1996
                    - 1998{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    UERM Memorial Hospital, 2001 - 2008{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">MEDICAL DIRECTOR</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Cancer Institute, St. Luke’s Medical Center, 2006 - 2008{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">DIRECTOR</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Medical Affairs and Medical Director, St. Luke’s Medical
                    Center, 2008 - 2012
                  </h3>
                  <p className="text-gray-600 mt-1">VICE PRESIDENT</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    St. Luke’s Medical Center, 2012 - 2017
                  </h3>
                  <p className="text-gray-600 mt-1">PRESIDENT AND CEO</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    St. Luke’s Foundation, 2013 - 2017
                  </h3>
                  <p className="text-gray-600 mt-1">PRESIDENT</p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Board of Trustees, St. Luke’s Medical Center, 2012 - 2017
                  </h3>
                  <p className="text-gray-600 mt-1">MEMBER</p>
                </li>
              </ul>
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
                  className="rounded-lg w-4/5"
                  src={DrCortezImg}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-8 scroll-mt-32">
          <div className="flex flex-col items-center lg:items-start mb-10">
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-700
                        bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            >
              CURRENT POSITION
            </motion.span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Board of Trustees, St. Luke’s College of Medicine - William
                    H. Quasha Memorial, 2012 to present{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Board of Trustees, Trinity University of Asia, 2016 to
                    present
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER <br />
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
                    St. Luke’s Cancer Institute
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ATTENDING SURGICAL ONCOLOGIST, AND ADVISER <br />
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
        <p className="text-center text-2xl font-montserrat m-1 pb-1">
          Send us a message!
        </p>
        <div>
          <p className="text-sm text-black font-semibold text-center mt-6 pb-2">
            Mean
            <p className="text-sm text-white">
              <div className="flex items-center justify-center">
                <FaPhone className="mr-1" />
                <span>
                  <u>+63 918 487 3816 </u>
                </span>
              </div>
            </p>
            <div className="flex items-center font-normal justify-center">
              <MdOutlinePinDrop className="mr-1" />
              <span>St. Lukes BGC </span>
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

export default DrCortez;
