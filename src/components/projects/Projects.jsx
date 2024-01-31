import annecy from "../../assets/annecy.webp";
import expofit from "../../assets/expofit.webp";
import goapi from "../../assets/goapi.webp";

export default function Projects() {
  return (
    <div className="h-2/3 flex flex-col items-center align-center bg-backgroundWhite">
      <h1 className="text-3xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-gc3 via-gc3 to-gc1 font-bold mt-10">
        Projects
      </h1>
      <div className="flex flex-col mt-40 relative lg:flex-row gap-10">
        <div className="h-auto w-80 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={annecy}
            className=" h-52 w-full rounded-xl p-1"
            alt="Annecy"
          />
          <h1 className="text-center text-3xl">Annecy</h1>
          <p className="text-center text-xl px-2">
            Developed an Airbnb website based in Alexandroupoli.
          </p>
          <a
            href="https://annecy-apartment.com/"
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-3xl w-20 text-center"
          >
            Demo
          </a>
        </div>
        <div className="h-auto w-80 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={expofit}
            className=" h-52 w-full rounded-xl p-1"
            alt="ExpoFit"
          />
          <h1 className="text-center text-3xl">ExpoFit</h1>
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
        <div className="h-auto w-80 bg-gc1 flex flex-col rounded-xl items-center gap-5 p-2 pb-5">
          <img
            src={goapi}
            className=" h-52 w-full rounded-xl p-1"
            alt="GinFitAPI"
          />
          <h1 className="text-center text-3xl">GinFitAPI</h1>
          <p className="text-center text-xl px-2">
            Developed a Gin API seamlessly with MongoDB.
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
