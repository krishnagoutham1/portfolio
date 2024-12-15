import { projects } from "../Utils/Constants";

const Projects = () => (
  <section id="projects" className="section-main">
    <div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          My Projects
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Below are some of the projects I have worked on, showcasing my skills
          and expertise in building modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-full min-h-48 bg-gray-700 flex items-center justify-center">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-gray-500 text-lg">
                  No Image Available
                </span>
              )}
            </div>

            {/* Project Content */}
            <div className="p-3">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-lg text-gray-400 mt-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-5 my-6">
                {project.git && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
