import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 500)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])
  if (!isVisible) return null
  return (
    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:scale-110 transition-all">
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  )
}

export default BackToTop
