import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const AnalysisScreen = ({ userData, onViewProfile, onRestart }) => {
  const avgReactionTime = userData.reactionTimes.reduce((a, b) => a + b, 0) / userData.reactionTimes.length;
  const correctDecisions = userData.decisions.filter(d => d.correct).length;
  const accuracy = (correctDecisions / userData.decisions.length) * 100;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-cyber opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 overflow-y-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-orbitron text-5xl font-bold text-cyber-blue text-glow mb-4">
            SIMULATION COMPLETE
          </h1>
          <p className="text-cyan-300 text-xl font-rajdhani">
            Analyzing your cybersecurity awareness...
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl w-full"
        >
          <div className="cyber-border cyber-panel p-6 rounded">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-cyber-blue" />
              <h3 className="font-orbitron text-cyber-blue">ACCURACY</h3>
            </div>
            <div className="text-5xl font-bold text-white mb-2">{accuracy.toFixed(0)}%</div>
            <p className="text-cyan-300 font-rajdhani">
              {correctDecisions} of {userData.decisions.length} correct
            </p>
          </div>

          <div className="cyber-border bg-black/60 backdrop-blur-sm p-6 rounded">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-cyber-purple" />
              <h3 className="font-orbitron text-cyber-purple">REACTION TIME</h3>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              {(avgReactionTime / 1000).toFixed(1)}s
            </div>
            <p className="text-cyan-300 font-rajdhani">Average response time</p>
          </div>

          <div className="cyber-border bg-black/60 backdrop-blur-sm p-6 rounded">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-cyber-red" />
              <h3 className="font-orbitron text-cyber-red">RISK SCORE</h3>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              {userData.riskScore}
            </div>
            <p className="text-cyan-300 font-rajdhani">
              {userData.riskScore < 30 ? 'Low Risk' : userData.riskScore < 60 ? 'Medium Risk' : 'High Risk'}
            </p>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="cyber-border cyber-panel p-8 max-w-3xl w-full mb-8 rounded"
        >
          <h3 className="font-orbitron text-2xl text-cyber-blue mb-6">KEY INSIGHTS</h3>
          
          <div className="space-y-4">
            {userData.strengths.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-orbitron text-green-400">STRENGTHS</span>
                </div>
                <ul className="text-cyan-300 font-rajdhani space-y-1 ml-7">
                  {userData.strengths.map((strength, i) => (
                    <li key={i}>• {strength}</li>
                  ))}
                </ul>
              </div>
            )}

            {userData.weaknesses.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <span className="font-orbitron text-orange-400">AREAS FOR IMPROVEMENT</span>
                </div>
                <ul className="text-cyan-300 font-rajdhani space-y-1 ml-7">
                  {userData.weaknesses.map((weakness, i) => (
                    <li key={i}>• {weakness}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 mb-8"
        >
          <Button
            onClick={onViewProfile}
            className="px-8 py-6 bg-transparent cyber-border hover:bg-cyan-500/20 transition-all"
          >
            <span className="font-orbitron text-cyber-blue">VIEW CYBER PROFILE</span>
          </Button>
          
          <Button
            onClick={onRestart}
            className="px-8 py-6 bg-transparent cyber-border hover:bg-purple-500/20 transition-all"
          >
            <span className="font-orbitron text-cyber-purple">RESTART SIMULATION</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
