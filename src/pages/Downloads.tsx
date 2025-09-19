import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLenis } from "../hooks/useLenis";

function Downloads() {
  const [userOS, setUserOS] = useState<string>('');

  // Initialize Lenis smooth scroll
  useLenis()

  useEffect(() => {
    const detectOS = () => {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Mac OS X')) return 'macOS';
      if (userAgent.includes('Linux')) return 'Linux';
      return 'Windows';
    };
    setUserOS(detectOS());
  }, []);

  const getOSIcon = (os: string) => {
    switch (os) {
      case 'macOS':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        );
      case 'Linux':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2c-1.74 0-3.5.85-3.5 2.5 0 .43.1.85.29 1.21C6.27 7.6 4 10.5 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.5-2.27-6.4-5.29-8.29.19-.36.29-.78.29-1.21C15 2.85 13.24 2 12.5 2zm0 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM12 6c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6z"/>
          </svg>
        );
      default: // Windows
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="/logo-dark-styled.png" 
                alt="xbe.sh logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">xbe.sh</span>
            </a>
            
            {/* Back to Home */}
            <a 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Download
              <span className="text-gradient block">xbe.sh</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the revolutionary agentic IDE for your platform. Available for Windows, macOS, and Linux.
            </p>
          </motion.div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                os: 'Windows',
                recommended: userOS === 'Windows',
                version: 'v1.0.0',
                size: '125 MB',
                formats: [
                  { name: 'Installer (.exe)', size: '125 MB' },
                  { name: 'Portable (.zip)', size: '98 MB' }
                ]
              },
              {
                os: 'macOS',
                recommended: userOS === 'macOS',
                version: 'v1.0.0',
                size: '110 MB',
                formats: [
                  { name: 'Universal (.dmg)', size: '110 MB' },
                  { name: 'App Store', size: 'Free' }
                ]
              },
              {
                os: 'Linux',
                recommended: userOS === 'Linux',
                version: 'v1.0.0',
                size: '95 MB',
                formats: [
                  { name: 'AppImage', size: '95 MB' },
                  { name: 'Debian (.deb)', size: '89 MB' },
                  { name: 'RPM (.rpm)', size: '91 MB' }
                ]
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-full">
                  {platform.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                        RECOMMENDED
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent rounded-3xl"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* OS Icon */}
                      <div className="flex justify-center mb-6 text-white">
                        {getOSIcon(platform.os)}
                      </div>
                      
                      {/* OS Name */}
                      <h3 className="text-2xl font-bold text-white mb-2">{platform.os}</h3>
                      <p className="text-gray-400 text-sm mb-6">{platform.version} • {platform.size}</p>
                      
                      {/* Download Options */}
                      <div className="space-y-3 mb-8">
                        {platform.formats.map((format, formatIndex) => (
                          <button
                            key={formatIndex}
                            className="w-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/30 hover:to-purple-600/30 border border-violet-500/30 text-white py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 text-sm"
                          >
                            <div className="flex justify-between items-center">
                              <span>{format.name}</span>
                              <span className="text-gray-400">{format.size}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {/* Main Download Button */}
                      <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                        Download for {platform.os}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">System Requirements</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  os: 'Windows',
                  requirements: [
                    'Windows 10 or later',
                    '4 GB RAM minimum',
                    '2 GB free disk space',
                    'Internet connection'
                  ]
                },
                {
                  os: 'macOS',
                  requirements: [
                    'macOS 10.15 or later',
                    '4 GB RAM minimum',
                    '2 GB free disk space',
                    'Internet connection'
                  ]
                },
                {
                  os: 'Linux',
                  requirements: [
                    'Ubuntu 18.04+ or equivalent',
                    '4 GB RAM minimum',
                    '2 GB free disk space',
                    'Internet connection'
                  ]
                }
              ].map((req, index) => (
                <div key={index} className="bg-slate-800/30 rounded-2xl p-6 border border-white/5">
                  <h3 className="text-xl font-semibold text-white mb-4">{req.os}</h3>
                  <ul className="space-y-2">
                    {req.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Downloads;
