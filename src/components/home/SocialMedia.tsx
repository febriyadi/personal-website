// Import Icons & PDF
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const myCV = require("../../assets/cv-febriyadi.pdf");



const SocialMedia: React.FC = () => {

  return (
    <div className="flex flex-col lg:items-start items-center gap-12">
      <div className="flex items-center md:gap-10 gap-7">
        <a
          href="https://github.com/febriyadi"
          target="_blank"
          className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer" rel="noreferrer"
        >
          <FaGithub
            color={"#268B6C"}
            className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/febriyadi-/"
          target="_blank"
          className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer" rel="noreferrer"
        >
          <FaLinkedinIn
            color={"#268B6C"}
            className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
          />
        </a>
        <a
          href="https://www.instagram.com/mhmd_febriyadi/"
          target="_blank"
          className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer" rel="noreferrer"
        >
          <AiFillInstagram
            color={"#268B6C"}
            className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
          />
        </a>
        <a
          href="mailto:febriyadi05@gmail.com"
          target="_blank"
          className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer" rel="noreferrer"
        >
          <MdEmail
            color={"#268B6C"}
            className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
          />
        </a>
      </div>
      <div>
        <a
          href={myCV}
          className="text-white font-semibold px-4 py-3 md:text-base text-xs bg-secondGreen hover:bg-hoverGreen rounded-tl-md rounded-br-md transition-all duration-500 ease-out cursor-pointer"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
