import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Eye, X } from 'lucide-react';
import { Button } from './ui/button';

export const ThreatEvent = ({ threat, onResponse }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onResponse('timeout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onResponse]);

  // Safety check for threat prop
  if (!threat) {
    return null;
  }

  const getUrgencyColor = () => {
    switch (threat.urgency) {
      case 'critical': return 'border-red-500 bg-red-900/20';
      case 'high': return 'border-orange-500 bg-orange-900/20';
      default: return 'border-yellow-500 bg-yellow-900/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      className="fixed inset-0 flex items-center justify-center z-30 p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Threat Card */}
      <div className={`relative max-w-2xl w-full border-2 ${getUrgencyColor()} cyber-panel p-8 shadow-2xl rounded`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
            <div>
              <h3 className="font-orbitron text-red-500 text-sm">THREAT DETECTED</h3>
              <p className="text-cyan-300 text-xs font-rajdhani">
                Type: {threat.type.replace('_', ' ').toUpperCase()}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-white font-orbitron">{timeLeft}s</div>
            <div className="text-xs text-cyan-300 font-rajdhani">Time Remaining</div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6 space-y-4">
          <div>
            <h4 className="font-orbitron text-white text-xl mb-2">{threat.title}</h4>
            <p className="text-cyan-300 font-rajdhani">{threat.description}</p>
          </div>

          <div className="cyber-border cyber-panel p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-cyan-400 font-rajdhani">FROM:</span>
              <span className="text-white font-rajdhani font-mono text-sm">{threat.sender}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-cyan-400 font-rajdhani">URGENCY:</span>
              <span className={`text-sm font-bold font-rajdhani ${
                threat.urgency === 'critical' ? 'text-red-500' :
                threat.urgency === 'high' ? 'text-orange-500' :
                'text-yellow-500'
              }`}>
                {threat.urgency.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() => onResponse('click')}
            className="group py-6 bg-transparent border-2 border-red-500 hover:bg-red-500/20 transition-all"
          >
            <div className="flex flex-col items-center gap-2">
              <Eye className="w-6 h-6 text-red-500 group-hover:text-white" />
              <span className="font-orbitron text-sm text-red-500 group-hover:text-white">
                CLICK LINK
              </span>
            </div>
          </Button>

          <Button
            onClick={() => onResponse('verify')}
            className="group py-6 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500/20 transition-all"
          >
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-yellow-500 group-hover:text-white" />
              <span className="font-orbitron text-sm text-yellow-500 group-hover:text-white">
                VERIFY
              </span>
            </div>
          </Button>

          <Button
            onClick={() => onResponse('ignore')}
            className="group py-6 bg-transparent border-2 border-green-500 hover:bg-green-500/20 transition-all"
          >
            <div className="flex flex-col items-center gap-2">
              <X className="w-6 h-6 text-green-500 group-hover:text-white" />
              <span className="font-orbitron text-sm text-green-500 group-hover:text-white">
                IGNORE
              </span>
            </div>
          </Button>
        </div>

        {/* Warning */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-center text-cyan-400 text-sm font-rajdhani"
        >
          Choose wisely. Your decision affects network integrity.
        </motion.div>
      </div>
    </motion.div>
  );
};
