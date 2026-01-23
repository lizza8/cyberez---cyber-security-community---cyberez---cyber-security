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
        
        {/* Professional grid overlay */}
        <div className="absolute inset-0 grid-cyber opacity-40" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-cyan-500/30" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-cyan-500/30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-cyan-500/30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-cyan-500/30" />

        {/* Minimal floating particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
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
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-40"
          animate={{
            y: ['-20%', '120%'],
          }}
          transition={{
            duration: 10,
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
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <div className="relative flex items-center justify-center gap-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Shield className="w-20 h-20 text-cyber-blue text-glow" />
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Brain className="w-24 h-24 text-neural-glow text-glow pulse-glow" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
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

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4"
        >
          {[
            { 
              icon: Brain, 
              title: 'Neural Network', 
              desc: 'Living 3D visualization',
              color: 'from-cyan-500 to-blue-500'
            },
            { 
              icon: Target, 
              title: 'Real Threats', 
              desc: 'Dynamic attack simulation',
              color: 'from-purple-500 to-pink-500'
            },
            { 
              icon: Eye, 
              title: 'AI Observer', 
              desc: 'Adaptive learning system',
              color: 'from-green-500 to-emerald-500'
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity blur-xl" />
              <div className="relative cyber-border cyber-panel p-6 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 cyber-border rounded flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>
                <h3 className="font-orbitron text-white text-base mb-2 tracking-wider">{feature.title}</h3>
                <p className="text-cyan-300/80 font-rajdhani text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
