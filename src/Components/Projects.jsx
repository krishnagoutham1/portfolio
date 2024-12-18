import { projects } from "../Utils/Constants";

const Projects = () => (
  <section id="projects" className="section-main">
    <div className="mb-10">
      <h1 className="page-headings text-3xl sm:text-4xl lg:text-5xl">
        My Projects
      </h1>
      <p className="text-base sm:text-lg lg:text-xl">
        Below are some of the projects I have worked on, showcasing my skills
        and expertise in building modern web applications.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-800"
        >
          <div className="w-full min-h-48 flex items-center justify-center">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover p-1 rounded-lg"
              />
            ) : (
              <span className="text-base sm:text-lg">No Image Available</span>
            )}
          </div>

          <div className="p-2">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold line-clamp-1 text-[#00ffe5]">
              {project.title}
            </h3>
            <p className="text-sm mt-2 line-clamp-4 ">{project.description}</p>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 my-3 px-3">
              {project.git && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-base text-cyan-500 hover:text-cyan-600"
                >
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-base text-cyan-500 hover:text-cyan-600"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
