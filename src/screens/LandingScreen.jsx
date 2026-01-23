import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Lock, Eye, Target } from 'lucide-react';
import { Button } from '../components/ui/button';

export const LandingScreen = ({ onEnter }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Professional Cyberpunk Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,transparent_60%)]" />
        
        {/* Animated grid overlay */}
        <motion.div 
          className="absolute inset-0 grid-cyber"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Corner accents */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-cyan-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-cyan-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-cyan-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-cyan-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#00ff88' : '#0088ff'
              }}
              animate={{
                y: [0, -40 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5 + Math.random() * 0.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Professional scan lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)'
          }}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/8 to-transparent h-40"
          animate={{
            y: ['-20%', '120%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Additional moving scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-32"
          animate={{
            y: ['120%', '-20%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              className="absolute inset-0 bg-cyan-500/20 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative flex items-center justify-center gap-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
              >
                <Shield className="w-20 h-20 text-cyber-blue text-glow" />
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="w-24 h-24 text-neural-glow text-glow pulse-glow" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-20 h-20 text-cyber-purple text-glow" />
              </motion.div>
            </div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-8xl font-bold mb-6"
          >
            <span className="text-white" style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)'
            }}>
              NEURAL SHIELD
            </span>
            {' '}
            <span className="text-cyber-blue" style={{
              textShadow: '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)'
            }}>
              XR
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-2"
          >
            <p className="text-3xl text-cyan-300 font-rajdhani font-medium tracking-wider uppercase">
              Next-Generation Cybersecurity Training
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <p className="text-sm text-cyan-400/80 font-rajdhani tracking-widest uppercase">
                Advanced AI • Real-Time Simulation • Adaptive Learning
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-8"
        >
          <Button
            onClick={onEnter}
            className="group relative px-16 py-10 text-2xl font-orbitron font-bold bg-transparent cyber-border hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-cyan-400 group-hover:text-white transition-colors tracking-wider">
              INITIALIZE SYSTEM
            </span>
          </Button>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-cyan-400/60 text-sm font-rajdhani tracking-[0.3em] uppercase"
          >
            [ Press to Begin ]
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
