class AudioManagerClass {
  constructor() {
    this.context = null;
    this.oscillators = {};
    this.gainNodes = {};
  }

  init() {
    if (typeof window !== 'undefined' && !this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playAmbient() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(55, this.context.currentTime);
    gainNode.gain.setValueAtTime(0.05, this.context.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();

    this.oscillators.ambient = oscillator;
    this.gainNodes.ambient = gainNode;
  }

  playThreatCue() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(220, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(110, this.context.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.1, this.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.5);
  }

  playSuccess() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(880, this.context.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.1, this.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.2);
  }

  playTransition() {
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(330, this.context.currentTime);
    
    gainNode.gain.setValueAtTime(0.08, this.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.3);
  }

  stopAll() {
    Object.values(this.oscillators).forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Already stopped
      }
    });
    this.oscillators = {};
    this.gainNodes = {};
  }
}

export const AudioManager = new AudioManagerClass();
