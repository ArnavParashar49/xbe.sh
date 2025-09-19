import { motion } from "framer-motion";
import { useLenis } from "../hooks/useLenis";

function Privacy() {
  // Initialize Lenis smooth scroll
  useLenis()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => {
                window.location.href = '/';
              }}
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/logo-dark-styled.png" 
                alt="xbe.sh logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white font-cal">xbe.sh</span>
            </button>
            
            {/* Navigation */}
            
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
          {/* Legal & Privacy Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 relative overflow-hidden rounded-3xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/40"></div>
            
            <div className="relative z-10 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-cal">
              Legal & Privacy
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Our commitment to transparency, security, and your privacy
            </p>

            {/* Policy Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
                <span>Privacy</span>
              </button>
              <a 
                href="/terms" 
                className="bg-slate-800/30 hover:bg-slate-700/30 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <span>Terms</span>
              </a>
              <a 
                href="/cookies" 
                className="bg-slate-800/30 hover:bg-slate-700/30 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10.62 20.31,10.69 20,10.69A1.39,1.39 0 0,1 18.61,9.31C18.61,8.91 18.95,8.57 19.35,8.57C19.75,8.57 20.09,8.91 20.09,9.31C20.81,7.5 20.75,5.5 19.35,4.1C18.95,4.5 18.61,4.84 18.61,5.24C18.61,5.64 18.95,5.98 19.35,5.98C19.75,5.98 20.09,5.64 20.09,5.24C20.09,4.84 19.75,4.5 19.35,4.5C18.95,4.5 18.61,4.84 18.61,5.24C17.21,3.84 15.21,3.78 13.4,4.5C13.4,4.1 13.74,3.76 14.14,3.76C14.54,3.76 14.88,4.1 14.88,4.5C14.88,4.9 14.54,5.24 14.14,5.24C13.74,5.24 13.4,4.9 13.4,4.5C12.93,3.64 12.5,3 12,3M7.5,8A1.5,1.5 0 0,1 9,9.5A1.5,1.5 0 0,1 7.5,11A1.5,1.5 0 0,1 6,9.5A1.5,1.5 0 0,1 7.5,8M16.5,9A1.5,1.5 0 0,1 18,10.5A1.5,1.5 0 0,1 16.5,12A1.5,1.5 0 0,1 15,10.5A1.5,1.5 0 0,1 16.5,9M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M9.5,16A1.5,1.5 0 0,1 11,17.5A1.5,1.5 0 0,1 9.5,19A1.5,1.5 0 0,1 8,17.5A1.5,1.5 0 0,1 9.5,16M15.5,17A1.5,1.5 0 0,1 17,18.5A1.5,1.5 0 0,1 15.5,20A1.5,1.5 0 0,1 14,18.5A1.5,1.5 0 0,1 15.5,17Z"/>
                </svg>
                <span>Cookies</span>
              </a>
              <a 
                href="/security" 
                className="bg-slate-800/30 hover:bg-slate-700/30 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span>Security</span>
              </a>
            </div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Policy Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-cal">
                Privacy Policy
              </h2>
              <p className="text-lg text-gray-400 mb-2">
                Comprehensive data protection framework for xBesh AI users, ensuring transparency, security, and compliance with global data regulations.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: March 25, 2025
              </p>
            </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-cal">Information Collection Practices</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">Personal Identification Data</h3>
                  <p className="mb-4">
                    We collect essential user information to provide personalized AI-powered services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Professional and personal contact details</li>
                    <li>Account authentication credentials</li>
                    <li>Professional role and organizational affiliations</li>
                    <li>Billing and payment information</li>
                    <li>Communication preferences and consent records</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">Technological Usage Data</h3>
                  <p className="mb-4">
                    Automated collection of technical interactions and system performance metrics:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device and browser technical specifications</li>
                    <li>IP address and geolocation data</li>
                    <li>Network connection characteristics</li>
                    <li>User interaction logs and session data</li>
                    <li>Performance analytics and error tracking</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">AI-Generated Content Tracking</h3>
                  <p className="mb-4">
                    Data generated through AI interactions and platform usage:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Code generation and application configurations</li>
                    <li>API interaction logs</li>
                    <li>Machine learning model training data</li>
                    <li>User workflow patterns</li>
                    <li>Anonymous usage statistics for service improvement</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 font-cal">Data Processing & Utilization</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">Service Optimization</h3>
                  <p className="mb-4">
                    Primary data processing objectives:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personalized AI service delivery</li>
                    <li>Continuous platform performance enhancement</li>
                    <li>Intelligent feature recommendation</li>
                    <li>Security and fraud prevention</li>
                    <li>User experience customization</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">Regulatory Compliance</h3>
                  <p className="mb-4">
                    Comprehensive legal and ethical data management:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>GDPR, CCPA, and international data protection compliance</li>
                    <li>Transparent data processing mechanisms</li>
                    <li>User consent-driven data handling</li>
                    <li>Regular privacy impact assessments</li>
                    <li>Proactive vulnerability management</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-cal">Research & Development</h3>
                  <p className="mb-4">
                    Responsible data utilization for technological advancement:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Anonymized machine learning model training</li>
                    <li>Product innovation through usage insights</li>
                    <li>Academic and industry research collaborations</li>
                    <li>Aggregated trend analysis</li>
                    <li>Ethical AI development practices</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 font-cal">Contact Information</h2>
                <p className="mb-4">
                  For questions regarding this Privacy Policy or data processing practices, please contact us:
                </p>
                <div className="bg-slate-800/30 rounded-lg p-6 border border-white/10">
                  <p className="text-white mb-2"><strong>Email:</strong> hello@xbesh.com</p>
                  <p className="text-white"><strong>Address:</strong> 8 The Green, Dover, Delaware 19901, US</p>
                </div>
              </section>
            </div>
          </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
