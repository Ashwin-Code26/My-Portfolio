import Todo from "../assets/Portfolio/Todo-App.png";
import Weather from "../assets/Portfolio/Weather.png";
import Games from "../assets/Portfolio/Games.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Todo,
      alt: "Todo App",
      href: "https://Ashwin-web-ux.github.io/todo-app/",
      tech: ["Deepseek", "React"],
    },
    {
      id: 2,
      src: Games,
      alt: "Games App",
      tech: ["Demo", "Code"],
    },
    {
      id: 3,
      src: Weather,
      alt: "Weather App",
      tech: ["Demo", "Code"],
    },
    {
      id: 4,
      src: Games,
      alt: "Parallax App",
      tech: ["Demo", "Code"],
    },
    {
      id: 5,
      src: Games,
      alt: "Random Game",
      tech: ["Demo", "Code"],
    },
    {
      id: 6,
      src: Games,
      alt: "Another Game",
      tech: ["JavaScript", "HTML,CSS"],
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, alt, tech, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>
              ) : (
                <img
                  src={src}
                  alt={alt}
                  className="rounded-md duration-200 hover:scale-105"
                />
              )}
              <div className="flex items-center justify-center">
                {tech.map((t, index) => (
                  <button
                    key={index}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
