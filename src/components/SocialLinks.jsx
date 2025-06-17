import React, { useState } from "react";
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { motion } from "framer-motion";
import Resume from "../assets/MyResume/CV.pdf";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Small screens: Floating Button */}
      <div className="flex lg:hidden fixed bottom-8 right-8 flex-col items-end space-y-2 z-50">
        {/* Links */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex flex-col space-y-3 mb-2"
          >
            <a
              href="https://www.linkedin.com/in/ashwin-developer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-blue-600"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/Ashwin-Code26"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-500"
            >
              <FaGithubSquare size={25} />
            </a>
            <a
              href="mailto:ashwin26u@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Send Email"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-red-500"
            >
              <IoMdMail size={25} />
            </a>
            <a
              href={Resume}
              download
              target="_blank"
              rel="noreferrer"
              aria-label="Download Resume"
              className="bg-gray-700 p-2 rounded-full text-white hover:bg-green-600"
            >
              <GrNotes size={25} />
            </a>
          </motion.div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-cyan-400 p-4 rounded-full text-white shadow-lg hover:bg-blue-500 transition duration-500"
          aria-label="Toggle Social Links"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Large screens: Sidebar Links */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="https://linkedin.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="https://github.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub <FaGithubSquare size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="mailto:example@example.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="Send Email"
            >
              Mail <IoMdMail size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href={Resume}
              className="flex justify-between items-center w-full text-white"
              download
              target="_blank"
              rel="noreferrer"
              aria-label="Download Resume"
            >
              Resume <GrNotes size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
