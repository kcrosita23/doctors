import Contact from "./Contact";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DrCortezImg from "../assets/docCortez.webp";

const DrCortez = () => {
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
          DR. EDGARDO R. CORTEZ M.D., FPCS, FACS
        </motion.span>
      </h1>

      <div className="container mx-auto px-8 lg:px-16">
        <div
          id="aboutDrCortez"
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
              <div className="flex flex-col items-center lg:items-start mt-6 mb-4"></div>
              <ul className="space-y-10 ">
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {" "}
                    Post-Graduate Fellowship{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Surgical Oncology, Memorial Sloan Kettering Cancer Center,
                    New York, U.S.A., 1988{" "}
                  </p>
                </li>
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Diplomate{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Philippine Board of Surgery, 1984 <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Residency in General Surgery{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    UERMMMC, as Scholar of the Philippine College of Surgeons,
                    1980 - 1983
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Doctor of Medicine{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    University of the East Ramon Magsaysay Memorial Medical
                    Center College of Medicine, 1978
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    BS Pre-Medicine{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    University of the Philippines, 1973
                  </p>
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
                <img loading="lazy" decoding="async"
                  className="rounded-lg w-3/5"
                  src={DrCortezImg}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" pt-6 pb-8 scroll-mt-32 border-b border-neutral-900">
          <div className="flex flex-col items-center lg:items-start mb-10">
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
                    St. Luke’s Foundation, 2013 - 2017{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Board of Trustees, St. Luke’s Medical Center, 2012 - 2017
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    St. Luke’s Medical Center, 2012 - 2017
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND CEO
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Medical Affairs and Medical Director, St. Luke’s Medical
                    Center, 2008 - 2012
                  </h3>
                  <p className="text-gray-600 mt-1">
                    VICE PRESIDENT
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Cancer Institute, St. Luke’s Medical Center, 2006 - 2008
                  </h3>
                  <p className="text-gray-600 mt-1">
                    DIRECTOR
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine College of Surgeons, 2004
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine College of Surgeons Foundation, 2004
                  </h3>
                  <p className="text-gray-600 mt-1">
                    CHAIRMAN
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
                    Philippine College of Surgeons Foundation, 2003
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Board of Surgery, 2003
                  </h3>
                  <p className="text-gray-600 mt-1">
                    CHAIRMAN <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    UERM Memorial Hospital, 2001 - 2008
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEDICAL DIRECTOR <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Academy for Head and Neck Surgery, 1999 - 2001
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Board of Surgery, Inc., 1998 - 2010
                  </h3>
                  <p className="text-gray-600 mt-1">
                    MEMBER OF THE BOARD OF DIRECTORS
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Surgical Oncology Society of the Philippines, 1998 - 2000
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR
                    <br />
                  </p>
                </li>
                <li className=" pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Philippine Association of Training Officers in Surgery, 1996
                    - 1998
                  </h3>
                  <p className="text-gray-600 mt-1">
                    PRESIDENT AND FOUNDING DIRECTOR <br />
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className=" pt-6 pb-8 scroll-mt-32  ">
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
      <Contact doctor="Cortez" />
    </div>
  );
};

export default DrCortez;
