import { motion, AnimatePresence } from 'framer-motion';
import { Brain } from 'lucide-react';

export const AIObserver = ({ messages, userData, minimal = false }) => {
  if (minimal) {
    // Minimal mode for threat simulation - only show latest message
    const latestMessage = messages[messages.length - 1];
    
    return (
      <AnimatePresence>
        {latestMessage && (
          <motion.div
            key={`ai-minimal-${latestMessage.timestamp}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 max-w-2xl"
          >
            <div className="cyber-border bg-black/95 backdrop-blur-sm px-6 py-3 rounded flex items-center gap-3">
              <Brain className="w-5 h-5 text-cyber-blue pulse-glow flex-shrink-0" />
              <p className="text-cyan-300 font-rajdhani text-sm leading-relaxed">
                {latestMessage.text}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="fixed top-8 left-8 z-40 max-w-md">
      {/* AI Badge */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-4 cyber-border cyber-panel px-4 py-3 rounded"
      >
        <div className="relative">
          <Brain className="w-6 h-6 text-cyber-blue" />
          <div className="absolute inset-0 animate-ping">
            <Brain className="w-6 h-6 text-cyber-blue opacity-20" />
          </div>
        </div>
        <div>
          <h3 className="font-orbitron text-cyber-blue text-sm tracking-wider">AI OBSERVER</h3>
          <p className="text-cyan-300/70 text-xs font-rajdhani tracking-wide">NEURAL ANALYSIS ACTIVE</p>
        </div>
      </motion.div>

      {/* Messages */}
      <AnimatePresence mode="popLayout">
        {messages.slice(-3).map((message) => (
          <motion.div
            key={`ai-msg-${message.timestamp}`}
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="cyber-border cyber-panel p-4 mb-2 rounded"
          >
            <p className="text-cyan-300/90 font-rajdhani text-sm leading-relaxed tracking-wide">
              {message.text}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
