import { useState } from "react";
import {
  FaRibbon,
  FaToilet,
  FaStethoscope,
  FaFemale,
  FaHeadSideVirus,
  FaBone,
} from "react-icons/fa";
import Operation1 from "../assets/Operation1.jpg";
import Operation2 from "../assets/Operation2.jpg";
import Operation3 from "../assets/Operation3.jpg";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "breast", label: "Breast Cancer Surgery", icon: FaRibbon },
  { id: "colorectal", label: "Colorectal Surgery", icon: FaRibbon },
  { id: "gi", label: "Gastrointestinal Surgeries", icon: FaRibbon },
  { id: "gynecologic", label: "Gynecologic Surgeries", icon: FaRibbon },
  { id: "head-neck", label: "Head & Neck Cancers", icon: FaRibbon },
  { id: "sarcomas", label: "Soft Tissue Tumors", icon: FaRibbon },
];

const tabContent = {
  breast: (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation1}
        alt="Breast Cancer Surgery"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div className="text-gray-600 text-base leading-relaxed">
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Breast Cancer Surgery
        </h3>
        <p>
          Lumpectomy – removal of the tumor and a small margin of tissue.
          <br />
          Mastectomy – removal of one or both breasts (partial or total).
          <br />
          Sentinel lymph node biopsy – to check if cancer has spread.
        </p>
      </div>
    </div>
  ),
  colorectal: (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation3}
        alt="Colorectal Surgery"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div>
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Colorectal Surgery
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Colectomy – removal of all or part of the colon.
          <br />
          Low anterior resection – removes part of the rectum while preserving
          anal function.
          <br />
          Abdominoperineal resection – complete removal of the rectum and anus.
        </p>
      </div>
    </div>
  ),
  gi: (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation2}
        alt="Gastrointestinal Surgeries"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div>
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Gastrointestinal Surgeries
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Gastrectomy – removal of part or all of the stomach.
          <br />
          Whipple procedure – for pancreatic or bile duct cancer.
          <br />
          Liver resection – to remove cancerous liver tissue.
          <br />
          Esophagectomy – removal of part or all of the esophagus.
        </p>
      </div>
    </div>
  ),
  gynecologic: (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation1}
        alt="Gynecologic Surgeries"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div>
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Gynecologic Surgeries
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Hysterectomy – removal of the uterus for uterine or cervical cancer.
          <br />
          Oophorectomy – removal of the ovaries.
          <br />
          Debulking surgery – removing as much tumor as possible.
        </p>
      </div>
    </div>
  ),
  "head-neck": (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation2}
        alt="Gynecologic Surgeries"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div>
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Head & Neck Cancers
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Thyroidectomy – removal of the thyroid gland.
          <br />
          Neck dissection – to remove lymph nodes with cancer.
          <br />
          Wide local excision – for melanoma or skin cancers.
        </p>
      </div>
    </div>
  ),
  sarcomas: (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={Operation3}
        alt="Gynecologic Surgeries"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w- rounded-lg shadow-md cursor-pointer filter grayscale hover:grayscale-0 duration-500 object-cover"
      />
      <div>
        <h3 className="text-3xl font-semibold text-blue-900 mb-2">
          Soft Tissue Tumors (Sarcomas)
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Surgical removal of soft tissue or bone sarcomas, often involving
          limb-sparing techniques.
        </p>
      </div>
    </div>
  ),
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("breast");

  return (
    <div id="interventions" className="scroll-mt-24 pb-16">
      <h2 className="mb-8 text-center text-4xl font-montserrat tracking-wide pt-10">
        SURGICAL INTERVENTIONS
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="flex justify-center px-4">
          <div className="flex w-full max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center px-4 py-3 m-1 rounded-md transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {/* Icon: Visible on all screen sizes with responsive sizing */}
                <tab.icon className="text-2xl md:text-3xl lg:text-4xl mb-1" />

                {/* Label: Hidden on small screens, visible on medium and larger screens */}
                <span className="hidden md:block text-sm md:text-base text-center">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
