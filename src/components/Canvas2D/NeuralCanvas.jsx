import { useEffect, useRef } from 'react';

export const NeuralCanvas = ({ corruption = 0, onNodeHover, onNodeClick, threats = [] }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const particlesRef = useRef([]);
  const rotationRef = useRef(0);
  const breathingRef = useRef(0);
  const lastFrameTime = useRef(Date.now());
  const dataFlowsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = Math.min(width, height) / 3.5;

    // Initialize nodes with enhanced properties
    if (nodesRef.current.length === 0) {
      nodesRef.current.push({
        id: 'core',
        x: centerX,
        y: centerY,
        size: 60,
        color: '#00ffff',
        type: 'core',
        label: 'Digital Core',
        health: 100,
        pulsePhase: 0,
        connections: []
      });

      const nodeTypes = [
        { type: 'email', label: 'work@company.com', color: '#00ff88', risk: 'medium' },
        { type: 'device', label: 'iPhone 14', color: '#00ff00', risk: 'low' },
        { type: 'web', label: 'Banking Portal', color: '#ffaa00', risk: 'high' },
        { type: 'email', label: 'personal@gmail.com', color: '#00ff88', risk: 'low' },
        { type: 'device', label: 'Work Laptop', color: '#00ff00', risk: 'medium' },
        { type: 'cloud', label: 'Cloud Storage', color: '#0088ff', risk: 'medium' },
        { type: 'social', label: 'Social Media', color: '#ff00ff', risk: 'high' },
        { type: 'database', label: 'Database', color: '#ff6600', risk: 'high' }
      ];

      nodeTypes.forEach((nodeData, i) => {
        const angle = (i / nodeTypes.length) * Math.PI * 2;
        nodesRef.current.push({
          id: `node-${i}`,
          x: centerX + Math.cos(angle) * baseRadius,
          y: centerY + Math.sin(angle) * baseRadius,
          size: 30,
          color: nodeData.color,
          type: nodeData.type,
          label: nodeData.label,
          risk: nodeData.risk,
          angle: angle,
          radius: baseRadius,
          health: 100,
          threatened: false,
          corrupted: false,
          pulsePhase: Math.random() * Math.PI * 2,
          shield: false
        });
      });
    }

    // Initialize enhanced particles
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          hue: Math.random() * 60 + 160
        });
      }
    }

    // Initialize data flows
    if (dataFlowsRef.current.length === 0) {
      for (let i = 0; i < 20; i++) {
        dataFlowsRef.current.push({
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.01,
          fromNode: Math.floor(Math.random() * (nodesRef.current.length - 1)) + 1,
          toCore: true,
          size: 3 + Math.random() * 3
        });
      }
    }

    const threatNodeIds = threats.map(t => t.targetNodeId);
    nodesRef.current.forEach(node => {
      node.threatened = threatNodeIds.includes(node.id);
      if (node.threatened && corruption > 50) {
        node.corrupted = true;
      }
    });

    const animate = () => {
      const now = Date.now();
      lastFrameTime.current = now;

      // Enhanced background with gradient
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height));
      bgGradient.addColorStop(0, 'rgb(10, 15, 25)');
      bgGradient.addColorStop(0.5, 'rgb(5, 8, 15)');
      bgGradient.addColorStop(1, 'rgb(2, 3, 8)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      rotationRef.current += 0.002;
      breathingRef.current += 0.015;
      const breathScale = 1 + Math.sin(breathingRef.current) * 0.08;

      const nodes = nodesRef.current;

      // Update node positions
      nodes.forEach((node, i) => {
        if (i > 0) {
          const angle = node.angle + rotationRef.current;
          const radius = node.radius * breathScale;
          node.x = centerX + Math.cos(angle) * radius;
          node.y = centerY + Math.sin(angle) * radius;
          node.pulsePhase += 0.05;
        } else {
          node.pulsePhase += 0.03;
        }
      });

      // Draw enhanced connections with gradients
      nodes.forEach((node, i) => {
        if (i > 0) {
          const core = nodes[0];
          
          const gradient = ctx.createLinearGradient(core.x, core.y, node.x, node.y);
          
          if (node.corrupted) {
            gradient.addColorStop(0, 'rgba(255, 0, 0, 0.6)');
            gradient.addColorStop(1, 'rgba(255, 100, 0, 0.3)');
          } else if (node.threatened) {
            gradient.addColorStop(0, 'rgba(255, 200, 0, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 150, 0, 0.3)');
          } else {
            gradient.addColorStop(0, 'rgba(0, 255, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(0, 200, 255, 0.2)');
          }
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 10;
          ctx.shadowColor = node.corrupted ? '#ff0000' : '#00ffff';
          ctx.beginPath();
          ctx.moveTo(core.x, core.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      // Draw data flows
      dataFlowsRef.current.forEach(flow => {
        flow.progress += flow.speed;
        if (flow.progress > 1) flow.progress = 0;

        const fromNode = nodes[flow.fromNode];
        const toNode = nodes[0];
        
        if (fromNode && toNode) {
          const x = fromNode.x + (toNode.x - fromNode.x) * flow.progress;
          const y = fromNode.y + (toNode.y - fromNode.y) * flow.progress;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, flow.size * 3);
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, flow.size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#00ffff';
          ctx.beginPath();
          ctx.arc(x, y, flow.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw threat waves with enhanced effects
      threats.forEach(threat => {
        const targetNode = nodes.find(n => n.id === threat.targetNodeId);
        if (targetNode) {
          const waveRadius = 40 + Math.sin(now / 250) * 20;
          
          // Multiple wave rings
          for (let i = 0; i < 3; i++) {
            const radius = waveRadius + i * 15;
            const opacity = 0.5 - i * 0.15;
            
            ctx.strokeStyle = `rgba(255, 0, 0, ${opacity + Math.sin(now / 200) * 0.2})`;
            ctx.lineWidth = 4 - i;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ff0000';
            ctx.beginPath();
            ctx.arc(targetNode.x, targetNode.y, radius, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.shadowBlur = 0;

          // Enhanced glitch effect
          if (Math.random() > 0.7) {
            ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.lineWidth = 2;
            for (let i = 0; i < 5; i++) {
              ctx.beginPath();
              ctx.moveTo(targetNode.x - 30, targetNode.y + (Math.random() * 20 - 10));
              ctx.lineTo(targetNode.x + 30, targetNode.y + (Math.random() * 20 - 10));
              ctx.stroke();
            }
          }
        }
      });

      // Draw nodes with enhanced visuals
      nodes.forEach((node) => {
        const pulseSize = Math.sin(node.pulsePhase) * 0.2 + 1;
        
        // Outer glow layers
        for (let i = 3; i > 0; i--) {
          const glowSize = node.size * (node.threatened ? 3 : 2.5) * pulseSize * (1 + i * 0.2);
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
          
          if (node.corrupted) {
            gradient.addColorStop(0, `rgba(255, 0, 0, ${0.4 / i})`);
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
          } else if (node.threatened) {
            gradient.addColorStop(0, `rgba(255, 200, 0, ${0.4 / i})`);
            gradient.addColorStop(1, 'rgba(255, 100, 0, 0)');
          } else {
            const rgb = hexToRgb(node.color);
            gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.5 / i})`);
            gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
          }

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node core with gradient
        const coreGradient = ctx.createRadialGradient(
          node.x - node.size * 0.3, 
          node.y - node.size * 0.3, 
          0, 
          node.x, 
          node.y, 
          node.size * 0.7
        );
        
        const nodeColor = node.corrupted ? '#ff0000' : node.color;
        coreGradient.addColorStop(0, lightenColor(nodeColor, 40));
        coreGradient.addColorStop(1, nodeColor);
        
        ctx.fillStyle = coreGradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.7 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node ring with animation
        ctx.strokeStyle = nodeColor;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 10;
        ctx.shadowColor = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseSize, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Shield effect for protected nodes
        if (node.shield) {
          ctx.strokeStyle = 'rgba(0, 255, 100, 0.6)';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 1.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Node type indicator (geometric shape)
        if (node.type && node.size > 20) {
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.shadowBlur = 5;
          ctx.shadowColor = nodeColor;
          
          const iconSize = node.size * 0.4;
          
          switch(node.type) {
            case 'email':
              // Envelope shape
              ctx.beginPath();
              ctx.rect(-iconSize/2, -iconSize/2, iconSize, iconSize * 0.7);
              ctx.moveTo(-iconSize/2, -iconSize/2);
              ctx.lineTo(0, 0);
              ctx.lineTo(iconSize/2, -iconSize/2);
              ctx.stroke();
              break;
            case 'device':
              // Rectangle (phone/laptop)
              ctx.beginPath();
              ctx.rect(-iconSize/2, -iconSize/2, iconSize, iconSize * 1.2);
              ctx.stroke();
              break;
            case 'web':
              // Globe/circle with lines
              ctx.beginPath();
              ctx.arc(0, 0, iconSize/2, 0, Math.PI * 2);
              ctx.moveTo(-iconSize/2, 0);
              ctx.lineTo(iconSize/2, 0);
              ctx.moveTo(0, -iconSize/2);
              ctx.lineTo(0, iconSize/2);
              ctx.stroke();
              break;
            case 'cloud':
              // Cloud shape
              ctx.beginPath();
              ctx.arc(-iconSize/4, 0, iconSize/3, 0, Math.PI * 2);
              ctx.arc(iconSize/4, 0, iconSize/3, 0, Math.PI * 2);
              ctx.arc(0, -iconSize/4, iconSize/2.5, 0, Math.PI * 2);
              ctx.stroke();
              break;
            case 'social':
              // Network nodes
              ctx.beginPath();
              ctx.arc(-iconSize/3, -iconSize/3, iconSize/6, 0, Math.PI * 2);
              ctx.arc(iconSize/3, -iconSize/3, iconSize/6, 0, Math.PI * 2);
              ctx.arc(0, iconSize/3, iconSize/6, 0, Math.PI * 2);
              ctx.moveTo(-iconSize/3, -iconSize/3);
              ctx.lineTo(0, iconSize/3);
              ctx.moveTo(iconSize/3, -iconSize/3);
              ctx.lineTo(0, iconSize/3);
              ctx.stroke();
              break;
            case 'database':
              // Cylinder shape
              ctx.beginPath();
              ctx.ellipse(0, -iconSize/3, iconSize/2, iconSize/6, 0, 0, Math.PI * 2);
              ctx.moveTo(-iconSize/2, -iconSize/3);
              ctx.lineTo(-iconSize/2, iconSize/3);
              ctx.moveTo(iconSize/2, -iconSize/3);
              ctx.lineTo(iconSize/2, iconSize/3);
              ctx.ellipse(0, iconSize/3, iconSize/2, iconSize/6, 0, 0, Math.PI * 2);
              ctx.stroke();
              break;
            case 'core':
              // Hexagon
              for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const x = Math.cos(angle) * iconSize/2;
                const y = Math.sin(angle) * iconSize/2;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              ctx.stroke();
              break;
          }
          
          ctx.restore();
        }
      });

      // Enhanced particles with trails
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Particle glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.opacity})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Corruption wave with enhanced visuals
      if (corruption > 0) {
        const waveRadius = 180 + Math.sin(now / 400) * 60;
        
        for (let i = 0; i < 3; i++) {
          const radius = waveRadius + i * 30;
          const opacity = (corruption / 200) * (1 - i * 0.3);
          
          ctx.strokeStyle = `rgba(255, 0, 0, ${opacity})`;
          ctx.lineWidth = 5 - i;
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#ff0000';
          ctx.setLineDash([15, 15]);
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.shadowBlur = 0;
      }

      // Scan line effect
      const scanY = (now / 20) % height;
      const scanGradient = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      scanGradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
      scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.1)');
      scanGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 2, width, 4);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let hoveredNode = null;
      nodesRef.current.forEach(node => {
        const dist = Math.sqrt((mouseX - node.x) ** 2 + (mouseY - node.y) ** 2);
        if (dist < node.size * 1.5) {
          hoveredNode = node;
          canvas.style.cursor = 'pointer';
        }
      });

      if (!hoveredNode) {
        canvas.style.cursor = 'default';
      }

      if (onNodeHover) {
        onNodeHover(hoveredNode);
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      nodesRef.current.forEach(node => {
        const dist = Math.sqrt((mouseX - node.x) ** 2 + (mouseY - node.y) ** 2);
        if (dist < node.size * 1.5) {
          if (onNodeClick) {
            onNodeClick(node);
          }
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [corruption, threats, onNodeHover, onNodeClick]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'rgb(2, 3, 8)' }}
    />
  );
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 255, b: 255 };
}

function lightenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  const r = Math.min(255, rgb.r + (255 - rgb.r) * percent / 100);
  const g = Math.min(255, rgb.g + (255 - rgb.g) * percent / 100);
  const b = Math.min(255, rgb.b + (255 - rgb.b) * percent / 100);
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}
