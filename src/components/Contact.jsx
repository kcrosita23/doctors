import { FaPhone } from "react-icons/fa6";
import { MdOutlinePinDrop } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-32 bg-sky-400 text-gray-900 pb-2">
      <h2 className="pt-10 text-center text-4xl font-montserrat">
        SCHEDULE A CONSULTATION TODAY
      </h2>
      <p className="text-center text-2xl font-montserrat  m-1 pb-1">
        Send us a message!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-center pb-2">
        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Hipolito</h3>
          <div className="text-sm ">
            Ann Carla
            <p className="text-sm text-gray-100">
              <div className="flex items-center justify-center">
                <FaPhone className="mr-1" />
                <span>
                  <u>+63 916 946 8578 </u>
                </span>
              </div>
            </p>
            <div className="flex items-center justify-center">
              <MdOutlinePinDrop className="mr-1" />
              <span>St. Lukes BGC </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Raymundo</h3>
          <div className="text-sm ">
            Nitz
            <p className="text-sm text-gray-100">
              <div className="flex items-center justify-center">
                <FaPhone className="mr-1" />
                <span>
                  <u>+63 917 848 1649 </u>
                </span>
              </div>
            </p>
            <div className="flex items-center justify-center">
              <MdOutlinePinDrop className="mr-1" />
              <span>UERM </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Cortez</h3>
          <div className="text-sm ">
            Mean
            <p className="text-sm text-gray-100">
              <div className="flex items-center justify-center">
                <FaPhone className="mr-1" />
                <span>
                  <u>+63 918 487 3816 </u>
                </span>
              </div>
            </p>
            <div className="flex items-center justify-center">
              <MdOutlinePinDrop className="mr-1" />
              <span>St. Lukes BGC </span>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-2 flex items-center justify-center text-gray-600 font-montserrat m-1 border-t border-neutral-700">
        <TbCircleLetterC className="mr-1" />
        <span className="text-center text-sm">
          2025 Copyright | vibecoders04@gmail.com
        </span>
      </p>
    </div>
  );
};

export default Contact;
