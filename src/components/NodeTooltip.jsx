import { motion } from 'framer-motion';
import { Mail, Smartphone, Globe, Database } from 'lucide-react';

const getNodeIcon = (type) => {
  switch (type) {
    case 'email': return Mail;
    case 'device': return Smartphone;
    case 'web': return Globe;
    default: return Database;
  }
};

export const NodeTooltip = ({ node, position }) => {
  const Icon = getNodeIcon(node.type);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        position: 'fixed',
        left: position.x + 20,
        top: position.y + 20,
        pointerEvents: 'none'
      }}
      className="cyber-border bg-black/95 backdrop-blur-sm p-4 min-w-[200px]"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-cyber-blue" />
        <span className="font-orbitron text-cyber-blue text-sm">{node.type.toUpperCase()}</span>
      </div>
      <h4 className="text-white font-rajdhani font-bold mb-1">{node.label}</h4>
      <p className="text-cyan-300 text-xs font-rajdhani">{node.description}</p>
      <div className="mt-2 pt-2 border-t border-cyan-500/30">
        <div className="flex justify-between text-xs">
          <span className="text-cyan-400">Risk Level:</span>
          <span className={`font-bold ${
            node.risk === 'low' ? 'text-green-400' :
            node.risk === 'medium' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {node.risk.toUpperCase()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
