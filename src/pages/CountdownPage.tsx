import { motion } from "framer-motion";
import { useLenis } from "../hooks/useLenis";
import CountdownTimer from "../components/CountdownTimer";

function CountdownPage() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-violet-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        </div>
        <span className="text-xl font-bold text-white font-cal">xbe.sh</span>
      </div>

     

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        
        <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-cal"
                    >
                      Welcome to 
                      <span className="text-gradient block">xbe.sh v2.0</span>
                    </motion.h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          xbe.sh v2.0 Downloadable App will go live with exciting new features and improvements on Saturday, September 20, 2025 at 01:30 PM ET.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Please stay tuned with us for the big launch! 🚀
        </p>
        <p className="text-gray-500 text-sm mb-12">
          For assistance or inquiries, please contact us at{' '}
          <a href="mailto:support@xbesh.com" className="text-blue-400 hover:text-blue-300">
            support@xbesh.com
          </a>
        </p>
        <p className="text-gray-600 text-xs">
          Countdown ends at 9/20/2025, 1:30:00 PM ET
        </p>
      </motion.div>

      {/* Countdown Timer */}
      <div className="mb-12">
        <CountdownTimer
          targetDate="2025-09-20T17:29:21Z" // 1:30 PM ET
          onComplete={() => {
            alert('🎉 xbe.sh v2.0 is now live! Redirecting to downloads...');
            window.location.href = '/downloads';
          }}
        />
      </div>

      {/* Status Message */}
    

      {/* Back to Downloads Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="/downloads"
          className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-cal"
        >
          ← Back to Downloads
        </a>
      </motion.div>

      {/* Built with badge */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 flex items-center space-x-2">
          <span className="text-gray-400 text-xs">Built with</span>
          <span className="text-white font-semibold text-xs font-cal">xbe.sh</span>
          <span className="text-red-400 text-xs">❤️</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownPage;
