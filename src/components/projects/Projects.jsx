import annecy from "../../assets/annecy.webp";
import expofit from "../../assets/expofit.webp";
import goapi from "../../assets/goapi.webp";

export default function Projects() {
  return (
    <div className="h-2/3 flex flex-col items-center align-center bg-backgroundWhite">
      <h1 className="text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-gc3 via-gc3 to-gc1 font-bold mt-40">
        Projects
      </h1>
      <div className="flex flex-col mt-5 md:mt-10 relative lg:flex-row gap-10">
        <div className="h-auto w-80 lg:w-80 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={annecy}
            className="rounded-xl p-1"
            style={{ height: "200px", width: "400px" }}
            alt="Annecy"
          />
          <h1 className="text-center text-3xl">Annecy</h1>
          <ul className="flex flex-wrap gap-5 justify-center">
            <li className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-md text-center">
              HTML
            </li>
            <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-center">
              CSS
            </li>
            <li className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-md text-center">
              JavaScript
            </li>
          </ul>
          <p className="text-center text-xl px-2">
            Developed an Airbnb website based in Alexandroupoli.
          </p>

          <a
            href="https://annecy-apartment.com/"
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-3xl w-20 text-center font-sem"
          >
            Demo
          </a>
        </div>
        <div className="h-auto w-80 lg:w-96 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={expofit}
            className="rounded-xl p-1"
            style={{ height: "200px", width: "400px" }}
            alt="ExpoFit"
          />
          <h1 className="text-center text-3xl">ExpoFit</h1>
          <ul className="flex flex-wrap gap-5 justify-center">
            <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-center">
              React Native
            </li>
            <li className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-md text-center">
              Expo
            </li>
          </ul>
          <p className="text-center text-xl px-2">
            Crafted a React Native app for easy workout tracking.
          </p>

          <a
            href="https://github.com/GiwrgosGln/ExpoFit"
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-3xl w-20 text-center"
          >
            GitHub
          </a>
        </div>
        <div className="h-auto w-80 lg:w-96 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={goapi}
            className="rounded-xl p-1"
            style={{ height: "200px", width: "400px" }}
            alt="GinFitAPI"
          />
          <h1 className="text-center text-3xl">GinFitAPI</h1>

          <ul className="flex flex-wrap gap-5 justify-center">
            <li className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-md text-center">
              Golang
            </li>
            <li className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md text-center">
              MongoDB
            </li>
            <li className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-2 rounded-md text-center">
              Docker
            </li>
          </ul>
          <p className="text-center text-xl px-2">
            Developed a Golang API with MongoDB.
          </p>

          <a
            href="https://github.com/GiwrgosGln/GinFitAPI"
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-3xl w-20 text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
