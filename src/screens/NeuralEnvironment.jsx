import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeuralCanvas } from '../components/Canvas2D/NeuralCanvas';
import { NodeDetailPanel } from '../components/NodeDetailPanel';
import { Button } from '../components/ui/button';
import { Play, Info, Zap } from 'lucide-react';

export const NeuralEnvironment = ({ onStartThreat, addAIMessage }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (addAIMessage) {
        addAIMessage("This world reacts to your decisions. There are no right answers.");
      }
      setShowIntro(false);
    }, 3000);

    const timer2 = setTimeout(() => {
      if (addAIMessage) {
        addAIMessage("Hover over nodes to inspect your digital footprint.");
      }
    }, 6000);

    const timer3 = setTimeout(() => {
      if (addAIMessage) {
        addAIMessage("Click nodes for detailed analysis. The network is alive.");
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [addAIMessage]);

  const handleNodeHover = (node) => {
    setHoveredNode(node);
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (addAIMessage && node) {
      addAIMessage(`Analyzing ${node.label}... Risk level: ${node.risk?.toUpperCase() || 'UNKNOWN'}`);
    }
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleStartThreat = () => {
    if (addAIMessage) {
      addAIMessage("Threat simulation initiated. Your network is now vulnerable.");
    }
    setTimeout(() => {
      if (onStartThreat) {
        onStartThreat();
      }
    }, 1500);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Neural Network Canvas */}
      <NeuralCanvas 
        corruption={0}
        onNodeHover={handleNodeHover}
        onNodeClick={handleNodeClick}
        threats={[]}
      />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 grid-cyber opacity-5 pointer-events-none" />

      {/* Intro Message */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="font-orbitron text-5xl font-bold text-cyber-blue text-glow mb-4">
                NEURAL NETWORK ONLINE
              </h2>
              <p className="text-cyan-300 text-2xl font-rajdhani">
                Mapping your digital identity...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Node Tooltip */}
      <AnimatePresence>
        {hoveredNode && !selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              pointerEvents: 'none'
            }}
            className="cyber-border cyber-panel p-4 rounded max-w-xs z-50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-cyber-blue" />
              <span className="font-orbitron text-cyber-blue text-xs">
                {hoveredNode.type?.toUpperCase() || 'NODE'}
              </span>
            </div>
            <h4 className="text-white font-rajdhani font-bold mb-1 text-sm">
              {hoveredNode.label}
            </h4>
            <div className="flex justify-between text-xs mt-2 pt-2 border-t border-cyan-500/30">
              <span className="text-cyan-400">Risk:</span>
              <span className={`font-bold ${
                hoveredNode.risk === 'low' ? 'text-green-400' :
                hoveredNode.risk === 'medium' ? 'text-yellow-400' :
                'text-red-400'
              }`}>
                {hoveredNode.risk?.toUpperCase() || 'UNKNOWN'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Node Detail Panel */}
      <AnimatePresence>
        {selectedNode && (
          <NodeDetailPanel 
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </AnimatePresence>

      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4 }}
        className="absolute top-8 right-8 flex flex-col gap-4 z-40"
      >
        <Button
          onClick={handleStartThreat}
          className="group px-8 py-6 bg-transparent cyber-border hover:bg-red-500/20 transition-all rounded"
        >
          <Play className="w-5 h-5 mr-2 text-cyber-red" />
          <span className="font-orbitron text-cyber-red group-hover:text-white">
            INITIATE THREAT SIMULATION
          </span>
        </Button>

        <div className="cyber-border cyber-panel p-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-cyber-blue" />
            <span className="font-orbitron text-sm text-cyber-blue">INTERACTION</span>
          </div>
          <div className="text-cyan-300 text-xs font-rajdhani space-y-1">
            <p>• Hover nodes to inspect</p>
            <p>• Click nodes for details</p>
            <p>• Network breathes organically</p>
            <p>• Pulses show live activity</p>
          </div>
        </div>
      </motion.div>

      {/* Network Stats */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-8 cyber-border cyber-panel p-6 rounded z-40"
      >
        <h3 className="font-orbitron text-cyber-blue mb-4 text-sm">NETWORK STATUS</h3>
        <div className="space-y-2 font-rajdhani text-cyan-300 text-sm">
          <div className="flex justify-between gap-8">
            <span>Active Nodes:</span>
            <span className="text-white font-bold">8</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Connections:</span>
            <span className="text-white font-bold">7</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Network Health:</span>
            <span className="text-green-400 font-bold">100%</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Threat Level:</span>
            <span className="text-green-400 font-bold">SECURE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
