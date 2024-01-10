import about from "../../assets/about.webp";
import resumePdf from "../../assets/resume.pdf";

export default function About() {
  return (
    <div className="container mx-auto mt-5 md:mt-12 flex flex-col md:flex-row items-center md:py-20">
      {/* Left side with image */}
      <div className="w-4/5 md:w-2/5 mx-auto">
        <img src={about} alt="About Me" className="w-full h-auto rounded-lg" />
      </div>

      {/* Right side with about me text */}
      <div className="w-screen mt-10 md:mt-0 md:w-2/5 mx-auto text-justify px-5">
        <h2 className="text-xl text-blue-500 font-bold">About Me</h2>
        <h2 className="text-3xl text-textColor font-bold mb-4">
          Software Developer
        </h2>
        <p className="text-textColor text-xl sm:text-xl md:text-xl xl:text-2xl">
          I'm a Junior Front-End Developer with a bachelor's degree in Computer
          Engineering from the Technological Educational Institute of Kavala.
          Passionate about crafting engaging web/mobile apps and dynamic user
          interfaces using React and React Native. While my main focus is on the
          front end, I've also explored backend development, creating
          small-scale projects with Node/Express and Go (Gin) to build RESTful
          APIs.
        </p>

        {/* Button to download resume as PDF */}
        <a
          href={resumePdf}
          download="Georgios_Glinias_CV.pdf"
          className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded-md hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
