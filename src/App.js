import Form from "./components/form";

const App = () => {

  return (
    <div className="w-screen min-h-screen bg-[#ff7a7a] bg-image pb-12 flex flex-col lg:items-center lg:justify-center relative">
      <div className="flex flex-col lg:flex-row lg:w-11/12 xl:w-4/5">
        <div className="flex justify-center pt-12 text-center lg:w-1/2 lg:text-start">
          <div className="w-11/12 lg:w-full lg:ml-12 lg:self-center">
            <h1 className="text-white text-2xl font-bold lg:text-[3.2rem] lg:leading-none">Learn to code by <br/> watching others</h1>
            <p className="text-white text-sm p-5 lg:p-0 lg:text-base lg:mt-8">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
        </div>

        <div className="lg:w-3/5">
          <div className="flex justify-center">
            <button className="bg-[#6055a5] rounded-md drop-shadow-[0_8px_2px_rgba(0,0,0,0.2)] mx-6 p-6 w-4/5 md:w-2/3 lg:p-4"><p className="text-white text-sm mx-3"><span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter </p></button>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 text-center w-full">
        <p className="text-[0.5rem] lg:text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/anachkhaidze0" target="_blank" rel="noreferrer">Ana Chkhaidze</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
