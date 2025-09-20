import { motion } from "framer-motion";
import { useLenis } from "../hooks/useLenis";
import CountdownTimer from "../components/CountdownTimer";

function CountdownPage() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 py-8">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-6 sm:mb-8">
        <img
          src="/logo-dark-styled.png"
          alt="xbe.sh logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <span className="text-responsive-xl font-bold text-white font-cal">xbe.sh</span>
      </div>

     

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12 px-2"
      >
        
        <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-responsive-6xl font-bold text-white mb-6 sm:mb-8 leading-tight font-cal"
                    >
                      Welcome to 
                      <span className="text-gradient block">xbe.sh v2.0</span>
                    </motion.h2>
        <p className="text-responsive-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
          xbe.sh v2.0 Downloadable App will go live with exciting new features and improvements on Saturday, September 20, 2025 at 01:30 PM ET.
        </p>
        <p className="text-responsive-sm text-gray-400 mb-6 sm:mb-8">
          Please stay tuned with us for the big launch! 🚀
        </p>
        <p className="text-responsive-sm text-gray-500 mb-8 sm:mb-12">
          For assistance or inquiries, please contact us at{' '}
          <a href="mailto:support@xbesh.com" className="text-blue-400 hover:text-blue-300">
            support@xbesh.com
          </a>
        </p>
        <p className="text-responsive-xs text-gray-600">
          Countdown ends at 9/20/2025, 1:30:00 PM ET
        </p>
      </motion.div>

      {/* Countdown Timer */}
      <div className="mb-8 sm:mb-12 w-full max-w-4xl">
        <CountdownTimer
          targetDate="2025-09-20T17:29:21Z" // 1:30 PM ET
          onComplete={() => {
            alert('🎉 xbe.sh v2.0 is now live! Redirecting to downloads...');
            window.location.href = '/downloads';
          }}
        />
      </div>

      {/* Back to Downloads Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full max-w-xs sm:max-w-sm"
      >
         <a
           href="/downloads"
           className="block w-full text-center bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-responsive-sm"
         >
           ← Back to Downloads
         </a>
      </motion.div>

      {/* Built with badge */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6">
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-1.5 sm:space-x-2">
          <span className="text-gray-400 text-responsive-xs">Built with</span>
          <span className="text-white font-semibold text-responsive-xs font-cal">xbe.sh</span>
          <span className="text-red-400 text-responsive-xs">❤️</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownPage;
