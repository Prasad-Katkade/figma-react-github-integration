import "./App.css";

function App() {
  return (
    <div className="h-screen w-full bg-slate-200 flex justify-center">
      <div className="h-80 bg-white mt-44">
        <p className="text-2xl font-semibold text-center p-4">
          Figma Github Integration Demo
        </p>
        <p className="text-xl font-semibold text-center p-4">
          Figma Tokens + React + Tailwind
        </p>
        <div className="flex flex-col gap-y-2 p-4">
          <button className="w-full bg-primary rounded-custom hover:opacity-90 text-white font-semibold cursor-pointer p-2">
            Primary
          </button>
          <button className="w-full bg-success rounded-custom  hover:opacity-90 text-white font-semibold cursor-pointer p-2">
            Success
          </button>
          <button className="w-full bg-error rounded-custom  hover:opacity-90 text-white font-semibold cursor-pointer p-2">
            Error
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
