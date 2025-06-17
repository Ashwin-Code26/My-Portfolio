import HeroImage from "../assets/My Profile.jpg";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  const name = "Ashwin";
  const title = "Frontend Web Developer";
  const description =
    "I build fast, responsive websites with clean code and intuitive interfaces. Let's create something amazing together!";

  return (
    <div
      name="home"
      className="pt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 order-1 md:order-none">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="animate-pulse text-4xl md:text-5xl font-logo bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
            {title}
          </h2>
          <p className="text-gray-300 py-4 max-w-md">{description}</p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 pl-2">
                <TbArrowBadgeRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-none">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 h-auto max-w-xs md:w-2/3 md:max-w-none shadow-[0_0_20px_4px_#00f0ff] hover:shadow-[0_0_20px_5px_#00f0ff] transition-shadow duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
