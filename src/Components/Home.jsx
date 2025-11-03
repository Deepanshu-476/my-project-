import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black pt-16 md:pt-20 lg:pt-24 transition-colors duration-500 font-poppins"
    >
      <div className="max-w-[3500px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-8 md:gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="flex-[2] text-center lg:text-left lg:ml-[50px] order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-6">
            Hi, I'm Deepanshu
          </h2>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">creative front-end developer</span> passionate about building modern and responsive web experiences that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
              I believe in <span className="text-blue-600 dark:text-blue-400 font-semibold">continuous learning</span>, attention to detail, and the power of clean, meaningful design to create impactful digital solutions.
            </p>
          </div>

          {/* Location and Availability */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 mb-6 md:mb-8 text-gray-800 dark:text-gray-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-blue-600 text-lg md:text-xl" />
              <span>Based in Chandigarh</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineBriefcase className="text-blue-600 text-lg md:text-xl" />
              <span>Available Now</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 md:mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md text-sm md:text-base group"
            >
              <FiArrowRight className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              Hire Me
            </a>
            <a
              href="src/assets/DeepanshuCV.pdf"
              download
              className="inline-flex items-center justify-center border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 text-sm md:text-base group"
            >
              <FiDownload className="mr-2 transform group-hover:-translate-y-1 transition-transform duration-300" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-5 text-gray-800 dark:text-gray-200 transition-colors duration-500 text-sm md:text-base">
            <span className="font-medium">Follow me:</span>
            <div className="flex gap-4 text-xl md:text-2xl">
              <a
                href="https://github.com/Deepanshu-476"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/deepanshu-kumar-347b78350/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 lg:ml-[3in]">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-3 transition-colors duration-500 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src="src/assets/deepanshu.jpg"
                alt="Deepanshu"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-600/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;