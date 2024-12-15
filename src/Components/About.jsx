import { Tilt } from "react-tilt";
import { socialLinks, tiltAbout } from "../Utils/Constants";

const About = () => (
  <section id="about" className="section-main">
    <h1 className="text-center text-3xl font-bold mb-3">About</h1>
    <div className="">
      <ul className="list-disc list-inside text-lg leading-relaxed">
        <li>
          Passionate and detail-oriented Front-End Developer with 3+ years of
          experience in building dynamic, responsive, and high-performance web
          applications using ReactJS, Redux, and JavaScript.
        </li>
        <li>
          Specialized in creating reusable components, managing state with
          Redux, seamless API integration, and optimizing performance for
          exceptional user experiences.
        </li>
        <li>
          Proficient in authentication, session management, and enhancing
          application efficiency and scalability, with a strong commitment to
          contributing to impactful projects in collaborative environments.
        </li>
      </ul>
    </div>

    <div className="flex flex-wrap justify-center gap-8 mb-16">
      {tiltAbout.map((tilt, index) => (
        <Tilt key={index}>
          <div className="tilt-gradient rounded-lg shadow-lg p-[1px]">
            <div className="bg-gray-800 rounded-lg py-6 px-8 flex justify-evenly items-center flex-col w-72 h-80">
              <img
                src={tilt.cardImg}
                alt={tilt.cardName}
                className="w-16 h-16 mb-4 bg-white rounded-full"
              />
              <h3 className="text-xl font-bold">{tilt.cardName}</h3>
            </div>
          </div>
        </Tilt>
      ))}
    </div>

    <div className="flex justify-center gap-8">
      {socialLinks.map((links, index) => (
        <a
          key={index}
          href={links.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition-transform duration-300"
        >
          {links.icon}
        </a>
      ))}
    </div>
  </section>
);

export default About;
