import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ success: null, message: '' })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ success: null, message: '' })

    emailjs
      .send(
        'service_lyp4a6q', // ← replace with your service ID
        'template_eql7e69', // ← replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'prmdNTGHVjIfmlCCl' // ← replace with your public key
      )
      .then(
        () => {
          setStatus({ success: true, message: '✅ Message sent successfully!' })
          setFormData({ name: '', email: '', message: '' })
          setLoading(false)
          setTimeout(() => setStatus({ success: null, message: '' }), 4000)
        },
        (error) => {
          console.error('❌ Email send error:', error.text)
          setStatus({
            success: false,
            message: '❌ Something went wrong, please try again later.',
          })
          setLoading(false)
          setTimeout(() => setStatus({ success: null, message: '' }), 4000)
        }
      )
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-black transition-colors duration-300 font-poppins"
    >
      <div className="max-w-[3500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            CONTACT
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Notification */}
        {status.message && (
          <div
            className={`max-w-md mx-auto mb-6 text-center py-3 px-4 rounded-lg text-white font-medium ${
              status.success
                ? 'bg-green-600'
                : 'bg-red-600'
            } transition-all duration-500`}
          >
            {status.message}
          </div>
        )}

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-10">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
                I'm always open to discussing new opportunities and creative
                projects. Let's bring your ideas to life together.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-800 dark:text-gray-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-base md:text-lg">
                  nalheradeepanshu.com
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-800 dark:text-gray-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-base md:text-lg">+91 93891 11476</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-800 dark:text-gray-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-base md:text-lg">Chandigarh, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 md:py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md text-base md:text-lg disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
