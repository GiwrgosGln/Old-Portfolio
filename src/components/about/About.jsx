import about from "../../assets/about.webp";
import resumePdf from "../../assets/resume.pdf";

export default function About() {
  return (
    <div className="bg-backgroundWhite mx-auto flex flex-col md:flex-row items-center justify-center">
      {/* Left side with image */}
      <div className="w-4/5 md:w-2/5 mx-auto relative shadow-2xl shadow-gc1">
        <img src={about} alt="About Me" className="w-full h-auto rounded-lg" />
      </div>

      {/* Right side with about me text */}
      <div className="w-screen md:mt-0 md:w-2/5 mx-auto px-5 relative">
        <h2 className="text-3xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-gc3 via-gc3 to-gc1 font-bold mb-4">
          About Me
        </h2>
        <h1 className="text-white text-3xl font-semibold mt-5">
          Software Developer
        </h1>
        <p className="text-textColor text-xl sm:text-xl md:text-xl xl:text-2xl text-justify mt-2">
          I'm a Junior Software Developer with a bachelor's degree in Computer
          Engineering from the Technological Educational Institute of Kavala.
          Passionate about crafting engaging web/mobile apps and dynamic user
          interfaces using React and React Native. While my main focus is on the
          front end, I've also explored backend development, creating
          small-scale projects with C# (.NET), Node/Express and Go (Gin) to
          build RESTful APIs.
        </p>
      </div>
    </div>
  );
}
