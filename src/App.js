import { Team } from "./Team";

function App() {

  function polygon(index) {
    if (index == 0) return (
      <svg viewBox="0 0 100 50">
        <circle cx="50" cy="25" r="20" stroke="#FFFFFF" />
      </svg>
    )
    else if (index == 1) return (
      <svg viewBox="0 0 100 50">
        <polygon points="50, 10 30, 45 70, 45" stroke="#FFFFFF" />
      </svg>
    )
    return (
      <svg viewBox="0 0 100 50">
        <rect x="30" y="5" width="40" height="40" stroke="#FFFFFF" />
      </svg>
    )
  }
  return (
    <div className="bg-black h-full w-full flex flex-col p-8 lg:p-16 xl:px-32 2xl:px-64 justify-center items-center text-center min-h-screen">

      {/* <img src={logo} className="lg:h-40 h-24 lg:mb-12 mb-8 align-self-start justify-self-start text-left mr-auto" alt="logo" /> */}


      <div className="xl:text-3xl xs:text-2xl text-xl max-w-8xl lg:space-y-8 space-y-4 font-mono text-white">
        <div className="mb-16">

          <p className="font-bold lg:text-xxl xs:text-6xl text-3xl text-fade-in delay-1 opacity-0 relative text-shadow-hd">
            Evil Media Empire
          </p>
          <p className="px-1 font-normal my-8 text-fade-in delay-2 opacity-0 xs:text-lg text-base">Building for the metaverse ... </p>
        </div>
        <div className="team text-fade-in delay-3 opacity-0 font-bold text-3xl">
          Team
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-x-40 gap-x-20 mt-4 text-xl text-fade-in delay-3 opacity-0">
          {Team.map((member, index) => {
            return (
              <div className="flex flex-col text-center my-5" key={index}>
                {polygon(index)}

                <a href={member.twitter}>
                  <p className="font-bold py-2 md:text-2xl text-xl"><u>{member.title}</u>
                  </p>
                </a>
                <p className="font-normal xs:text-lg text-sm py-2">{member.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="xl:text-1xl xs:text-1xl text-xl max-w-8xl lg:space-y-8 space-y-4 font-mono text-white">
          <div className="team text-fade-in delay-3 opacity-0 font text-sm">
            hello@evilmediaempire.io
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
