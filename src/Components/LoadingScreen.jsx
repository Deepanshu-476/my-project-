import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [visibleElements, setVisibleElements] = useState({
    loadingText: false,
    mainIcon: false,
    subIcons: [false, false, false, false],
    designerText: false
  })

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleElements(prev => ({ ...prev, loadingText: true })), 0),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, mainIcon: true })), 800),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, subIcons: [true, false, false, false] })), 1600),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, subIcons: [true, true, false, false] })), 2000),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, subIcons: [true, true, true, false] })), 2400),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, subIcons: [true, true, true, true] })), 2800),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, designerText: true })), 3200),
    ]

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 text-cyan-400 text-center">
      <div className="loading-content">
        <h1 className={`mb-5 text-2xl md:text-3xl font-bold transition-all duration-900 ${
          visibleElements.loadingText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-50'
        }`}>
          Welcome To My Profile
        </h1>
        
        <div className={`mb-8 transition-all duration-900 ${
          visibleElements.mainIcon ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-50'
        }`}>
          <i className="fa-solid fa-code text-3xl"></i>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          {['fa-html5', 'fa-css3-alt', 'fa-js', 'fa-react'].map((icon, index) => (
            <i 
              key={icon}
              className={`fa-brands ${icon} text-xl transition-all duration-900 ${
                visibleElements.subIcons[index] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-50'
              }`}
            ></i>
          ))}
        </div>
        
        <h2 className={`text-xl transition-all duration-900 ${
          visibleElements.designerText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-50'
        }`}>
          Frontend Developer
        </h2>
      </div>
    </div>
  )
}

export default LoadingScreen