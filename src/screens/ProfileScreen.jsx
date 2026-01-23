import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Shield, Brain, Zap, Target } from 'lucide-react';

export const ProfileScreen = ({ userData, onRestart }) => {
  const getSkillLevel = (score) => {
    if (score < 30) return { level: 'EXPERT', color: 'text-green-400' };
    if (score < 60) return { level: 'INTERMEDIATE', color: 'text-yellow-400' };
    return { level: 'BEGINNER', color: 'text-red-400' };
  };

  const skill = getSkillLevel(userData.riskScore);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-cyber opacity-10" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col overflow-y-auto py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8"
        >
          <h1 className="font-orbitron text-4xl font-bold text-cyber-blue text-glow mb-2">
            YOUR CYBER PROFILE
          </h1>
          <p className="text-cyan-300 font-rajdhani text-lg">
            Personal cybersecurity assessment and recommendations
          </p>
        </motion.div>

        {/* Profile Stats */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="cyber-border cyber-panel p-8 rounded"
            >
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-cyber-blue" />
                <div>
                  <h2 className="font-orbitron text-2xl text-white">SECURITY LEVEL</h2>
                  <p className={`font-orbitron text-3xl font-bold ${skill.color}`}>
                    {skill.level}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-cyan-300 font-rajdhani">Threat Recognition</span>
                    <span className="text-white font-bold">
                      {Math.max(0, 100 - userData.riskScore)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{ width: `${Math.max(0, 100 - userData.riskScore)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-cyan-300 font-rajdhani">Response Speed</span>
                    <span className="text-white font-bold">
                      {userData.reactionTimes.reduce((a, b) => a + b, 0) / userData.reactionTimes.length < 3000 ? '85%' : '65%'}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ 
                        width: userData.reactionTimes.reduce((a, b) => a + b, 0) / userData.reactionTimes.length < 3000 ? '85%' : '65%'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-cyan-300 font-rajdhani">Decision Accuracy</span>
                    <span className="text-white font-bold">
                      {((userData.decisions.filter(d => d.correct).length / userData.decisions.length) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ 
                        width: `${(userData.decisions.filter(d => d.correct).length / userData.decisions.length) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="cyber-border bg-black/70 backdrop-blur-sm p-8 rounded"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-cyber-purple" />
                <h2 className="font-orbitron text-2xl text-white">RECOMMENDATIONS</h2>
              </div>

              <div className="space-y-4 text-cyan-300 font-rajdhani">
                {userData.weaknesses.map((weakness, i) => (
                  <div key={i} className="flex gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">{weakness}</p>
                      <p className="text-sm">
                        {getRecommendation(weakness)}
                      </p>
                    </div>
                  </div>
                ))}

                {userData.weaknesses.length === 0 && (
                  <div className="flex gap-3">
                    <Brain className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">Excellent Performance</p>
                      <p className="text-sm">
                        Continue practicing with more advanced threat scenarios to maintain your skills.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 flex justify-center gap-4"
        >
          <Button
            onClick={onRestart}
            className="px-12 py-6 bg-transparent cyber-border hover:bg-cyan-500/20 transition-all"
          >
            <span className="font-orbitron text-cyber-blue text-lg">
              TRAIN AGAIN
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const getRecommendation = (weakness) => {
  const recommendations = {
    'Slow reaction to urgent threats': 'Practice identifying urgency indicators and develop faster decision-making patterns.',
    'Difficulty identifying phishing attempts': 'Study common phishing patterns: suspicious URLs, urgent language, and sender verification.',
    'Vulnerable to authority impersonation': 'Always verify requests from authority figures through secondary channels.',
    'Trusts urgent signals without verification': 'Implement a verification step for all urgent requests before taking action.'
  };
  return recommendations[weakness] || 'Continue practicing to improve this skill.';
};
