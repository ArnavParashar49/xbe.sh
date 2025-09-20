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
          xbe.sh v2.0 Downloadable App will go live with exciting new features and improvements on Saturday, September 20.
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
        {/* <p className="text-responsive-xs text-gray-600">
          Countdown ends at 9/20/2025, 1:30:00 PM ET
        </p> */}
      </motion.div>

      {/* Countdown Timer */}
      {/* <div className="mb-8 sm:mb-12 w-full max-w-4xl">
        <CountdownTimer
          targetDate="2025-09-20T17:29:21Z" // 1:30 PM ET
          onComplete={() => {
            alert('🎉 xbe.sh v2.0 is now live! Redirecting to downloads...');
            window.location.href = '/downloads';
          }}
        />
      </div> */}
       {/* Stunning Coming Today Message */}
       <div className="relative mb-8 sm:mb-12 w-full max-w-5xl">
         {/* Animated Background Glow */}
         <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl animate-pulse"></div>
         
         {/* Main Card */}
         <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-violet-500/40 rounded-3xl p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
           {/* Decorative Elements */}
           <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-2xl animate-bounce"></div>
             <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
           </div>
           
           <div className="relative text-center z-10">
             {/* Animated Rocket with Sparkles */}
             <motion.div
               initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.4 }}
               className="mb-6 relative"
             >
               <div className="relative inline-block">
                 <span className="text-8xl filter drop-shadow-2xl">🚀</span>
                 {/* Sparkle Effects */}
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute -top-2 -right-2"
                 >
                   <span className="text-2xl">✨</span>
                 </motion.div>
                 <motion.div
                   animate={{ rotate: -360 }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute -bottom-2 -left-2"
                 >
                   <span className="text-xl">⭐</span>
                 </motion.div>
                 <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                 >
                   <span className="text-lg">💫</span>
                 </motion.div>
               </div>
             </motion.div>
             
             {/* Main Title with Enhanced Animation */}
             <motion.h3
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
               className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 mb-6 tracking-tight"
               style={{ 
                 textShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                 fontFamily: 'system-ui, -apple-system, sans-serif'
               }}
             >
               Coming Today!
             </motion.h3>
             
             {/* Subtitle with Typewriter Effect */}
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="mb-8"
             >
               <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
                 Thank you for your incredible patience! 
               </p>
               <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                 We know you've been waiting, and we're putting the final touches on something truly <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">amazing</span>.
               </p>
             </motion.div>
             
             {/* Enhanced Status Indicator */}
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-2xl p-6 mb-6 backdrop-blur-sm"
             >
               <div className="flex items-center justify-center space-x-4">
                 <div className="flex space-x-1">
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                 </div>
                 <span className="text-lg font-bold text-green-400 tracking-wide">
                   LAUNCH IN PROGRESS
                 </span>
                 <div className="flex space-x-1">
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                   <motion.div
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                     className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                   ></motion.div>
                 </div>
               </div>
               
               {/* Progress Bar Animation */}
               <div className="mt-4 bg-slate-700/50 rounded-full h-2 overflow-hidden">
                 <motion.div
                   initial={{ width: "0%" }}
                   animate={{ width: "95%" }}
                   transition={{ duration: 3, delay: 1, ease: "easeOut" }}
                   className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/50"
                 ></motion.div>
               </div>
               <p className="text-green-300 text-sm mt-2 font-medium">95% Complete</p>
             </motion.div>
             
             {/* Excitement Badges */}
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               className="flex flex-wrap justify-center gap-3"
             >
               <span className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 px-4 py-2 rounded-full text-violet-300 text-sm font-medium backdrop-blur-sm">
                 🔥 Worth the Wait
               </span>
               <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                 ⚡ Lightning Fast
               </span>
               <span className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 px-4 py-2 rounded-full text-pink-300 text-sm font-medium backdrop-blur-sm">
                 ✨ Brand New Features
               </span>
             </motion.div>
           </div>
         </div>
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
