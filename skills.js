// Skill Manager - Constellation System
class SkillManager {
    constructor() {
        this.unlockedSkills = [];
        this.skillTree = {
            // Solar Path (Active Clicking)
            sunbeam: {
                name: "Sunbeam",
                desc: "+10% Base Click Value",
                cost: 5,
                icon: "☀️",
                prereq: null,
                path: "solar",
                bonus: { clickValue: 1.1 }
            },
            solarFlare: {
                name: "Solar Flare",
                desc: "+5% Crit Chance",
                cost: 10,
                icon: "💫",
                prereq: "sunbeam",
                path: "solar",
                bonus: { critChance: 0.05 }
            },
            supernova: {
                name: "Supernova",
                desc: "Combo decays 50% slower",
                cost: 20,
                icon: "⭐",
                prereq: "solarFlare",
                path: "solar",
                bonus: { comboDecay: 0.5 }
            },
            cosmicBurst: {
                name: "Cosmic Burst",
                desc: "+20% Click Value",
                cost: 35,
                icon: "💥",
                prereq: "supernova",
                path: "solar",
                bonus: { clickValue: 1.2 }
            },
            // v2.0 Skill
            solarWind: {
                name: "Solar Wind",
                desc: "+10% Crit Damage",
                cost: 150,
                icon: "🌪️",
                prereq: "cosmicBurst",
                path: "solar",
                bonus: { critDamage: 1.1 } // Note: Need to implement critDamage modifier support in game.js
            },

            // Lunar Path (Passive Production)
            moonlight: {
                name: "Moonlight",
                desc: "+10% Passive Production",
                cost: 5,
                icon: "🌙",
                prereq: null,
                path: "lunar",
                bonus: { passiveProduction: 1.1 }
            },
            tidalWave: {
                name: "Tidal Wave",
                desc: "Upgrades are 5% cheaper",
                cost: 10,
                icon: "🌊",
                prereq: "moonlight",
                path: "lunar",
                bonus: { upgradeCost: 0.95 }
            },
            eclipse: {
                name: "Eclipse",
                desc: "+20% Offline Gains",
                cost: 20,
                icon: "🌑",
                prereq: "tidalWave",
                path: "lunar",
                bonus: { offlineGains: 1.2 }
            },
            celestialHarmony: {
                name: "Celestial Harmony",
                desc: "+30% Passive Production",
                cost: 35,
                icon: "🌌",
                prereq: "eclipse",
                path: "lunar",
                bonus: { passiveProduction: 1.3 }
            },
            // v2.0 Skill
            darkMatter: {
                name: "Dark Matter",
                desc: "+300% Passive Production",
                cost: 150,
                icon: "⚫",
                prereq: "celestialHarmony",
                path: "lunar",
                bonus: { passiveProduction: 4.0 }
            }
        };
    }

    canUnlock(skillId) {
        const skill = this.skillTree[skillId];
        if (!skill) return false;
        if (this.unlockedSkills.includes(skillId)) return false;
        if (skill.cost > gameState.starDust) return false;
        if (skill.prereq && !this.unlockedSkills.includes(skill.prereq)) return false;
        return true;
    }

    unlockSkill(skillId) {
        if (!this.canUnlock(skillId)) return;

        const skill = this.skillTree[skillId];
        gameState.starDust -= skill.cost;
        this.unlockedSkills.push(skillId);

        updateModifiers();
        this.renderSkills();
        updateDisplay();
        showToast(`🌟 Unlocked ${skill.name}!`);

        if (gameState.settings.sound) {
            soundSystem.playAchievement();
        }
    }

    applyModifiers(modifiers) {
        this.unlockedSkills.forEach(skillId => {
            const skill = this.skillTree[skillId];
            if (skill.bonus.clickValue) modifiers.clickValue *= skill.bonus.clickValue;
            if (skill.bonus.passiveProduction) modifiers.passiveProduction *= skill.bonus.passiveProduction;
            if (skill.bonus.critChance) modifiers.critChance += skill.bonus.critChance;
            if (skill.bonus.comboDecay) modifiers.comboDecay *= skill.bonus.comboDecay;
            // v2.0: New modifiers
            if (skill.bonus.critDamage) modifiers.critDamage = (modifiers.critDamage || 2) * skill.bonus.critDamage;
            if (skill.bonus.upgradeCost) modifiers.upgradeCost = (modifiers.upgradeCost || 1) * skill.bonus.upgradeCost;
            if (skill.bonus.offlineGains) modifiers.offlineGains = (modifiers.offlineGains || 1) * skill.bonus.offlineGains;
        });
    }

    renderSkills() {
        const container = document.getElementById('skills-tree');
        if (!container) return;

        container.innerHTML = '<div style="text-align: center; margin-bottom: 15px; color: var(--text-secondary);">Use Star Dust to unlock skills</div>';

        // Solar Path
        const solarDiv = document.createElement('div');
        solarDiv.innerHTML = '<h4 style="color: var(--accent-gold); margin: 10px 0;">☀️ Solar Path</h4>';
        ['sunbeam', 'solarFlare', 'supernova', 'cosmicBurst', 'solarWind'].forEach(id => {
            solarDiv.appendChild(this.createSkillCard(id));
        });
        container.appendChild(solarDiv);

        // Lunar Path
        const lunarDiv = document.createElement('div');
        lunarDiv.innerHTML = '<h4 style="color: var(--accent-blue); margin: 15px 0 10px 0;">🌙 Lunar Path</h4>';
        ['moonlight', 'tidalWave', 'eclipse', 'celestialHarmony', 'darkMatter'].forEach(id => {
            lunarDiv.appendChild(this.createSkillCard(id));
        });
        container.appendChild(lunarDiv);
    }

    createSkillCard(skillId) {
        const skill = this.skillTree[skillId];
        const unlocked = this.unlockedSkills.includes(skillId);
        const canUnlock = this.canUnlock(skillId);

        const card = document.createElement('div');
        card.className = `charm-card ${unlocked ? 'unlocked' : canUnlock ? '' : 'disabled'}`;
        card.style.marginBottom = '8px';
        card.style.opacity = unlocked ? '0.6' : '1';

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: 700;">${skill.icon} ${skill.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${skill.desc}</div>
                </div>
                <div style="font-weight: 700; color: var(--accent-purple);">
                    ${unlocked ? '✓' : skill.cost + ' ✨'}
                </div>
            </div>
        `;

        if (!unlocked) {
            card.addEventListener('click', () => this.unlockSkill(skillId));
            card.style.cursor = canUnlock ? 'pointer' : 'not-allowed';
        }

        return card;
    }
}

// Initialize skill manager
const skillManager = new SkillManager();
