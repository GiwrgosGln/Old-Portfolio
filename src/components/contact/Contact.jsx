import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="h-auto bg-navbarWhite flex flex-col justify-center items-center px-20 md:px-96 py-40 ">
      <h1 className="text-3xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 font-bold px-20">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row mt-10 items-center gap-5 md:gap-20 px-0 md:px-20">
        <div className="flex flex-row items-center gap-5">
          <div className="p-3 shadow-md rounded-xl">
            <FaLinkedin size={40} color={"#2196F3"} />
          </div>
          <h1 className="text-textColor font-semibold text-lg">
            Giwrgos Glinias
          </h1>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="p-3 shadow-md rounded-xl">
            <MdEmail size={40} color={"#2196F3"} />
          </div>
          <h1 className="text-textColor font-semibold text-lg">
            georgios.glinias@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
}
