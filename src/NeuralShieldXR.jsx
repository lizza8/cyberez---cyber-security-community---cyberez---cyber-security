import { useState, useEffect } from 'react';
import { LandingScreen } from './screens/LandingScreen';
import { NeuralEnvironment } from './screens/NeuralEnvironment';
import { ThreatSimulation } from './screens/ThreatSimulation';
import { AnalysisScreen } from './screens/AnalysisScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AIObserver } from './components/AIObserver';
import { AudioManager } from './utils/AudioManager';

export const NeuralShieldXR = () => {
  const [screen, setScreen] = useState('landing'); // landing, neural, threat, analysis, profile
  const [userData, setUserData] = useState({
    decisions: [],
    threatResponses: [],
    reactionTimes: [],
    riskScore: 0,
    strengths: [],
    weaknesses: []
  });
  const [aiMessages, setAiMessages] = useState([]);

  useEffect(() => {
    // Initialize audio on mount
    AudioManager.init();
    AudioManager.playAmbient();

    return () => {
      AudioManager.stopAll();
    };
  }, []);

  const handleEnter = () => {
    setScreen('neural');
    AudioManager.playTransition();
  };

  const handleStartThreat = () => {
    setScreen('threat');
    AudioManager.playThreatCue();
  };

  const handleThreatComplete = (data) => {
    setUserData(prev => ({
      ...prev,
      ...data
    }));
    setScreen('analysis');
    AudioManager.playSuccess();
  };

  const handleViewProfile = () => {
    setScreen('profile');
  };

  const handleRestart = () => {
    setScreen('neural');
    setUserData({
      decisions: [],
      threatResponses: [],
      reactionTimes: [],
      riskScore: 0,
      strengths: [],
      weaknesses: []
    });
    setAiMessages([]);
  };

  const addAIMessage = (message) => {
    setAiMessages(prev => [...prev, { text: message, timestamp: Date.now() }]);
    setTimeout(() => {
      setAiMessages(prev => prev.slice(1));
    }, 5000);
  };

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Scanline effect */}
      <div className="fixed inset-0 scanline pointer-events-none z-50" />
      
      {/* AI Observer - always visible after landing */}
      {screen !== 'landing' && (
        <AIObserver messages={aiMessages} userData={userData} />
      )}

      {/* Screen Router */}
      {screen === 'landing' && <LandingScreen onEnter={handleEnter} />}
      {screen === 'neural' && (
        <NeuralEnvironment 
          onStartThreat={handleStartThreat}
          addAIMessage={addAIMessage}
        />
      )}
      {screen === 'threat' && (
        <ThreatSimulation 
          onComplete={handleThreatComplete}
          addAIMessage={addAIMessage}
        />
      )}
      {screen === 'analysis' && (
        <AnalysisScreen 
          userData={userData}
          onViewProfile={handleViewProfile}
          onRestart={handleRestart}
        />
      )}
      {screen === 'profile' && (
        <ProfileScreen 
          userData={userData}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};
