import HomeImg from "../assets/HomeImg.png";
import { ReactTyped } from "react-typed";

const Home = () => (
  <section id="home" className="section-main flex items-center justify-between">
    <div className="flex items-center justify-between">
      <div className="w-full md:w-[50%] lg:w-[50%]">
        <h1 className="text-2xl lg:text-4xl font-bold">Hello There 👋, I am</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 primary-focus">
          Krishna Goutham
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "React.js Developer",
              "MERN Stack Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
        <div>
          <p>
            I&apos;m a Frontend Developer with a passion for building
            interactive and user-friendly web applications. If you&apos;d like
            to collaborate, feel free to reach out!
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-md transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg shadow-md transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-[50%] lg:w-[45%] hidden md:block">
        <img src={HomeImg} alt="Home" />
      </div>
    </div>
  </section>
);

export default Home;
