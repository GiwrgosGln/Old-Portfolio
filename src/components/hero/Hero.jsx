import avatar from "../../assets/Avatar.webp";
import javascript from "../../assets/tech-stack/JavaScript.webp";
import typescript from "../../assets/tech-stack/TypeScript.webp";
import react from "../../assets/tech-stack/React.webp";
import tailwindcss from "../../assets/tech-stack/TailwindCSS.webp";
import vite from "../../assets/tech-stack/Vite.webp";
import next from "../../assets/tech-stack/Next.webp";
import expo from "../../assets/tech-stack/Expo.webp";
import redux from "../../assets/tech-stack/Redux.webp";
import mongodb from "../../assets/tech-stack/MongoDB.webp";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col lg:mt-32 items-center bg-backgroundWhite">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="px-10 mt-5 flex flex-col">
          <h1 className="text-textColor text-3xl md:text-6xl font-bold w-full md:w-2/3 leading-tight">
            Front-End React Developer
          </h1>
          <p className="text-textColor text-xl sm:text-xl md:text-2xl md:w-2/3 mt-4">
            Hi, I'm George Glinias. A passionate Frontend React Developer based
            in Alexandroupoli, Greece. 📍
          </p>
        </div>
        <div>
          <img
            src={avatar}
            alt="Logo"
            className="h-52 w-52 mt-10 sm:h-72 sm:w-72 md:w-96 md:h-96 md:mt-0 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col mt-5 md:flex-row md:mt-20 2xl:mt-60 items-center gap-10">
        <div>
          <h1 className="text-textColor text-3xl md:text-4xl font-bold">
            Tech Stack
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <div className="flex flex-row gap-1">
            <img
              src={javascript}
              alt="JavaScript"
              title="JavaScript"
              className="h-16 rounded-2xl"
            />
            <img
              src={typescript}
              alt="TypeScript"
              title="TypeScript"
              className="h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-row gap-1">
            <img
              src={react}
              alt="React"
              title="React"
              className="h-16 rounded-2xl"
            />
            <img
              src={tailwindcss}
              alt="Tailwind CSS"
              title="Tailwind CSS"
              className="h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-row gap-1">
            <img
              src={vite}
              alt="Vite"
              title="Vite"
              className="h-16 rounded-2xl"
            />
            <img
              src={next}
              alt="Next"
              title="Next"
              className="h-16 rounded-2xl"
            />
            <img
              src={expo}
              alt="React Native - Expo"
              title="React Native - Expo"
              className="h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-row gap-1">
            <img
              src={redux}
              alt="Redux"
              title="Redux"
              className="h-16 rounded-2xl"
            />
            <img
              src={mongodb}
              alt="MongoDB"
              title="MongoDB"
              className="h-16 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
