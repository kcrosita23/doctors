import aboutImg from "../assets/aboutdoc.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";



const Projects = () => {
  return (
    <div id="interventions" className="scroll-mt-32 border-b border-neutral-200 pb-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-blue-950 font-montserrat tracking-wide">
        Surgical Interventions
      </h2>

      <div className="flex flex-wrap justify-between gap-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[48%]"
        >
          <ul className="space-y-10">
            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Breast Cancer Surgery</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Lumpectomy – removal of the tumor and a small margin of tissue.<br />
                Mastectomy – removal of one or both breasts (partial or total).<br />
                Sentinel lymph node biopsy – to check if cancer has spread.
              </p>
            </li>

            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Colorectal Surgery</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Colectomy – removal of all or part of the colon.<br />
                Low anterior resection – removes part of the rectum while preserving anal function.<br />
                Abdominoperineal resection – complete removal of the rectum and anus.
              </p>
            </li>

            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Gastrointestinal (GI) Cancer Surgeries</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Gastrectomy – removal of part or all of the stomach.<br />
                Whipple procedure – for pancreatic or bile duct cancer.<br />
                Liver resection – to remove cancerous liver tissue.<br />
                Esophagectomy – removal of part or all of the esophagus.
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[48%] flex justify-center items-center"
        >
          <img src={aboutImg} alt="Surgical Interventions" className="rounded-xl shadow-xl w-4/5" />
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-between gap-12 mt-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[48%] flex justify-center items-center"
        >
          <img src={aboutImg} alt="More Interventions" className="rounded-xl shadow-xl w-4/5" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[48%]"
        >
          <ul className="space-y-10">
            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Gynecologic Cancer Surgeries</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Hysterectomy – removal of the uterus for uterine or cervical cancer.<br />
                Oophorectomy – removal of the ovaries.<br />
                Debulking surgery – removing as much tumor as possible.
              </p>
            </li>

            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Head, Neck & Skin Cancers</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Thyroidectomy – removal of the thyroid gland.<br />
                Neck dissection – to remove lymph nodes with cancer.<br />
                Wide local excision – for melanoma or skin cancers.
              </p>
            </li>

            <li className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-900">Soft Tissue Tumors (Sarcomas)</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Surgical removal of soft tissue or bone sarcomas, often involving limb-sparing techniques.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects
