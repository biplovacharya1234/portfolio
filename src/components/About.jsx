import React from "react";

const About = () => {
  const skills = [
    { name: "HTML/CSS", image: "src/assets/icons/ruler-pen.png" },
    { name: "Javascript", image: "src/assets/icons/ruler-pen.png" },
    { name: "React js", image: "src/assets/icons/ruler-pen.png" },
    { name: "Next js", image: "src/assets/icons/ruler-pen.png" },
  ];
  return (
    <>
      <div className="px-7 md:px-10 sm:mt-24" id="about">
        <h1 className="text-3xl mt-5 text-yellow-400 font-semibold">
          About me
        </h1>
        <p className="text-white my-2 md:w-2/3">
          Hi, my name is Biplov Acharya, I am a Front End Developer specializing
          in React and Next js. Here are the major skiills i have.{" "}
        </p>
        {/* expreince section */}
        {/* <div>
          <p className="text-white text-2xl md:ml-5 ">
            Specialized in building web apps using React and Next js
          </p>
        </div> */}

        {/* skill card */}
        <div className="flex flex-col md:flex-row">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills md:w-[256px] md:h-[254px] bg-light hover:bg-yellow-400 flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500"
            >
              <img src={skill.image} alt="" />
              <p className="text-2xl mt-3 text-black font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
