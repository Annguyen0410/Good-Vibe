// Sound System using Web Audio API
class SoundSystem {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = true;
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
        this.masterGain.gain.value = 0.3; // Default volume
    }

    toggle(enabled) {
        this.enabled = enabled;
        if (this.ctx.state === 'suspended' && enabled) {
            this.ctx.resume();
        }
    }

    playClick() {
        if (!this.enabled) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        // Soft bubble pop sound
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400 + Math.random() * 200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    playCombo(multiplier) {
        if (!this.enabled) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        // Ascending pitch based on combo
        const baseFreq = 300;
        const freq = Math.min(baseFreq + (multiplier * 50), 1200);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    }

    playPurchase() {
        if (!this.enabled) return;

        const now = this.ctx.currentTime;

        // Coin/Chime sound
        this.playTone(600, 'sine', now, 0.1);
        this.playTone(1200, 'sine', now + 0.05, 0.2);
    }

    playAchievement() {
        if (!this.enabled) return;

        const now = this.ctx.currentTime;

        // Major chord arpeggio
        this.playTone(523.25, 'triangle', now, 0.3); // C5
        this.playTone(659.25, 'triangle', now + 0.1, 0.3); // E5
        this.playTone(783.99, 'triangle', now + 0.2, 0.3); // G5
        this.playTone(1046.50, 'triangle', now + 0.3, 0.6); // C6
    }

    playTone(freq, type, startTime, duration) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

        osc.start(startTime);
        osc.stop(startTime + duration);
    }
}

const soundSystem = new SoundSystem();
