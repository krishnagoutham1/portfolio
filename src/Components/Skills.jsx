import { skillsData } from "../Utils/Constants";

const Skills = () => (
  <section id="skills" className="section-main">
    <div>
      <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
      <p className="text-xl mb-12">
        I have expertise in the following technologies, tools, and libraries,
        which allow me to build modern, scalable, and responsive web
        applications.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skillsData.map((skills, index) => (
        <div key={index} className="flex flex-col items-center">
          <div>{skills.icon}</div>
          <span className="text-lg font-semibold">{skills.skillName}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
