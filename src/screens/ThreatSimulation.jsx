import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeuralCanvas } from '../components/Canvas2D/NeuralCanvas';
import { ThreatEvent } from '../components/ThreatEvent';
import { AIObserver } from '../components/AIObserver';
import { ThreatAnalyzer } from '../utils/ThreatAnalyzer';
import { AudioManager } from '../utils/AudioManager';
import { Shield, Zap, AlertTriangle } from 'lucide-react';

const THREAT_SCENARIOS = [
  {
    id: 1,
    type: 'phishing',
    title: 'URGENT: Account Verification Required',
    description: 'Your account will be suspended in 24 hours. Click here to verify immediately.',
    sender: 'security@paypa1-support.com',
    urgency: 'high',
    correctAction: 'ignore',
    targetNodeId: 'node-0',
    difficulty: 'easy'
  },
  {
    id: 2,
    type: 'authority',
    title: 'CEO Request: Wire Transfer',
    description: 'Need immediate wire transfer of $50,000 to new vendor. Confidential - do not discuss.',
    sender: 'ceo@company-urgent.com',
    urgency: 'critical',
    correctAction: 'verify',
    targetNodeId: 'node-4',
    difficulty: 'medium'
  },
  {
    id: 3,
    type: 'malicious_link',
    title: 'Congratulations! You won a prize!',
    description: 'Click to claim your $1000 Amazon gift card. Limited time offer!',
    sender: 'prizes@amaz0n-rewards.net',
    urgency: 'low',
    correctAction: 'ignore',
    targetNodeId: 'node-3',
    difficulty: 'easy'
  },
  {
    id: 4,
    type: 'data_breach',
    title: 'Security Alert: Password Compromised',
    description: 'Your password was found in a data breach. Change it now using this secure link.',
    sender: 'alerts@security-center.com',
    urgency: 'high',
    correctAction: 'verify',
    targetNodeId: 'node-2',
    difficulty: 'medium'
  },
  {
    id: 5,
    type: 'ransomware',
    title: 'SYSTEM LOCKED: Pay Ransom',
    description: 'Your files have been encrypted. Pay 2 BTC to unlock. Timer: 48 hours.',
    sender: 'darkweb@anonymous.onion',
    urgency: 'critical',
    correctAction: 'ignore',
    targetNodeId: 'node-5',
    difficulty: 'hard'
  }
];

export const ThreatSimulation = ({ onComplete, addAIMessage }) => {
  const [currentThreat, setCurrentThreat] = useState(0);
  const [threatActive, setThreatActive] = useState(false);
  const [responses, setResponses] = useState([]);
  const [reactionTimes, setReactionTimes] = useState([]);
  const [threatStartTime, setThreatStartTime] = useState(null);
  const [networkCorruption, setNetworkCorruption] = useState(0);
  const [activeThreats, setActiveThreats] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [userBehavior, setUserBehavior] = useState({
    avgReactionTime: 0,
    hesitationCount: 0,
    quickDecisions: 0
  });
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);

  const addLocalAIMessage = (message) => {
    setAiMessages(prev => [...prev, { text: message, timestamp: Date.now() }]);
    setTimeout(() => {
      setAiMessages(prev => prev.slice(1));
    }, 4000);
  };

  useEffect(() => {
    addLocalAIMessage("[ALERT] Threat detected in your network. Analyzing attack vector...");
    
    setTimeout(() => {
      const threat = THREAT_SCENARIOS[currentThreat];
      setActiveThreats([threat]);
      setThreatActive(true);
      setThreatStartTime(Date.now());
      AudioManager.playThreatCue();
      
      addLocalAIMessage(`[TARGET] ${threat.type.toUpperCase()} attack targeting node. Respond carefully.`);
    }, 2000);
  }, [currentThreat]);

  const handleResponse = (action) => {
    const reactionTime = Date.now() - threatStartTime;
    const threat = THREAT_SCENARIOS[currentThreat];
    const correct = action === threat.correctAction;

    setUserBehavior(prev => {
      const newAvg = (prev.avgReactionTime * responses.length + reactionTime) / (responses.length + 1);
      return {
        avgReactionTime: newAvg,
        hesitationCount: reactionTime > 5000 ? prev.hesitationCount + 1 : prev.hesitationCount,
        quickDecisions: reactionTime < 2000 ? prev.quickDecisions + 1 : prev.quickDecisions
      };
    });

    setReactionTimes(prev => [...prev, reactionTime]);
    setResponses(prev => [...prev, {
      threatId: threat.id,
      action,
      correct,
      reactionTime,
      threatType: threat.type
    }]);

    if (correct) {
      AudioManager.playSuccess();
      const newCombo = combo + 1;
      setCombo(newCombo);
      
      const points = 100 * newCombo * (reactionTime < 3000 ? 1.5 : 1);
      setScore(prev => prev + Math.floor(points));
      
      addLocalAIMessage(`[SUCCESS] Threat neutralized. +${Math.floor(points)} points. Combo: x${newCombo}`);
      setNetworkCorruption(prev => Math.max(0, prev - 5));
    } else {
      AudioManager.playThreatCue();
      setCombo(0);
      addLocalAIMessage(`[FAILED] ${getAIFeedback(threat, action, reactionTime)}`);
      setNetworkCorruption(prev => Math.min(100, prev + 20));
    }

    if (reactionTime > 5000) {
      addLocalAIMessage("[WARNING] Slow reaction detected. Threats will become more aggressive.");
    } else if (reactionTime < 1500 && correct) {
      addLocalAIMessage("[OPTIMAL] Lightning fast! Excellent response time.");
    }

    setActiveThreats([]);
    setThreatActive(false);

    setTimeout(() => {
      if (currentThreat < THREAT_SCENARIOS.length - 1) {
        setCurrentThreat(prev => prev + 1);
      } else {
        completeSimulation();
      }
    }, 2500);
  };

  const getAIFeedback = (threat, action, reactionTime) => {
    const feedbacks = [];
    
    if (threat.type === 'phishing' && action === 'click') {
      feedbacks.push("You trusted an urgent signal without verification.");
    } else if (threat.type === 'authority' && action === 'ignore') {
      feedbacks.push("Authority impersonation requires verification, not dismissal.");
    } else if (action === 'verify' && threat.correctAction === 'ignore') {
      feedbacks.push("Verification attempts can expose you to further attacks.");
    }

    if (reactionTime > 5000) {
      feedbacks.push("Slow reaction time increases vulnerability window.");
    } else if (reactionTime < 1000) {
      feedbacks.push("Too quick - ensure you're analyzing threats properly.");
    }

    return feedbacks.join(' ') || "Incorrect response. Analyze sender details and urgency indicators.";
  };

  const completeSimulation = () => {
    const analysis = ThreatAnalyzer.analyze(responses, reactionTimes, userBehavior);
    addLocalAIMessage("[COMPLETE] Simulation complete. Generating comprehensive analysis...");
    
    setTimeout(() => {
      if (onComplete) {
        onComplete({
          decisions: responses,
          reactionTimes,
          riskScore: analysis.riskScore,
          strengths: analysis.strengths,
          weaknesses: analysis.weaknesses,
          threatResponses: responses,
          userBehavior: userBehavior,
          networkCorruption: networkCorruption,
          finalScore: score
        });
      }
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <NeuralCanvas 
        corruption={networkCorruption}
        threats={activeThreats}
      />

      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 0, 0, ${networkCorruption / 400}) 0%, transparent 70%)`
        }}
      />

      <AIObserver messages={aiMessages} minimal={true} />

      <AnimatePresence>
        {threatActive && (
          <ThreatEvent
            threat={THREAT_SCENARIOS[currentThreat]}
            onResponse={handleResponse}
          />
        )}
      </AnimatePresence>

      {/* Enhanced HUD */}
      <div className="fixed top-4 right-4 flex flex-col gap-3 z-30">
        {/* Score Display */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="cyber-border cyber-panel px-6 py-4 rounded"
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-orbitron text-yellow-400 text-xs">SCORE</span>
          </div>
          <div className="text-3xl font-bold text-white font-orbitron">{score}</div>
          {combo > 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-cyan-400 text-sm font-rajdhani mt-1"
            >
              COMBO x{combo}
            </motion.div>
          )}
        </motion.div>

        {/* Corruption Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="cyber-border bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-md px-6 py-4 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="font-orbitron text-xs text-red-400">CORRUPTION</span>
          </div>
          <div className="w-48 h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600"
              initial={{ width: 0 }}
              animate={{ width: `${networkCorruption}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="font-rajdhani text-cyan-400">
              {networkCorruption < 30 ? 'STABLE' : networkCorruption < 60 ? 'COMPROMISED' : 'CRITICAL'}
            </span>
            <span className="font-rajdhani text-white font-bold">{networkCorruption}%</span>
          </div>
        </motion.div>
      </div>

      {/* Progress & Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-8 cyber-border cyber-panel p-5 rounded z-30"
      >
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-cyber-blue" />
          <h4 className="font-orbitron text-cyber-blue text-sm">MISSION STATUS</h4>
        </div>
        <div className="space-y-3 text-sm font-rajdhani">
          <div className="flex justify-between gap-8">
            <span className="text-cyan-300">Threats:</span>
            <span className="text-white font-bold">{currentThreat + 1}/{THREAT_SCENARIOS.length}</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-cyan-300">Neutralized:</span>
            <span className="text-green-400 font-bold">{responses.filter(r => r.correct).length}</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-cyan-300">Avg Time:</span>
            <span className="text-white font-bold">
              {userBehavior.avgReactionTime > 0 ? `${(userBehavior.avgReactionTime / 1000).toFixed(1)}s` : '--'}
            </span>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-cyan-500/20">
          {THREAT_SCENARIOS.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-3 h-3 rounded-full ${
                i < currentThreat ? 'bg-green-400 shadow-[0_0_10px_rgba(0,255,0,0.5)]' :
                i === currentThreat ? 'bg-cyber-blue pulse-glow shadow-[0_0_15px_rgba(0,255,255,0.8)]' :
                'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
