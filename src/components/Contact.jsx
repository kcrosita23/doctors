import { CONTACT } from "../constants";
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

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-1 text-center">
        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Hipolito</h3>
          <p className="text-sm ">
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
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Raymundo</h3>
          <p className="text-sm ">
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
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-1 mt-6 ">Dr. Cortez</h3>
          <p className="text-sm ">
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
          </p>
        </div>
      </div>
      {/*div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b">{CONTACT.email}</a>
            </div>
            */}
      <p className="pt-6 flex items-center justify-center text-gray-500 font-montserrat  m-1">
        <TbCircleLetterC className="mr-1" />
        <span>2025 Copyright | vibecoders04@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;
