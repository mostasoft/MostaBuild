// components/RecentProjects.js

export default function RecentProjects() {
  const projects = [
    {
      title: "Steel Production",
      image: "/images/project1.jpg",
    },
    {
      title: "Factory Automation",
      image: "/images/project2.jpg",
    },
    {
      title: "Industrial Assembly",
      image: "/images/project3.jpg",
    },
    {
      title: "Worker Collaboration",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section className="bg-[#0b0f25] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          RECENT <span className="text-yellow-400">PROJECTS</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, mei tota movet no, mel tota dicit ut. Eius eleifend democritum duo at.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-4 text-left">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
