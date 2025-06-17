const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hey! I’m a frontend developer who loves turning ideas into clean,
          responsive websites. I’ve been learning HTML, CSS, JavaScript,
          Tailwind CSS, and React—and I’m really enjoying the process.
        </p>

        <br />

        <p className="text-xl">
          Right now, I’m focused on improving my React skills and learning more
          about modern frontend tools. I’m always excited to build cool stuff,
          take on new challenges, and keep growing as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
