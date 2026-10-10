import Contact from "./Contact";
import { motion } from "framer-motion";
import DrHipolitoImg from "../assets/docHipolito.webp";
import Navbar from "./Navbar";

const DrHipolito = () => {
  return (
    <div className="profile-page">
      <Navbar />
      <h1 className="justify-center flex flex-auto pt-20">
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-slate-400
                              to-blue-700 bg-clip-text tracking-tight
                              text-transparent text-4xl lg:text-5xl mb-4 pt-8 text-center"
        >
          DR. CECILIO D.S HIPOLITO JR, M.D, DPBS
        </motion.span>
      </h1>

      <div className="container mx-auto px-8 lg:px-16">
        <div
          id="aboutDrHipolito"
          className="scroll-mt-32 32 border-b border-neutral-900 pb-14"
        >
          <div className="flex flex-wrap ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-8/9 pt-6"
                >
                  <ul className="space-y-8">
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Surgical Oncology{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        St. Luke`s Medical Center Quezon City, Philippines 2008
                        - 2009
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        General Surgery Residency{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University Of The East Ramon Magsaysay Memorial Medical
                        Center Quezon City, Philippines 2002 - 2006
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Post-Graduate Internship
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University Of The East Ramon Magsaysay Memorial Medical
                        Center Quezon City, Philippines 1998 - 1999
                      </p>
                    </li>
                    <li className="pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Doctor of Medicine
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University Of The East Ramon Magsaysay Memorial Medical
                        Center Quezon City, Philippines 1994 - 1998
                      </p>
                    </li>
                    <li className=" pl-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        BS. Medical Technology{" "}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        University Of Santo Tomas Manila, Philippines 1990 -
                        x1994
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
              className="w-full lg:w-1/2 lg:p-4 order-1 lg:order-2"
            >
              <div className="flex items-center justify-center pt-2">
                <img loading="lazy" decoding="async"
                  className="rounded-lg w-3/5"
                  src={DrHipolitoImg}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="py-6 scroll-mt-32 ">
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
          <div className="flex flex-col lg:flex-row gap-7 border-b border-neutral-900 pb-10">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-2 pb-2">
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    St. Luke`s Medical Center - Global City{" "}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    32nd St. Bonifacio Global City Taguig City, 1634 <br />
                  </p>
                </li>
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    St Luke`s Medical Center - Quezon City
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Rm. 1018 South Cathedral Heights Bldg. Complex, St. Luke`s
                    Medical Center 279 E. Rodriquez Sr. Boulevard Quezon City,
                    1112
                    <br />
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <ul className="space-y-10 pt-2 pb-2">
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    UERM Memorial Medical Center
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Rm. 112 College of Medicine Bldg. 64 Aurora Blvd. Brgy. Dona
                    Imelda, Quezon City, 1113h
                  </p>
                </li>
                <li className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    International Clinical Rotation
                  </h3>
                  <p className="text-gray-600 mt-1">
                    - Hepatopancreatico-biliary Section Memorial Sloan
                    Kettering, New York USA 2009
                    <br />- Peritoneal Surface Malignancy Division St Agnes
                    Hospital,Baltimore USA 2011
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="py-2 scroll-mt-32 ">
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
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
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
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
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
      <Contact doctor="Hipolito" />
    </div>
  );
};

export default DrHipolito;
