import { Team } from "./Team";

function App() {
  return (
    <div className="bg-white h-full w-full flex flex-col p-8 lg:p-16 xl:px-32 2xl:px-64 justify-center items-center text-center min-h-screen border-[2rem] border-slate-50">

      {/* <img src={logo} className="lg:h-40 h-24 lg:mb-12 mb-8 align-self-start justify-self-start text-left mr-auto" alt="logo" /> */}


      <div className="xl:text-3xl xs:text-2xl max-w-5xl lg:space-y-8 space-y-4 font-mono">
        <div className="mb-32">

          <p className="font-marker font-bold lg: text-xxl xs:text-6xl text-3xl text-fade-in delay-1 opacity-0 relative text-shadow-hd">
            The Evil Media Empire
          </p>
          <p className="px-1 font-normal my-8 text-fade-in delay-2 opacity-0">Building for the metaverse ... one JPEG at a time</p>
        </div>
        <div className="team text-fade-in delay-3 opacity-0">
          Team
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-40 gap-x-6 mt-4 text-xl text-fade-in delay-3 opacity-0">
          {Team.map((member, index) => {
            return (
              <div className="flex flex-col text-center" key={index}>
                <p className="font-bold py-2 md:text-2xl text-xl">{member.title}</p>
                <p className="font-normal py-2">{member.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
