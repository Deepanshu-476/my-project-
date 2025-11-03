import React from 'react'

const About = () => {
  const cards = [
    { icon: '👨‍💻', title: 'Languages', description: 'HTML, CSS, JavaScript, React, PHP' },
    { icon: '🎓', title: 'Education', description: 'BCA in Computer Science' },
    { icon: '🚀', title: 'Projects', description: 'Built more than 5 projects' }
  ]

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 transition-colors duration-300 bg-gray-50 dark:bg-black font-poppins">
      <div className="max-w-[3500px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-8 md:gap-12 lg:gap-16">
        {/* Left Section - Text Content */}
        <div className="flex-[2] text-center lg:text-left lg:ml-[50px] order-2 lg:order-1">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
          <h1 className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            ABOUT ME
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Building Meaningful, Digital Experiences
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">creative front-end developer</span> passionate about building modern and responsive web experiences that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
              I believe in <span className="text-blue-600 dark:text-blue-400 font-semibold">continuous learning</span>, attention to detail, and the power of clean, meaningful design to create impactful digital solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Months Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Projects Completed</div> 
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center lg:justify-end lg:ml-[3in] order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-3 transition-colors duration-500">
            <img
              src="src/assets/deepanshu.jpg"
              alt="Deepanshu"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About