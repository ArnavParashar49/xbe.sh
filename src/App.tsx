import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './components/background-beams'
import { Spotlight } from './components/Spotlight'
import { Button as MovingBorderButton } from './components/ui/moving-border'
import { useLenis } from './hooks/useLenis'

function App() {
  const [userOS, setUserOS] = useState('Windows')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Initialize Lenis smooth scroll
  useLenis()

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase()
      
      if (userAgent.includes('mac')) {
        return 'macOS'
      } else if (userAgent.includes('linux')) {
        return 'Linux'
      } else if (userAgent.includes('win')) {
        return 'Windows'
      } else {
        return 'Windows' // Default fallback
      }
    }

    setUserOS(detectOS())
  }, [])

  const getOSIcon = () => {
    switch (userOS) {
      case 'macOS':
  return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      case 'Linux':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2c-1.74 0-3.5.85-3.5 2.5 0 .43.1.85.29 1.21C6.27 7.6 4 10.5 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.5-2.27-6.4-5.29-8.29.19-.36.29-.78.29-1.21C15 2.85 13.24 2 12.5 2zm0 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM12 6c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6z"/>
          </svg>
        )
      default: // Windows
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
          </svg>
        )
    }
  }

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button 
              onClick={() => {
                const topElement = document.getElementById('top');
                if (topElement) {
                  topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/logo-dark-styled.png" 
                alt="xbe.sh logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">xbe.sh</span>
            </button>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                Features
              </a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                Pricing
              </a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                FAQs
              </a>
            </nav>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
      </div>
        </div>
      </header>

        {/* Hero Section */}
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Effects */}
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20 z-10" fill="rgba(139, 92, 246, 0.4)" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Announcement Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <MovingBorderButton
              borderRadius="1.75rem"
              className="bg-slate-950/90 backdrop-blur-sm text-purple-300 border-slate-700/30 px-8 py-4"
              containerClassName="h-14 w-auto"
              duration={8000}
            >
              Introducing the future of development
            </MovingBorderButton>
          </motion.div>
          
          {/* Hero Title */}
          <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                    >
                      xbe.sh is the revolutionary
                      <span className="text-gradient block">AGENTIC IDE</span>
                    </motion.h2>
          
          {/* Hero Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            An AI partner that autonomously codes, tests, and deploys your app on any stack.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            {/* Primary Action Button */}
            <motion.button 
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 min-w-[200px] justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {getOSIcon()}
              <span>Download for {userOS}</span>
            </motion.button>

            {/* Secondary Action Button */}
            <motion.a 
              href="/downloads"
              className="bg-black/40 backdrop-blur-md border border-gray-600/50 hover:bg-black/60 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl min-w-[160px] inline-block text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              All Downloads
            </motion.a>
          </motion.div>
          
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
                />
                
              </main>

              {/* Features Section */}
              <section id="features" className="relative py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
                {/* Advanced Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.05),transparent_50%)]"></div>
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  {/* Section Header */}
                  <div className="text-center mb-32">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
                    >
                      <span className="text-purple-300 text-sm font-medium tracking-wide">REVOLUTIONARY FEATURES</span>
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                    >
                      The Future of
                      <span className="text-gradient block">Development</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                      Six revolutionary capabilities that redefine what's possible in software development. 
                      Experience the next generation of intelligent, autonomous development tools.
                    </motion.p>
                  </div>

                  {/* Features Grid */}
                  <div className="space-y-48">
                    
                    {/* Feature 1: The Agentic Core */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8"
                      >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-purple-300 text-sm font-medium tracking-wider">01 • AGENTIC CORE</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Intelligent
                          <span className="text-gradient block">Automation</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Our AI agent transcends simple code completion. It understands context, architects solutions, 
                          and executes complex development workflows autonomously—transforming ideas into production-ready code.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            "Deep contextual understanding",
                            "Multi-step task orchestration", 
                            "Autonomous problem resolution"
                          ].map((feature, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center group"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        {/* Glowing Glass Container */}
                        <div className="relative">
                          {/* Glow Effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-lg"></div>
                          
                          {/* Glass Container */}
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                              <div className="text-center space-y-6">
                                <motion.div 
                                  animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 10, -10, 0]
                                  }}
                                  transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                  className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/10"
                                >
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                  </svg>
                                </motion.div>
                                <div className="space-y-2">
                                  <p className="text-white text-lg font-semibold">Multi-Agent Workflow</p>
                                  <p className="text-gray-400 text-sm">Autonomous task execution in progress</p>
                                </div>
                                {/* Animated Progress Bars */}
                                <div className="space-y-2 w-full max-w-xs mx-auto">
                                  {[60, 85, 40].map((width, i) => (
                                    <div key={i} className="h-1 bg-slate-700/50 rounded-full overflow-hidden">
                                      <motion.div 
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${width}%` }}
                                        transition={{ duration: 2, delay: i * 0.3 }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Floating Particles */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                                style={{
                                  left: `${20 + i * 15}%`,
                                  top: `${30 + (i % 2) * 40}%`,
                                }}
                                animate={{
                                  y: [0, -20, 0],
                                  opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                  duration: 3 + i * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Feature 2: Live Preview Engine */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="relative group lg:order-1"
                      >
                        {/* Glowing Glass Container */}
                        <div className="relative">
                          {/* Glow Effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-3xl blur-lg"></div>
                          
                          {/* Glass Container */}
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl"></div>
                            
                            {/* Content - Split Screen Mockup */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                              <div className="grid grid-cols-2 gap-4 w-full h-full">
                                {/* Code Side */}
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                                  <div className="space-y-2">
                                    <div className="flex space-x-1">
                                      <div className="w-2 h-2 bg-red-400/60 rounded-full"></div>
                                      <div className="w-2 h-2 bg-yellow-400/60 rounded-full"></div>
                                      <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
                                    </div>
                                    <div className="space-y-1">
                                      {[80, 60, 90, 40].map((width, i) => (
                                        <motion.div 
                                          key={i}
                                          className="h-1 bg-gradient-to-r from-pink-400/40 to-transparent rounded"
                                          style={{ width: `${width}%` }}
                                          initial={{ scaleX: 0 }}
                                          whileInView={{ scaleX: 1 }}
                                          transition={{ duration: 1, delay: i * 0.2 }}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                {/* Preview Side */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                  <motion.div 
                                    className="w-full h-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg flex items-center justify-center"
                                    animate={{ 
                                      scale: [1, 1.02, 1],
                                      opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{ 
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  >
                                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/>
                                    </svg>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Connection Lines */}
                            <motion.div 
                              className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-pink-500/60 to-orange-500/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                              animate={{ 
                                scaleX: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:order-2"
                      >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-pink-300 text-sm font-medium tracking-wider">02 • LIVE PREVIEW</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Real-Time
                          <span className="text-gradient block">Development</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Experience instantaneous feedback with revolutionary preview technology. Lightning-fast HMR for web, 
                          embedded emulators for mobile—see your changes come to life as you code.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            "Instant Hot Module Replacement",
                            "Embedded mobile emulators", 
                            "Real-time device streaming"
                          ].map((feature, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center group"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Feature 3: DevOps & Automation */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8"
                      >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-orange-300 text-sm font-medium tracking-wider">03 • DEVOPS AUTOMATION</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Pipeline
                          <span className="text-gradient block">Orchestration</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Design, build, and manage CI/CD pipelines with visual simplicity. Our intelligent pipeline builder 
                          creates complex workflows while our agent optimizes infrastructure and deployment strategies.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            "Visual pipeline builder",
                            "Multi-cloud deployment", 
                            "Automated testing & QA"
                          ].map((feature, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center group"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        {/* Glowing Glass Container */}
                        <div className="relative">
                          {/* Glow Effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-3xl blur-lg"></div>
                          
                          {/* Glass Container */}
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl"></div>
                            
                            {/* Content - Pipeline Nodes */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                              <div className="flex items-center space-x-6">
                                {['Build', 'Test', 'Deploy'].map((stage, i) => (
                                  <div key={stage} className="flex items-center">
                                    <motion.div 
                                      className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                                      animate={{ 
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                          "0 0 0 rgba(251, 146, 60, 0.4)",
                                          "0 0 20px rgba(251, 146, 60, 0.4)",
                                          "0 0 0 rgba(251, 146, 60, 0.4)"
                                        ]
                                      }}
                                      transition={{ 
                                        duration: 2,
                                        delay: i * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                      }}
                                    >
                                      <div className="text-center">
                                        <div className="w-6 h-6 bg-orange-400/60 rounded-lg mx-auto mb-1"></div>
                                        <span className="text-xs text-white font-medium">{stage}</span>
                                      </div>
                                    </motion.div>
                                    {i < 2 && (
                                      <motion.div 
                                        className="w-8 h-0.5 bg-gradient-to-r from-orange-500/60 to-amber-500/60 mx-3"
                                        animate={{ 
                                          scaleX: [0, 1, 0],
                                          opacity: [0, 1, 0]
                                        }}
                                        transition={{ 
                                          duration: 3,
                                          delay: i * 0.8,
                                          repeat: Infinity,
                                          ease: "easeInOut"
                                        }}
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Status Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-orange-400/40 rounded-full"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Feature 4: Autonomous Debugging */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="relative group lg:order-1"
                      >
                        {/* Glowing Glass Container */}
                        <div className="relative">
                          {/* Glow Effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-lg"></div>
                          
                          {/* Glass Container */}
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl"></div>
                            
                            {/* Content - Debug Process */}
                            <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                              {/* Error Detection */}
                              <motion.div 
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                              >
                                <motion.div 
                                  className="w-4 h-4 bg-red-500/60 rounded-full"
                                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-red-400 text-sm">Error detected in line 42</span>
                              </motion.div>
                              
                              {/* Analysis */}
                              <motion.div 
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                              >
                                <motion.div 
                                  className="w-4 h-4 bg-yellow-500/60 rounded-full"
                                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                />
                                <span className="text-yellow-400 text-sm">Analyzing root cause...</span>
                              </motion.div>
                              
                              {/* Fix Applied */}
                              <motion.div 
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                              >
                                <motion.div 
                                  className="w-4 h-4 bg-green-500/60 rounded-full"
                                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                  transition={{ duration: 2, delay: 1, repeat: Infinity }}
                                />
                                <span className="text-green-400 text-sm">Fix applied automatically</span>
                              </motion.div>
                              
                              {/* Test Results */}
                              <div className="pt-4 border-t border-white/10">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-gray-400">Tests</span>
                                  <motion.span 
                                    className="text-green-400"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}
                                  >
                                    ✓ 24 passing
                                  </motion.span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Pulse Effect */}
                            <motion.div 
                              className="absolute inset-0 bg-green-500/5 rounded-3xl"
                              animate={{ opacity: [0, 0.1, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:order-2"
                      >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-green-300 text-sm font-medium tracking-wider">04 • AUTONOMOUS DEBUG</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Self-Healing
                          <span className="text-gradient block">Code</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Eliminate manual debugging forever. Our AI continuously monitors your codebase, detects issues 
                          before they impact users, and automatically implements fixes—turning red tests green instantly.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            "Proactive error detection",
                            "Automatic fix suggestions", 
                            "Intelligent test generation"
                          ].map((feature, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center group"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Feature 5: Architectural Scaffolding */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8"
                      >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-blue-300 text-sm font-medium tracking-wider">05 • ARCHITECTURE</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Instant
                          <span className="text-gradient block">Scaffolding</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Transform ideas into complete application architectures instantly. Describe your vision and watch 
                          as xbe.sh generates the entire project structure with best practices and proper organization.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {["Instant project generation", "Best practice architecture", "Full-stack scaffolding"].map((feature, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }} viewport={{ once: true }} className="flex items-center group">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }} viewport={{ once: true }} className="relative group">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-lg"></div>
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl"></div>
                            <div className="relative z-10 h-full flex items-center justify-center">
                              <div className="text-center space-y-4">
                                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/10">
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/></svg>
                                </motion.div>
                                <div className="space-y-2">
                                  <p className="text-white text-lg font-semibold">Project Structure</p>
                                  <p className="text-gray-400 text-sm">Full-stack architecture generated</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Feature 6: UI Blueprinting */}
                    <motion.div 
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                      <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0, 1] }} viewport={{ once: true }} className="relative group lg:order-1">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-lg"></div>
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 aspect-video overflow-hidden group-hover:border-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
                            <div className="relative z-10 h-full flex items-center justify-center">
                              <div className="grid grid-cols-2 gap-6 w-full">
                                <div className="space-y-3">
                                  <div className="text-xs text-purple-300 font-medium">FIGMA DESIGN</div>
                                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl aspect-square flex items-center justify-center border border-white/10">
                                    <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-8 h-8 bg-purple-400/60 rounded-lg"></motion.div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="text-xs text-pink-300 font-medium">REACT CODE</div>
                                  <div className="bg-slate-900/50 rounded-xl aspect-square p-3 border border-white/5">
                                    {[60, 40, 80].map((width, i) => (
                                      <motion.div key={i} className="h-1 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded mb-1" style={{ width: `${width}%` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: i * 0.3 }} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }} viewport={{ once: true }} className="space-y-8 lg:order-2">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-purple-300 text-sm font-medium tracking-wider">06 • VISUAL-TO-CODE</span>
                        </div>
                        <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Design
                          <span className="text-gradient block">Translation</span>
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                          Bridge design and development seamlessly. Import Figma designs, sketches, or wireframes and watch 
                          as xbe.sh generates pixel-perfect, production-ready components with responsive behavior.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {["Figma-to-code conversion", "Pixel-perfect components", "Responsive & interactive"].map((feature, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }} viewport={{ once: true }} className="flex items-center group">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                  </div>
                </div>
              </section>

              {/* Social Proof Section */}
              <section id="testimonials" className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
                
                <div className="relative max-w-7xl mx-auto px-6">
                  {/* Section Header */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full backdrop-blur-sm mb-6">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-violet-300 text-sm font-medium tracking-wider">TRUSTED BY DEVELOPERS</span>
      </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Join the
                      <span className="text-gradient block">Revolution</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      Thousands of developers worldwide are already building faster with xbe.sh
                    </p>
                  </motion.div>


                  {/* Scrolling Testimonials */}
                  <div className="relative mb-20 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
                    
                    <motion.div 
                      className="flex gap-8"
                      animate={{
                        x: [0, -2400]
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 40,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* First set of testimonials */}
                      {[
                        {
                          quote: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
                          author: "Sofia Rodriguez",
                          role: "@sofiaml",
                          avatar: "👩‍💻"
                        },
                        {
                          quote: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
                          author: "Emma Thompson",
                          role: "@emmaai",
                          avatar: "👩‍🔬"
                        },
                        {
                          quote: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
                          author: "David Park",
                          role: "@davidtech",
                          avatar: "👨‍💼"
                        },
                        {
                          quote: "xbe.sh has completely transformed how we build products. What used to take weeks now takes days.",
                          author: "Sarah Chen",
                          role: "@sarahdev",
                          avatar: "👩‍💻"
                        },
                        {
                          quote: "The AI agent understands context better than any tool I've used. It's like having a senior developer pair programming.",
                          author: "Marcus Johnson",
                          role: "@marcustech",
                          avatar: "👨‍💼"
                        },
                        {
                          quote: "From idea to deployment in minutes, not hours. This is genuinely the future of development.",
                          author: "Elena Rodriguez",
                          role: "@elenacode",
                          avatar: "👩‍🔬"
                        }
                      ].map((testimonial, index) => (
                        <div
                          key={`first-${index}`}
                          className="flex-shrink-0 w-96 group"
                        >
                          <div className="relative h-48">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/40 to-purple-500/40 rounded-2xl blur-lg opacity-40"></div>
                            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl p-6 h-full group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                              
                              <div className="relative z-10 h-full flex flex-col justify-between">
                                {/* Quote */}
                                <div>
                                  <div className="text-3xl text-violet-300/40 mb-2 font-serif leading-none">"</div>
                                  <p className="text-gray-200 text-sm leading-relaxed font-light line-clamp-4">
                                    {testimonial.quote}
                                  </p>
                                </div>
                                
                                {/* Author */}
                                <div className="flex items-center mt-4">
                                  <div className="w-8 h-8 bg-gradient-to-br from-violet-400/40 to-purple-400/40 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-white/20 mr-3">
                                    {testimonial.avatar}
                                  </div>
                                  <div>
                                    <div className="text-white font-semibold text-xs">{testimonial.author}</div>
                                    <div className="text-gray-300 text-xs opacity-80">{testimonial.role}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Duplicate set for seamless loop */}
                      {[
                        {
                          quote: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
                          author: "Sofia Rodriguez",
                          role: "@sofiaml",
                          avatar: "👩‍💻"
                        },
                        {
                          quote: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
                          author: "Emma Thompson",
                          role: "@emmaai",
                          avatar: "👩‍🔬"
                        },
                        {
                          quote: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
                          author: "David Park",
                          role: "@davidtech",
                          avatar: "👨‍💼"
                        },
                        {
                          quote: "xbe.sh has completely transformed how we build products. What used to take weeks now takes days.",
                          author: "Sarah Chen",
                          role: "@sarahdev",
                          avatar: "👩‍💻"
                        },
                        {
                          quote: "The AI agent understands context better than any tool I've used. It's like having a senior developer pair programming.",
                          author: "Marcus Johnson",
                          role: "@marcustech",
                          avatar: "👨‍💼"
                        },
                        {
                          quote: "From idea to deployment in minutes, not hours. This is genuinely the future of development.",
                          author: "Elena Rodriguez",
                          role: "@elenacode",
                          avatar: "👩‍🔬"
                        }
                      ].map((testimonial, index) => (
                        <div
                          key={`second-${index}`}
                          className="flex-shrink-0 w-96 group"
                        >
                          <div className="relative h-48">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/40 to-purple-500/40 rounded-2xl blur-lg opacity-40"></div>
                            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl p-6 h-full group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                              
                              <div className="relative z-10 h-full flex flex-col justify-between">
                                {/* Quote */}
                                <div>
                                  <div className="text-3xl text-violet-300/40 mb-2 font-serif leading-none">"</div>
                                  <p className="text-gray-200 text-sm leading-relaxed font-light line-clamp-4">
                                    {testimonial.quote}
        </p>
      </div>
                                
                                {/* Author */}
                                <div className="flex items-center mt-4">
                                  <div className="w-8 h-8 bg-gradient-to-br from-violet-400/40 to-purple-400/40 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-white/20 mr-3">
                                    {testimonial.avatar}
                                  </div>
                                  <div>
                                    <div className="text-white font-semibold text-xs">{testimonial.author}</div>
                                    <div className="text-gray-300 text-xs opacity-80">{testimonial.role}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Pricing Section */}
              <section id="pricing" className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-6xl mx-auto px-6">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Simple, Transparent
                      <span className="text-gradient block">Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                      Choose the perfect plan for your development needs
                    </p>
                  </motion.div>

                  {/* Pricing Cards */}
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl"></div>
                          
                          <div className="relative z-10">
                            {/* Plan Header */}
                            <div className="text-center mb-8">
                              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm mb-4">
                                <span className="text-green-300 text-sm font-medium tracking-wider">FREE</span>
                              </div>
                              <div className="text-5xl font-bold text-white mb-2">$0</div>
                              <div className="text-gray-400">Forever free</div>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-8">
                              {[
                                "Basic AI code completion",
                                "Up to 100 requests/month",
                                "Community support",
                                "Basic templates",
                                "Local development"
                              ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mr-3">
                                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                              Get Started Free
        </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-full group-hover:border-white/30 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-3xl"></div>
                          
                          <div className="relative z-10">
                            {/* Plan Header */}
                            <div className="text-center mb-8">
                              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full backdrop-blur-sm mb-4">
                                <span className="text-violet-300 text-sm font-medium tracking-wider">PRO</span>
                              </div>
                              <div className="text-5xl font-bold text-white mb-2">$29</div>
                              <div className="text-gray-400">per month</div>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-8">
                              {[
                                "Advanced AI agent capabilities",
                                "Unlimited requests",
                                "Priority support",
                                "Advanced templates & scaffolding",
                                "Cloud deployment integration",
                                "Team collaboration tools"
                              ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400/30 flex items-center justify-center mr-3">
                                    <svg className="w-3 h-3 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl opacity-75 cursor-not-allowed" disabled>
                              Coming Soon
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Frequently Asked
                      <span className="text-gradient block">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                      Everything you need to know about xbe.sh and how it works
                    </p>
                  </motion.div>

                  {/* FAQ Items */}
                  <div className="space-y-6">
                    {[
                      {
                        question: "What makes xbe.sh different from other AI coding tools?",
                        answer: "xbe.sh is a revolutionary agentic IDE that goes beyond simple code completion. It acts as an active development partner, understanding high-level goals and autonomously handling tasks from architectural design to deployment. Unlike chat-based tools, xbe.sh integrates directly into your development workflow with a full-featured editor, deployment platform, and automation pipeline builder."
                      },
                      {
                        question: "How does the AI agent understand my project context?",
                        answer: "Our AI agent analyzes your entire codebase, project structure, dependencies, and development patterns to build a comprehensive understanding of your project. It learns from your coding style, architectural decisions, and project requirements to provide contextually relevant suggestions and autonomous task execution."
                      },
                      {
                        question: "Can I use my own AI models with xbe.sh?",
                        answer: "Yes! xbe.sh supports custom AI models through Ollama and LM Studio integration. You can use your preferred models while still benefiting from our agentic architecture and integrated development environment. This gives you full control over your AI capabilities while maintaining privacy and customization."
                      },
                      {
                        question: "Is my code secure and private?",
                        answer: "Absolutely. Your code never leaves your environment unless you explicitly choose to deploy it. All AI processing can be done locally using your own models, and we implement enterprise-grade security measures. We're committed to protecting your intellectual property and maintaining complete privacy of your development work."
                      },
                      {
                        question: "What programming languages and frameworks are supported?",
                        answer: "xbe.sh supports all major programming languages and frameworks including JavaScript/TypeScript, Python, React, Vue, Node.js, Django, Flask, Go, Rust, and many more. Our AI agent is trained on diverse codebases and can work with any tech stack, adapting to your specific project requirements."
                      },
                      {
                        question: "How does the deployment platform work?",
                        answer: "Our Multi-Cloud Platform (MCP) provides seamless deployment across AWS, Google Cloud, Azure, and other providers. The AI agent can automatically configure infrastructure, set up CI/CD pipelines, and handle scaling based on your application's needs. You maintain full control while the agent handles the complexity."
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl group-hover:border-white/20 transition-all duration-500">
                            <button 
                              className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
                              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                            >
                              <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 flex items-center justify-center">
                                <motion.svg 
                                  className="w-4 h-4 text-violet-400" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                              </div>
                            </button>
                            <motion.div
                              initial={false}
                              animate={{
                                height: openFAQ === index ? "auto" : 0,
                                opacity: openFAQ === index ? 1 : 0
                              }}
                              transition={{
                                duration: 0.4,
                                ease: "easeInOut"
                              }}
                              style={{ overflow: "hidden" }}
                            >
                              <div className="px-6 pb-6">
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>


              {/* Getting Started Section */}
              <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-6xl mx-auto px-6">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Get Started in
                      <span className="text-gradient block">3 Simple Steps</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                      From installation to your first AI-powered project in minutes
                    </p>
                  </motion.div>

                  {/* Steps */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        step: "01",
                        title: "Download & Install",
                        description: "Get xbe.sh for your operating system. Available for Windows, macOS, and Linux with one-click installation.",
                        icon: "⬇️",
                        features: ["Cross-platform support", "Automatic updates", "Quick setup wizard"]
                      },
                      {
                        step: "02", 
                        title: "Configure Your AI",
                        description: "Choose your preferred AI model - use our cloud models or connect your own through Ollama/LM Studio.",
                        icon: "🤖",
                        features: ["Multiple AI providers", "Custom model support", "Privacy controls"]
                      },
                      {
                        step: "03",
                        title: "Start Building",
                        description: "Create your first project, describe what you want to build, and watch the AI agent bring it to life.",
                        icon: "🚀",
                        features: ["Project templates", "AI-guided setup", "Instant deployment"]
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="relative h-full">
                          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent rounded-3xl"></div>
                            
                            <div className="relative z-10">
                              {/* Step Number */}
                              <div className="flex items-center justify-between mb-6">
                                <div className="text-6xl opacity-20 font-bold text-white">{step.step}</div>
                                <div className="text-4xl">{step.icon}</div>
                              </div>

                              {/* Title */}
                              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                              
                              {/* Description */}
                              <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                              {/* Features */}
                              <div className="space-y-3">
                                {step.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-3"></div>
                                    <span className="text-gray-400 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                  >
                    <div className="inline-flex items-center space-x-4">
                    <a href="/downloads">
                      <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                        Download xbe.sh
                      </button>
                    </a>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Final CTA Section */}
              <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      Ready to Transform Your
                      <span className="text-gradient block">Development Workflow?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                      Join thousands of developers who are already building faster, smarter, and more efficiently with xbe.sh's agentic IDE.
                    </p>

                    {/* Email Signup Form */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="max-w-md mx-auto mb-8"
                    >
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none"
                          />
                          <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                            Join Webinar
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
                    >
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Free to start
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        No credit card required
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Cancel anytime
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Footer */}
              <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16">
                  {/* Main Footer Content */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-6">
                        <img 
                          src="/logo-dark-styled.png" 
                          alt="xbe.sh logo" 
                          className="h-8 w-auto object-contain"
                        />
                        <span className="text-2xl font-bold text-white">xbe.sh</span>
                      </div>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        The revolutionary agentic IDE that transforms how developers build, ship, and scale applications with AI-powered automation.
                      </p>
                      <div className="flex space-x-4">
                        {[
                          { icon: "🐙", href: "#", label: "GitHub" },
                          { icon: "💬", href: "#", label: "Discord" },
                          { icon: "🐦", href: "#", label: "Twitter" },
                          { icon: "📺", href: "#", label: "YouTube" }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="w-10 h-10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-lg flex items-center justify-center hover:border-white/20 transition-all duration-200 group"
                            aria-label={social.label}
                          >
                            <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Product Column */}
                    <div>
                      <h3 className="text-white font-semibold mb-6">Product</h3>
                      <ul className="space-y-4">
                        {[
                          { name: "Features", href: "#features" },
                          { name: "Pricing", href: "#pricing" },
                          { name: "Download", href: "#" },
                          { name: "Changelog", href: "#" },
                          { name: "Roadmap", href: "#" }
                        ].map((link, index) => (
                          <li key={index}>
                            <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                      <h3 className="text-white font-semibold mb-6">Resources</h3>
                      <ul className="space-y-4">
                        {[
                          { name: "Documentation", href: "#" },
                          { name: "API Reference", href: "#" },
                          { name: "Tutorials", href: "#" },
                          { name: "Examples", href: "#" },
                          { name: "Community", href: "#" }
                        ].map((link, index) => (
                          <li key={index}>
                            <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                      <h3 className="text-white font-semibold mb-6">Company</h3>
                      <ul className="space-y-4">
                        {[
                          { name: "About", href: "#" },
                          { name: "Blog", href: "#" },
                          { name: "Careers", href: "#" },
                          { name: "Contact", href: "#" },
                          { name: "Support", href: "#" }
                        ].map((link, index) => (
                          <li key={index}>
                            <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2024 xbe.sh. All rights reserved.
                      </div>
                      <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                          Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                          Terms of Service
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                          Cookie Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
  )
}

export default App