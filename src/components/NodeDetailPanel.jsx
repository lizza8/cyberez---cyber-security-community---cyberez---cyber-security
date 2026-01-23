import { motion } from 'framer-motion';
import { X, Shield, AlertTriangle, CheckCircle, Lock, Unlock } from 'lucide-react';
import { Button } from './ui/button';

export const NodeDetailPanel = ({ node, onClose }) => {
  if (!node) return null;

  const getRiskIcon = () => {
    switch (node.risk) {
      case 'low': return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'medium': return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case 'high': return <Shield className="w-6 h-6 text-red-400" />;
      default: return <Shield className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getSecurityRecommendations = () => {
    const recommendations = {
      'low': [
        'Enable two-factor authentication',
        'Regular password updates recommended',
        'Monitor for unusual activity'
      ],
      'medium': [
        'Enable two-factor authentication immediately',
        'Use unique, strong passwords',
        'Review connected applications',
        'Enable login notifications'
      ],
      'high': [
        'CRITICAL: Enable two-factor authentication',
        'Change password immediately',
        'Review all recent activity',
        'Disconnect unused applications',
        'Enable all security features'
      ]
    };
    return recommendations[node.risk] || recommendations['medium'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 w-96 max-h-[80vh] overflow-y-auto cyber-border cyber-panel p-6 rounded z-50"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          {getRiskIcon()}
          <div>
            <h3 className="font-orbitron text-white text-lg">{node.label}</h3>
            <p className="text-cyan-400 text-xs font-rajdhani">
              {node.type?.toUpperCase() || 'DIGITAL ASSET'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-cyan-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Risk Assessment */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 text-sm font-rajdhani">Risk Level</span>
          <span className={`font-bold font-orbitron text-sm ${
            node.risk === 'low' ? 'text-green-400' :
            node.risk === 'medium' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {node.risk?.toUpperCase() || 'UNKNOWN'}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              node.risk === 'low' ? 'bg-green-400' :
              node.risk === 'medium' ? 'bg-yellow-400' :
              'bg-red-400'
            }`}
            style={{
              width: node.risk === 'low' ? '33%' :
                     node.risk === 'medium' ? '66%' : '100%'
            }}
          />
        </div>
      </div>

      {/* Node Health */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 text-sm font-rajdhani">Node Health</span>
          <span className="text-white font-bold text-sm">{node.health || 100}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{ width: `${node.health || 100}%` }}
          />
        </div>
      </div>

      {/* Security Status */}
      <div className="mb-6 space-y-3">
        <h4 className="font-orbitron text-cyan-400 text-sm mb-3">SECURITY STATUS</h4>
        
        <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-sm font-rajdhani text-white">Encryption</span>
          </div>
          <span className="text-green-400 text-xs font-bold">ACTIVE</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded">
          <div className="flex items-center gap-2">
            {node.risk === 'high' ? (
              <Unlock className="w-4 h-4 text-red-400" />
            ) : (
              <Lock className="w-4 h-4 text-green-400" />
            )}
            <span className="text-sm font-rajdhani text-white">2FA</span>
          </div>
          <span className={`text-xs font-bold ${
            node.risk === 'high' ? 'text-red-400' : 'text-green-400'
          }`}>
            {node.risk === 'high' ? 'DISABLED' : 'ENABLED'}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-rajdhani text-white">Monitoring</span>
          </div>
          <span className="text-cyan-400 text-xs font-bold">ACTIVE</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6">
        <h4 className="font-orbitron text-cyan-400 text-sm mb-3">RECOMMENDATIONS</h4>
        <div className="space-y-2">
          {getSecurityRecommendations().map((rec, i) => (
            <div key={i} className="flex items-start gap-2 text-xs font-rajdhani text-cyan-300">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>{rec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <Button
          className="w-full py-3 bg-transparent cyber-border hover:bg-cyan-500/20 transition-all rounded"
        >
          <span className="font-orbitron text-cyan-400 text-sm">ISOLATE NODE</span>
        </Button>
        <Button
          className="w-full py-3 bg-transparent cyber-border hover:bg-green-500/20 transition-all rounded"
        >
          <span className="font-orbitron text-green-400 text-sm">STRENGTHEN SECURITY</span>
        </Button>
      </div>

      {/* Metadata */}
      <div className="mt-6 pt-6 border-t border-cyan-500/20">
        <div className="text-xs font-rajdhani text-cyan-400 space-y-1">
          <p>Node ID: {node.id}</p>
          <p>Connections: {node.connections?.length || 1}</p>
          <p>Last Activity: Active</p>
        </div>
      </div>
    </motion.div>
  );
};
