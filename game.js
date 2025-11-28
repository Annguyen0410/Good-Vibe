// ============================================
// ETHEREAL VIBES - ULTIMATE EDITION
// Advanced Game System with Pets, Seasons, Events, Crafting
// ============================================

// Game State
let gameState = {
    vibes: 0,
    totalVibes: 0,
    vibesPerSecond: 0,
    clickCount: 0,
    startTime: Date.now(),
    lastTick: Date.now(),

    // Prestige
    prestigeLevel: 0,
    starDust: 0,

    // Combo System
    combo: {
        multiplier: 1.0,
        clicks: 0,
        lastClickTime: 0,
        maxMultiplier: 1.0
    },

    // Frenzy Mode
    frenzy: {
        active: false,
        endTime: 0
    },

    // Pet System - Each pet type stores its own progress!
    currentPet: 'bird',
    pets: {
        bird: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 },
        dragon: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 },
        unicorn: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 },
        cat: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 },
        wolf: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 },
        cosmic: { level: 1, exp: 0, stage: 'egg', fedCount: 0, lastPlayed: 0 }
    },

    // Seasons System
    season: {
        current: 'spring', // spring, summer, autumn, winter
        daysSince: 0,
        bonusActive: true
    },

    // Events
    events: {
        active: null,
        history: []
    },

    // Crafting Materials
    materials: {
        essence: 0,
        fragments: 0,
        crystals: 0
    },

    // v2.0: Daily Rewards
    dailyReward: {
        lastClaim: 0,
        streak: 0,
        day: 1,
        claimedDays: [] // Track which days were claimed
    },
    dailyBuff: {
        active: false,
        type: null,
        value: 0,
        endTime: 0
    },

    // v2.0: Milestones
    milestones: {
        completed: [],
        vibesReached: [],
        clicksReached: []
    },

    // v2.0: Auto-Clicker
    autoClicker: {
        level: 0,
        lastClick: 0
    },

    // v2.0: Active Boosts
    boosts: [],

    // v2.0: Offline Progress
    offlineTime: Date.now(),

    // Modifiers
    modifiers: {
        clickValue: 1.0,
        passiveProduction: 1.0,
        critChance: 0,
        comboDecay: 1.0,
        petBonus: 0,
        seasonBonus: 1.0,
        eventBonus: 1.0
    },

    // Upgrades
    upgrades: {
        friendlyNeighbor: { count: 0, cost: 10, production: 1 },
        cuteDog: { count: 0, cost: 100, production: 5 },
        motivationalSpeaker: { count: 0, cost: 1000, production: 50 },
        yogaInstructor: { count: 0, cost: 5000, production: 200 },
        lifeCoach: { count: 0, cost: 20000, production: 1000 },
        meditationGuru: { count: 0, cost: 100000, production: 5000 },
        angelInvestor: { count: 0, cost: 1000000, production: 25000 },
        zenMaster: { count: 0, cost: 10000000, production: 75000 },
        universeVibe: { count: 0, cost: 50000000, production: 100000 },
        cosmicHarmony: { count: 0, cost: 250000000, production: 500000 },
        infinityEssence: { count: 0, cost: 1000000000, production: 2500000 },
        spiritualGuide: { count: 0, cost: 3000000000, production: 7500000 },
        astralWizard: { count: 0, cost: 10000000000, production: 15000000 },
        quantumHealer: { count: 0, cost: 50000000000, production: 75000000 },
        celestialMonk: { count: 0, cost: 200000000000, production: 300000000 },
        dimensionalSage: { count: 0, cost: 1000000000000, production: 1500000000 },
        etherealOracle: { count: 0, cost: 5000000000000, production: 7500000000 },
        cosmicArchitect: { count: 0, cost: 20000000000000, production: 30000000000 },
        divineEmissary: { count: 0, cost: 100000000000000, production: 150000000000 },
        transcendentBeing: { count: 0, cost: 500000000000000, production: 750000000000 },
        voidWalker: { count: 0, cost: 2000000000000000, production: 3000000000000 },
        omnipotentForce: { count: 0, cost: 10000000000000000, production: 15000000000000 },
        universalConsciousness: { count: 0, cost: 50000000000000000, production: 75000000000000 },
        realityBender: { count: 0, cost: 200000000000000000, production: 300000000000000 },
        infiniteWisdom: { count: 0, cost: 1000000000000000000, production: 1500000000000000 },
        timelessEntity: { count: 0, cost: 5000000000000000000, production: 7500000000000000 },
        multiversalBeing: { count: 0, cost: 20000000000000000000, production: 30000000000000000 },
        absoluteExistence: { count: 0, cost: 100000000000000000000, production: 150000000000000000 },
        primordialForce: { count: 0, cost: 500000000000000000000, production: 750000000000000000 },
        godOfVibes: { count: 0, cost: 2000000000000000000000, production: 3000000000000000000 },
        creatorDivine: { count: 0, cost: 10000000000000000000000, production: 15000000000000000000 },
        omniversalMind: { count: 0, cost: 50000000000000000000000, production: 75000000000000000000 },
        theOneAboveAll: { count: 0, cost: 250000000000000000000000, production: 375000000000000000000 },
        existenceMaster: { count: 0, cost: 1000000000000000000000000, production: 1500000000000000000000 },
        infinityItself: { count: 0, cost: 5000000000000000000000000, production: 7500000000000000000000 }
    },

    // Achievements
    achievements: [],

    // Settings
    settings: {
        sound: true,
        particles: true,
        autosave: true
    }
};

// Upgrade Definitions
const upgradeTypes = {
    friendlyNeighbor: { name: "Friendly Neighbor", icon: "👋", desc: "+1 vibe/sec" },
    cuteDog: { name: "Cute Dog", icon: "🐕", desc: "+5 vibes/sec" },
    motivationalSpeaker: { name: "Motivational Speaker", icon: "🎤", desc: "+50 vibes/sec" },
    yogaInstructor: { name: "Yoga Instructor", icon: "🧘", desc: "+200 vibes/sec" },
    lifeCoach: { name: "Life Coach", icon: "📋", desc: "+1K vibes/sec" },
    meditationGuru: { name: "Meditation Guru", icon: "🕉️", desc: "+5K vibes/sec" },
    angelInvestor: { name: "Angel Investor", icon: "👼", desc: "+25K vibes/sec" },
    zenMaster: { name: "Zen Master", icon: "🧘‍♂️", desc: "+75K vibes/sec" },
    universeVibe: { name: "Universe Vibe", icon: "🌌", desc: "+100K vibes/sec" },
    cosmicHarmony: { name: "Cosmic Harmony", icon: "☯️", desc: "+500K vibes/sec" },
    infinityEssence: { name: "Infinity Essence", icon: "♾️", desc: "+2.5M vibes/sec" },
    spiritualGuide: { name: "Spiritual Guide", icon: "🙏", desc: "+7.5M vibes/sec" },
    astralWizard: { name: "Astral Wizard", icon: "🧙", desc: "+15M vibes/sec" },
    quantumHealer: { name: "Quantum Healer", icon: "💫", desc: "+75M vibes/sec" },
    celestialMonk: { name: "Celestial Monk", icon: "🕉️", desc: "+300M vibes/sec" },
    dimensionalSage: { name: "Dimensional Sage", icon: "👁️", desc: "+1.5B vibes/sec" },
    etherealOracle: { name: "Ethereal Oracle", icon: "🔮", desc: "+7.5B vibes/sec" },
    cosmicArchitect: { name: "Cosmic Architect", icon: "🏗️", desc: "+30B vibes/sec" },
    divineEmissary: { name: "Divine Emissary", icon: "👼", desc: "+150B vibes/sec" },
    transcendentBeing: { name: "Transcendent Being", icon: "🌟", desc: "+750B vibes/sec" },
    voidWalker: { name: "Void Walker", icon: "🌀", desc: "+3T vibes/sec" },
    omnipotentForce: { name: "Omnipotent Force", icon: "⚡", desc: "+15T vibes/sec" },
    universalConsciousness: { name: "Universal Consciousness", icon: "🧠", desc: "+75T vibes/sec" },
    realityBender: { name: "Reality Bender", icon: "🌐", desc: "+300T vibes/sec" },
    infiniteWisdom: { name: "Infinite Wisdom", icon: "📚", desc: "+1.5Qa vibes/sec" },
    timelessEntity: { name: "Timeless Entity", icon: "⏳", desc: "+7.5Qa vibes/sec" },
    multiversalBeing: { name: "Multiversal Being", icon: "🌍", desc: "+30Qa vibes/sec" },
    absoluteExistence: { name: "Absolute Existence", icon: "💠", desc: "+150Qa vibes/sec" },
    primordialForce: { name: "Primordial Force", icon: "🔱", desc: "+750Qa vibes/sec" },
    godOfVibes: { name: "God of Vibes", icon: "⚜️", desc: "+3Qi vibes/sec" },
    creatorDivine: { name: "Creator Divine", icon: "✨", desc: "+15Qi vibes/sec" },
    omniversalMind: { name: "Omniversal Mind", icon: "🌌", desc: "+75Qi vibes/sec" },
    theOneAboveAll: { name: "The One Above All", icon: "👑", desc: "+375Qi vibes/sec" },
    existenceMaster: { name: "Existence Master", icon: "🔆", desc: "+1.5Sx vibes/sec" },
    infinityItself: { name: "Infinity Itself", icon: "∞", desc: "+7.5Sx vibes/sec" }
};

// Achievement Definitions  
const achievements = [
    { id: 'first_click', name: 'First Step', desc: 'Click the heart', icon: '🌱', check: () => gameState.clickCount >= 1 },
    { id: 'century', name: 'Century', desc: 'Click 100 times', icon: '💯', check: () => gameState.clickCount >= 100 },
    { id: 'thousand', name: 'Thousand Clicks', desc: 'Click 1,000 times', icon: '🔥', check: () => gameState.clickCount >= 1000 },
    { id: 'investor', name: 'Investor', desc: 'Buy first upgrade', icon: '💰', check: () => getTotalUpgrades() >= 1 },
    { id: 'collector', name: 'Collector', desc: 'Own 10 upgrades', icon: '🏗️', check: () => getTotalUpgrades() >= 10 },
    { id: 'millionaire', name: 'Millionaire', desc: '1M total vibes', icon: '💎', check: () => gameState.totalVibes >= 1000000 },
    { id: 'combo_master', name: 'Combo Master', desc: 'Reach 5x combo', icon: '⚡', check: () => gameState.combo.multiplier >= 5 },
    { id: 'frenzy', name: 'Frenzy!', desc: 'Activate frenzy mode', icon: '🌟', check: () => gameState.frenzy.active || gameState.events.history.includes('frenzy') },
    { id: 'ascended', name: 'Ascended', desc: 'Prestige once', icon: '✨', check: () => gameState.prestigeLevel >= 1 },
    { id: 'charmed', name: 'Charmed', desc: 'Find a charm', icon: '🍀', check: () => inventoryManager && inventoryManager.inventory.length > 0 },
    { id: 'pet_master', name: 'Pet Master', desc: 'Max pet level', icon: '🐾', check: () => gameState.pet.stage === 'legendary' },
    { id: 'craftsman', name: 'Craftsman', desc: 'Craft an item', icon: '🔨', check: () => gameState.materials.crystals >= 1 },
    { id: 'first_prestige', name: 'Ascension Novice', desc: 'Prestige for the first time', icon: '✨', check: () => gameState.prestigeLevel >= 1 },
    { id: 'daily_dedication', name: 'Daily Dedication', desc: 'Claim 7 daily rewards in a row', icon: '📅', check: () => gameState.dailyReward.streak >= 7 },
    { id: 'milestone_master', name: 'Milestone Master', desc: 'Reach 10 milestones', icon: '🎯', check: () => gameState.milestones.completed.length >= 10 },
    { id: 'automation', name: 'Automation Expert', desc: 'Have 100+ total upgrades', icon: '🤖', check: () => getTotalUpgrades() >= 100 },
    { id: 'combo_king', name: 'Combo King', desc: 'Reach a 5x combo multiplier', icon: '🔥', check: () => gameState.combo.maxMultiplier >= 5 },
    { id: 'frenzy_master', name: 'Frenzy Master', desc: 'Activate frenzy mode 50 times', icon: '⚡', check: () => gameState.events.history.filter(e => e === 'frenzy').length >= 50 },
    { id: 'pet_lover', name: 'Pet Lover', desc: 'Feed your pet 100 times', icon: '🐾', check: () => gameState.pet.fedCount >= 100 },
    { id: 'legendary_tamer', name: 'Legendary Tamer', desc: 'Evolve pet to Legendary', icon: '🦄', check: () => gameState.pet.stage === 'legendary' },
    { id: 'charm_collector', name: 'Charm Collector', desc: 'Collect 20 different charms', icon: '💎', check: () => inventoryManager && inventoryManager.inventory.length >= 20 },
    { id: 'rare_find', name: 'Rare Find', desc: 'Find a legendary charm', icon: '🏆', check: () => inventoryManager && inventoryManager.inventory.some(c => c.rarity === 'legendary') },
    { id: 'skill_master', name: 'Skill Master', desc: 'Unlock all constellation skills', icon: '⭐', check: () => skillManager && skillManager.unlockedSkills.length >= Object.keys(skillManager.skillTree).length },
    { id: 'crafting_expert', name: 'Crafting Expert', desc: 'Craft 50 items', icon: '🔨', check: () => gameState.materials.crystals >= 50 },
    { id: 'material_hoarder', name: 'Material Hoarder', desc: 'Collect 1000 of each material', icon: '💰', check: () => gameState.materials.essence >= 1000 && gameState.materials.fragments >= 1000 && gameState.materials.crystals >= 1000 },
    { id: 'season_veteran', name: 'Season Veteran', desc: 'Play through all 4 seasons', icon: '🌍', check: () => gameState.season.history && gameState.season.history.length >= 4 },
    { id: 'event_hunter', name: 'Event Hunter', desc: 'Participate in 25 random events', icon: '📅', check: () => gameState.events.history.length >= 25 },
    { id: 'minigame_pro', name: 'Mini-Game Pro', desc: 'Complete mini-game in under 30 seconds', icon: '🎮', check: () => gameState.minigameRecord && gameState.minigameRecord <= 30 },
    { id: 'prestige_veteran', name: 'Prestige Veteran', desc: 'Prestige 10 times', icon: '⭐', check: () => gameState.prestigeLevel >= 10 },
    { id: 'stardust_rich', name: 'Stardust Rich', desc: 'Accumulate 1000 star dust', icon: '✨', check: () => gameState.starDust >= 1000 },
    { id: 'trillion_club', name: 'Trillion Club', desc: 'Earn 1 trillion total vibes', icon: '💎', check: () => gameState.totalVibes >= 1000000000000 },
    { id: 'speed_clicker', name: 'Speed Clicker', desc: 'Click 1000 times in one session', icon: '👆', check: () => gameState.clickCount >= 1000 },
    { id: 'offline_master', name: 'Offline Master', desc: 'Gain 1M vibes from offline progress', icon: '💤', check: () => gameState.offlineGains && gameState.offlineGains >= 1000000 },
    { id: 'completionist', name: 'Completionist', desc: 'Unlock all achievements', icon: '👑', check: () => gameState.achievements.length >= achievements.length - 1 }
];

// Affirmations
const affirmations = [
    "You're amazing!", "Keep shining!", "Believe in yourself!", "You've got this!",
    "Stay positive!", "You're incredible!", "Keep going!", "You rock!",
    "Stay strong!", "You're a star!", "Amazing work!", "You're wonderful!",
    "Keep it up!", "You're brilliant!", "Way to go!", "You're fantastic!",
    "Stay awesome!", "You're inspiring!", "Keep smiling!", "You're unstoppable!"
];

// Seasons Configuration
const seasons = {
    spring: { icon: "🌸", name: "Spring", bonus: { clickValue: 1.2 }, color: "#ffb4b4" },
    summer: { icon: "☀️", name: "Summer", bonus: { passiveProduction: 1.3 }, color: "#fcd34d" },
    autumn: { icon: "🍂", name: "Autumn", bonus: { critChance: 0.1 }, color: "#ff9a9e" },
    winter: { icon: "❄️", name: "Winter", bonus: { comboDecay: 0.5 }, color: "#93c5fd" }
};

// Pet Types - Multiple evolution paths!
const petTypes = {
    bird: {
        name: "Phoenix",
        stages: {
            egg: { icon: "🥚", name: "Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "🐣", name: "Chick", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🐥", name: "Sparrow", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "🦅", name: "Eagle", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "🔥", name: "Phoenix", bonus: 0.50, expNeeded: Infinity }
        }
    },
    dragon: {
        name: "Dragon",
        stages: {
            egg: { icon: "🥚", name: "Dragon Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "🦎", name: "Hatchling", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🐉", name: "Wyvern", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "�", name: "Dragon", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "🌋", name: "Ancient Dragon", bonus: 0.50, expNeeded: Infinity }
        }
    },
    unicorn: {
        name: "Unicorn",
        stages: {
            egg: { icon: "🥚", name: "Magic Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "🐴", name: "Pony", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🦄", name: "Young Unicorn", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "🦄", name: "Unicorn", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "✨", name: "Celestial Unicorn", bonus: 0.50, expNeeded: Infinity }
        }
    },
    cat: {
        name: "Mystic Cat",
        stages: {
            egg: { icon: "🥚", name: "Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "�", name: "Kitten", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🐈", name: "Cat", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "😺", name: "Mystic Cat", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "👁️", name: "Oracle Cat", bonus: 0.50, expNeeded: Infinity }
        }
    },
    wolf: {
        name: "Spirit Wolf",
        stages: {
            egg: { icon: "�", name: "Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "🐕", name: "Pup", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🐺", name: "Wolf", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "🐺", name: "Alpha Wolf", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "🌙", name: "Moon Wolf", bonus: 0.50, expNeeded: Infinity }
        }
    },
    cosmic: {
        name: "Cosmic Entity",
        stages: {
            egg: { icon: "🥚", name: "Cosmic Egg", bonus: 0, expNeeded: 100 },
            baby: { icon: "⭐", name: "Star Being", bonus: 0.05, expNeeded: 500 },
            teen: { icon: "🌟", name: "Nebula Spirit", bonus: 0.15, expNeeded: 2000 },
            adult: { icon: "🌌", name: "Galaxy Being", bonus: 0.30, expNeeded: 10000 },
            legendary: { icon: "🔮", name: "Cosmic Deity", bonus: 0.50, expNeeded: Infinity }
        }
    }
};

// For backward compatibility - default to bird
let petStages = petTypes.bird.stages;

// Crafting Recipes
const craftingRecipes = [
    { id: 'essence_boost', name: "Essence Boost", cost: { essence: 10 }, effect: () => { gameState.vibes += gameState.vibesPerSecond * 3600; showToast("🌟 +1 hour of production!"); } },
    { id: 'lucky_charm', name: "Lucky Charm", cost: { fragments: 5, essence: 20 }, effect: () => { inventoryManager.addCharm('luckyClover'); showToast("🍀 Crafted Lucky Charm!"); } },
    { id: 'stardust_gem', name: "StarDust Gem", cost: { crystals: 1, fragments: 10 }, effect: () => { gameState.starDust += 5; showToast("✨ +5 Star Dust!"); } }
];

// DOM Elements
const els = {
    vibes: document.getElementById('vibes-count'),
    vps: document.getElementById('vibes-per-second'),
    starDust: document.getElementById('star-dust'),
    heart: document.getElementById('heart-btn'),
    floatingContainer: document.getElementById('floating-container'),
    comboValue: document.getElementById('combo-value'),
    comboBar: document.getElementById('combo-bar'),
    upgradesList: document.getElementById('upgrades-list'),
    achievementsList: document.getElementById('achievements-list'),
    achievementCount: document.getElementById('achievement-count'),
    skillsTree: document.getElementById('skills-tree'),
    petAvatar: document.getElementById('pet-avatar'),
    petName: document.getElementById('pet-name'),
    petLevel: document.getElementById('pet-level'),
    petExpFill: document.getElementById('pet-exp-fill'),
    petFeedBtn: document.getElementById('pet-feed-btn'),
    seasonIndicator: document.getElementById('season-indicator'),
    currentEvent: document.getElementById('current-event'),
    prestigeLevel: document.getElementById('prestige-level'),
    petBonus: document.getElementById('pet-bonus'),
    frenzyIndicator: document.getElementById('frenzy-indicator'),
    frenzyTimer: document.getElementById('frenzy-timer'),
    craftingList: document.getElementById('crafting-list')
};

// Initialize
function init() {
    loadGame();
    setupEventListeners();
    calculateVPS();
    updateModifiers();
    renderAll();
    renderPet(); // Ensure pet is rendered on init
    calculateOfflineProgress(); // v2.0
    checkDailyReward(); // v2.0
    startGameLoop();
    syncRealTimeSeason();
    checkForRandomEvents();
}

// Event Listeners
function setupEventListeners() {
    els.heart.addEventListener('click', handleHeartClick);

    // Pet buttons - check if they exist
    if (els.petFeedBtn) {
        els.petFeedBtn.addEventListener('click', feedPet);
    } else {
        const petFeedBtn = document.getElementById('pet-feed-btn');
        if (petFeedBtn) {
            petFeedBtn.addEventListener('click', feedPet);
            els.petFeedBtn = petFeedBtn;
        }
    }

    const petPlayBtn = document.getElementById('pet-play-btn');
    if (petPlayBtn) {
        petPlayBtn.addEventListener('click', playWithPet);
    }

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sidebar = btn.closest('.sidebar');
            const tabName = btn.dataset.tab;

            sidebar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            sidebar.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

            btn.classList.add('active');
            const tabContent = sidebar.querySelector(`#${tabName}-tab`);
            if (tabContent) {
                tabContent.classList.remove('hidden');

                // If pet tab is opened, ensure buttons are set up
                if (tabName === 'pet') {
                    const feedBtn = document.getElementById('pet-feed-btn');
                    const playBtn = document.getElementById('pet-play-btn');

                    if (feedBtn && !feedBtn.hasAttribute('data-listener-attached')) {
                        feedBtn.addEventListener('click', feedPet);
                        feedBtn.setAttribute('data-listener-attached', 'true');
                        els.petFeedBtn = feedBtn;
                    }

                    if (playBtn && !playBtn.hasAttribute('data-listener-attached')) {
                        playBtn.addEventListener('click', playWithPet);
                        playBtn.setAttribute('data-listener-attached', 'true');
                    }

                    renderPet(); // Update pet display when tab is opened
                }
            }
        });
    });

    // Modals
    setupModal('stats-btn', 'stats-modal', renderStats);
    setupModal('settings-btn', 'settings-modal');
    setupModal('events-btn', 'events-modal', renderEventCalendar);
    setupModal('minigame-btn', 'minigame-modal', startMiniGame);
    setupModal('prestige-btn', 'prestige-modal', updatePrestigePreview);

    document.getElementById('confirm-prestige-btn').addEventListener('click', doPrestige);
    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        gameState.settings.sound = e.target.checked;
        soundSystem.toggle(e.target.checked);
    });
}

function setupModal(btnId, modalId, onOpen) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const close = modal.querySelector('.modal-close');

    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        if (onOpen) onOpen();
    });

    close.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

// Heart Click Handler
function handleHeartClick(e) {
    const now = Date.now();

    // Update combo
    if (now - gameState.combo.lastClickTime < 1000 * gameState.modifiers.comboDecay) {
        gameState.combo.multiplier = Math.min(gameState.combo.multiplier + 0.1, 10);
    } else {
        gameState.combo.multiplier = 1.0;
    }
    gameState.combo.lastClickTime = now;

    // Check for crit
    const isCrit = Math.random() < gameState.modifiers.critChance;
    const critMult = isCrit ? (gameState.modifiers.critDamage || 2) : 1;

    // Calculate total value
    const baseValue = 1;
    const totalValue = baseValue *
        gameState.modifiers.clickValue *
        gameState.combo.multiplier *
        critMult *
        (gameState.frenzy.active ? 10 : 1) *
        gameState.modifiers.seasonBonus *
        (1 + gameState.modifiers.petBonus);

    gameState.vibes += totalValue;
    gameState.totalVibes += totalValue;
    if (!e.isAuto) gameState.clickCount++;

    // Visual & Audio
    if (!e.isAuto) {
        els.heart.classList.add('clicked');
        setTimeout(() => els.heart.classList.remove('clicked'), 100);

        if (gameState.settings.sound) {
            soundSystem.playClick();
            if (gameState.combo.multiplier > 1) soundSystem.playCombo(gameState.combo.multiplier);
        }

        showFloatingText(e, totalValue, isCrit);
    } else {
        // Reduced visual for auto-clicks to avoid clutter
        if (Math.random() < 0.1) showFloatingText(e, totalValue, isCrit);
    }

    // Drop materials chance
    if (Math.random() < 0.01) {
        gameState.materials.essence++;
        showToast("✨ +1 Essence");
    }

    // Frenzy spawn chance
    if (!gameState.frenzy.active && Math.random() < 0.005) {
        activateFrenzy();
    }

    // Pet exp (only from manual clicks, not auto-clicks)
    if (!e.isAuto) {
        const expGain = Math.floor(totalValue / 10) * (gameState.events.active === 'exp_boost' ? 2 : 1);
        gameState.pet.exp += expGain;
        checkPetLevelUp();
    }

    updateDisplay();
    checkAchievements();

    // Inventory charm drop
    if (inventoryManager && Math.random() < 0.01) {
        inventoryManager.tryDropCharm();
    }
}

// Floating Text
function showFloatingText(e, value, isCrit) {
    const text = affirmations[Math.floor(Math.random() * affirmations.length)];
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = `${text} +${formatNumber(value)}${isCrit ? '!' : ''}`;
    const colors = ['#ffb4b4', '#c4b5fd', '#93c5fd', '#a7f3d0'];
    el.style.color = isCrit ? '#fcd34d' : colors[Math.floor(Math.random() * colors.length)];

    const rect = els.heart.getBoundingClientRect();
    const containerRect = els.floatingContainer.getBoundingClientRect();

    // Calculate center of heart button  
    const centerX = rect.left + rect.width / 2 - containerRect.left;
    const centerY = rect.top + rect.height / 2 - containerRect.top;

    // Random angle in circle (0 to 360 degrees)
    const angle = Math.random() * Math.PI * 2;

    // Start radius (close to heart)
    const startRadius = 60;

    // Position at angle around circle
    const startX = centerX + Math.cos(angle) * startRadius;
    const startY = centerY + Math.sin(angle) * startRadius;

    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;

    // Store the angle for the animation
    el.style.setProperty('--angle', `${angle}rad`);

    els.floatingContainer.appendChild(el);
    setTimeout(() => el.remove(), 2000);
}

// Frenzy Mode
function activateFrenzy() {
    gameState.frenzy.active = true;
    gameState.frenzy.endTime = Date.now() + 10000;
    els.frenzyIndicator.classList.remove('hidden');
    els.heart.style.filter = 'hue-rotate(45deg) brightness(1.2)';
    showToast("⚡ FRENZY MODE ACTIVATED!");

    if (!gameState.events.history.includes('frenzy')) {
        gameState.events.history.push('frenzy');
    }

    const interval = setInterval(() => {
        if (Date.now() >= gameState.frenzy.endTime) {
            gameState.frenzy.active = false;
            els.frenzyIndicator.classList.add('hidden');
            els.heart.style.filter = '';
            clearInterval(interval);
        } else {
            const remaining = Math.ceil((gameState.frenzy.endTime - Date.now()) / 1000);
            els.frenzyTimer.textContent = `${remaining}s`;
        }
    }, 100);
}

// Pet System
function feedPet() {
    const feedCost = 100 + (gameState.pet.level * 10);
    if (gameState.vibes >= feedCost) {
        gameState.vibes -= feedCost;
        const expGain = 50 * (gameState.events.active === 'exp_boost' ? 2 : 1);
        gameState.pet.exp += expGain;
        gameState.pet.fedCount++;
        checkPetLevelUp();
        updateDisplay();
        renderPet(); // Update pet display after feeding
        saveGame();
        showToast(`🐾 Pet fed! +${expGain} EXP`);
    } else {
        showToast(`❌ Not enough vibes! Need ${feedCost}`);
    }
}

function checkPetLevelUp() {
    let currentStage = petStages[gameState.pet.stage];
    let leveledUp = false;

    // Check if we have enough exp to level up within current stage
    while (gameState.pet.exp >= currentStage.expNeeded && currentStage.expNeeded !== Infinity) {
        gameState.pet.exp -= currentStage.expNeeded;
        gameState.pet.level++;
        leveledUp = true;

        // Check if we should evolve to next stage
        const stages = Object.keys(petStages);
        const currentIndex = stages.indexOf(gameState.pet.stage);

        // Evolution happens at specific level thresholds
        if (currentIndex < stages.length - 1) {
            const nextStage = petStages[stages[currentIndex + 1]];
            // Evolve when reaching the exp requirement for next stage
            if (gameState.pet.level >= getLevelForStage(stages[currentIndex + 1])) {
                evolvePet();
                currentStage = petStages[gameState.pet.stage];
            }
        }
    }

    if (leveledUp) {
        showToast(`🎉 Pet leveled up to ${gameState.pet.level}!`);
        updateModifiers();
    }

    // Update exp bar visual
    const expNeeded = currentStage.expNeeded === Infinity ? 10000 : currentStage.expNeeded;
    const pct = Math.min((gameState.pet.exp / expNeeded) * 100, 100);
    els.petExpFill.style.width = `${pct}%`;
    renderPet();
}

function getLevelForStage(stage) {
    const stageLevels = {
        'egg': 1,
        'baby': 5,
        'teen': 15,
        'adult': 30,
        'legendary': 50
    };
    return stageLevels[stage] || 1;
}

function evolvePet() {
    const stages = Object.keys(petStages);
    const currentIndex = stages.indexOf(gameState.pet.stage);
    if (currentIndex < stages.length - 1) {
        gameState.pet.stage = stages[currentIndex + 1];
        const newStage = petStages[gameState.pet.stage];
        showToast(`🌟 Pet evolved to ${newStage.name}!`);
        updateModifiers();
        saveGame();
    }
}

function renderPet() {
    const stage = petStages[gameState.pet.stage];
    if (els.petAvatar) els.petAvatar.textContent = stage.icon;
    if (els.petName) els.petName.textContent = stage.name;
    if (els.petLevel) els.petLevel.textContent = gameState.pet.level;
    if (els.petBonus) els.petBonus.textContent = `+${Math.round(gameState.modifiers.petBonus * 100)}%`;

    // Update exp bar visual
    const expNeeded = stage.expNeeded === Infinity ? 10000 : stage.expNeeded;
    const pct = Math.min((gameState.pet.exp / expNeeded) * 100, 100);
    if (els.petExpFill) {
        els.petExpFill.style.width = `${pct}%`;
    }

    // Update EXP text display
    const expText = document.getElementById('pet-exp-text');
    if (expText) {
        expText.textContent = `EXP: ${Math.floor(gameState.pet.exp)} / ${expNeeded}`;
    }

    // Update feed button cost based on pet level - try multiple ways to find the button
    const feedCost = 100 + (gameState.pet.level * 10);
    const feedBtn = els.petFeedBtn || document.getElementById('pet-feed-btn');
    if (feedBtn) {
        feedBtn.textContent = `Feed (${feedCost} 💖)`;
        // Ensure event listener is attached
        if (!feedBtn.hasAttribute('data-listener-attached')) {
            feedBtn.addEventListener('click', feedPet);
            feedBtn.setAttribute('data-listener-attached', 'true');
        }
    }
}

// Season System
function syncRealTimeSeason() {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    let newSeason = 'spring';

    // Northern Hemisphere Seasons
    if (month >= 2 && month <= 4) newSeason = 'spring';      // Mar, Apr, May
    else if (month >= 5 && month <= 7) newSeason = 'summer'; // Jun, Jul, Aug
    else if (month >= 8 && month <= 10) newSeason = 'autumn';// Sep, Oct, Nov
    else newSeason = 'winter';                               // Dec, Jan, Feb

    if (gameState.season.current !== newSeason) {
        gameState.season.current = newSeason;
        gameState.season.daysSince = 0;
        showToast(`🌍 Season changed to ${seasons[newSeason].name}!`);
    }

    const season = seasons[gameState.season.current];
    els.seasonIndicator.textContent = `${season.icon} ${season.name}`;

    // Update Calendar Display
    const calendarEl = document.getElementById('calendar-display');
    if (calendarEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        calendarEl.textContent = `${now.toLocaleDateString(undefined, options)} - ${season.icon} ${season.name}`;
    }

    // Check daily for season change
    setTimeout(syncRealTimeSeason, 60000 * 60); // Check every hour
    updateModifiers();
}

// Random Events
function checkForRandomEvents() {
    if (Math.random() < 0.1) {
        const events = ['double_drops', 'exp_boost', 'discount'];
        const event = events[Math.floor(Math.random() * events.length)];
        activateEvent(event);
    }

    setTimeout(checkForRandomEvents, 120000); // Check every 2 minutes
}

function activateEvent(eventName) {
    gameState.events.active = eventName;
    const eventNames = {
        double_drops: "Double Materials",
        exp_boost: "2x Pet EXP",
        discount: "25% Upgrade Discount"
    };

    els.currentEvent.textContent = eventNames[eventName];
    showToast(`📅 Event: ${eventNames[eventName]}!`);

    setTimeout(() => {
        gameState.events.active = null;
        els.currentEvent.textContent = "None Active";
    }, 60000); // 1 minute
}

// Modifiers
function updateModifiers() {
    // Reset to base
    gameState.modifiers = {
        clickValue: 1.0,
        passiveProduction: 1.0,
        critChance: 0,
        comboDecay: 1.0,
        petBonus: 0,
        seasonBonus: 1.0,
        eventBonus: 1.0
    };

    // Apply pet bonus
    const petStage = petStages[gameState.pet.stage];
    gameState.modifiers.petBonus = petStage.bonus;

    // Apply season bonus
    const season = seasons[gameState.season.current];
    if (season.bonus.clickValue) gameState.modifiers.clickValue *= season.bonus.clickValue;
    if (season.bonus.passiveProduction) gameState.modifiers.passiveProduction *= season.bonus.passiveProduction;
    if (season.bonus.critChance) gameState.modifiers.critChance += season.bonus.critChance;
    if (season.bonus.comboDecay) gameState.modifiers.comboDecay *= season.bonus.comboDecay;

    // v2.0: Initialize new modifiers
    gameState.modifiers.critDamage = 2;
    gameState.modifiers.upgradeCost = 1;
    gameState.modifiers.offlineGains = 1;

    // Apply skills
    if (skillManager) skillManager.applyModifiers(gameState.modifiers);

    // Apply inventory
    if (inventoryManager) inventoryManager.applyModifiers(gameState.modifiers);

    // Apply boosts
    gameState.boosts.forEach(boost => {
        if (Date.now() < boost.endTime) {
            if (boost.type === 'click') gameState.modifiers.clickValue *= boost.value;
            if (boost.type === 'passive') gameState.modifiers.passiveProduction *= boost.value;
            if (boost.type === 'all') {
                gameState.modifiers.clickValue *= boost.value;
                gameState.modifiers.passiveProduction *= boost.value;
            }
        }
    });

    // Apply Daily Buff
    if (gameState.dailyBuff && gameState.dailyBuff.active && Date.now() < gameState.dailyBuff.endTime) {
        if (gameState.dailyBuff.type === 'production') gameState.modifiers.passiveProduction *= gameState.dailyBuff.value;
        if (gameState.dailyBuff.type === 'click') gameState.modifiers.clickValue *= gameState.dailyBuff.value;
        if (gameState.dailyBuff.type === 'crit') gameState.modifiers.critChance += gameState.dailyBuff.value;
    } else if (gameState.dailyBuff && gameState.dailyBuff.active) {
        gameState.dailyBuff.active = false; // Expired
    }
}

// v2.0: Daily Rewards System
function checkDailyReward() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastClaim = gameState.dailyReward.lastClaim ? new Date(gameState.dailyReward.lastClaim) : null;
    const lastClaimDate = lastClaim ? new Date(lastClaim.getFullYear(), lastClaim.getMonth(), lastClaim.getDate()) : null;

    const oneDay = 24 * 60 * 60 * 1000;
    const dayKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    // Check if already claimed today
    if (gameState.dailyReward.claimedDays && gameState.dailyReward.claimedDays.includes(dayKey)) {
        return; // Already claimed today
    }

    // Check if it's a new day
    if (!lastClaimDate || today.getTime() > lastClaimDate.getTime()) {
        // Reset streak if missed more than 1 day
        if (lastClaimDate && (today.getTime() - lastClaimDate.getTime()) > oneDay * 1.5) {
            gameState.dailyReward.streak = 0;
        }

        // Show modal if not claimed today
        renderDailyRewards();
        document.getElementById('daily-reward-modal').classList.remove('hidden');
    }
}

function renderDailyRewards() {
    const container = document.querySelector('.daily-grid');
    container.innerHTML = '';

    const rewards = [
        { type: 'vibes', value: 1000, icon: '✨', buff: { type: 'production', value: 1.1, desc: '+10% Production (4h)' } },
        { type: 'essence', value: 50, icon: '💧', buff: { type: 'click', value: 1.05, desc: '+5% Click Value (4h)' } },
        { type: 'charm', rarity: 'common', icon: '🍀', buff: { type: 'crit', value: 0.05, desc: '+5% Crit Chance (4h)' } },
        { type: 'vibes', value: 5000, icon: '✨', buff: { type: 'production', value: 1.2, desc: '+20% Production (4h)' } },
        { type: 'fragments', value: 100, icon: '💎', buff: { type: 'click', value: 1.1, desc: '+10% Click Value (4h)' } },
        { type: 'charm', rarity: 'rare', icon: '🧿', buff: { type: 'crit', value: 0.1, desc: '+10% Crit Chance (4h)' } },
        { type: 'stardust', value: 10, icon: '⭐', buff: { type: 'production', value: 1.5, desc: '+50% Production (4h)' } }
    ];

    rewards.forEach((reward, index) => {
        const day = index + 1;
        const isCurrent = day === gameState.dailyReward.day;
        const isClaimed = day < gameState.dailyReward.day;

        const div = document.createElement('div');
        div.className = `daily-item ${isCurrent ? 'active' : ''} ${isClaimed ? 'claimed' : ''}`;
        div.innerHTML = `
            <div class="daily-day">Day ${day}</div>
            <div class="daily-icon">${reward.icon}</div>
            <div class="daily-value">${reward.value || reward.rarity}</div>
            <div style="font-size: 0.7rem; color: var(--accent-gold); margin-top: 5px;">${reward.buff.desc}</div>
        `;

        if (isCurrent) {
            div.style.cursor = 'pointer';
            div.addEventListener('click', () => claimDailyReward(reward));
        }

        container.appendChild(div);
    });
}

function claimDailyReward(reward) {
    // Grant reward
    if (reward.type === 'vibes') gameState.vibes += reward.value;
    if (reward.type === 'essence') gameState.materials.essence += reward.value;
    if (reward.type === 'fragments') gameState.materials.fragments += reward.value;
    if (reward.type === 'stardust') gameState.starDust += reward.value;
    if (reward.type === 'charm') {
        const charm = Object.keys(inventoryManager.charmTypes).find(k => inventoryManager.charmTypes[k].rarity === reward.rarity);
        if (charm) inventoryManager.addCharm(charm);
    }

    // Apply Buff
    if (reward.buff) {
        gameState.dailyBuff = {
            active: true,
            type: reward.buff.type,
            value: reward.buff.value,
            endTime: Date.now() + (4 * 60 * 60 * 1000) // 4 hours
        };
        updateModifiers();
    }

    gameState.dailyReward.lastClaim = Date.now();
    gameState.dailyReward.streak++;
    gameState.dailyReward.day++;
    if (gameState.dailyReward.day > 7) gameState.dailyReward.day = 1; // Loop week

    showToast(`🎁 Daily Reward Claimed!`);
    document.getElementById('daily-reward-modal').classList.add('hidden');
    saveGame();
    updateDisplay();
}

// v2.0: Milestone System
const milestoneDefinitions = [
    { type: 'vibes', value: 100000, reward: { type: 'stardust', amount: 5 } },
    { type: 'vibes', value: 1000000, reward: { type: 'stardust', amount: 10 } },
    { type: 'clicks', value: 1000, reward: { type: 'essence', amount: 50 } },
    { type: 'clicks', value: 10000, reward: { type: 'stardust', amount: 5 } }
];

function checkMilestones() {
    milestoneDefinitions.forEach((ms, index) => {
        if (gameState.milestones.completed.includes(index)) return;

        let reached = false;
        if (ms.type === 'vibes' && gameState.totalVibes >= ms.value) reached = true;
        if (ms.type === 'clicks' && gameState.clickCount >= ms.value) reached = true;

        if (reached) {
            gameState.milestones.completed.push(index);
            if (ms.reward.type === 'stardust') gameState.starDust += ms.reward.amount;
            if (ms.reward.type === 'essence') gameState.materials.essence += ms.reward.amount;

            showToast(`🏆 Milestone Reached! +${ms.reward.amount} ${ms.reward.type}`);
        }
    });
}

// v2.0: Auto-Clicker Logic
function autoClickerLogic() {
    if (gameState.autoClicker.level === 0) return;

    const now = Date.now();
    const delays = [0, 10000, 5000, 2000, 1000]; // Level 0-4 delays in ms
    const delay = delays[gameState.autoClicker.level];

    if (now - gameState.autoClicker.lastClick >= delay) {
        handleHeartClick({ isAuto: true }); // Pass flag to avoid combo/crit if desired
        gameState.autoClicker.lastClick = now;
    }
}

// v2.0: Offline Progress
function calculateOfflineProgress() {
    const now = Date.now();
    if (gameState.offlineTime) {
        const diff = now - gameState.offlineTime;
        if (diff > 60000) { // More than 1 minute
            const seconds = diff / 1000;
            // Cap at 24 hours
            const effectiveSeconds = Math.min(seconds, 86400);

            const earned = gameState.vibesPerSecond * effectiveSeconds * gameState.modifiers.offlineGains;
            if (earned > 0) {
                gameState.vibes += earned;
                gameState.totalVibes += earned;
                showToast(`💤 You were gone for ${formatTime(effectiveSeconds)}. Earned ${formatNumber(earned)} vibes!`);
            }
        }
    }
    gameState.offlineTime = now;
}

function formatTime(seconds) {
    if (seconds < 60) return `${Math.floor(seconds)}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    return `${Math.floor(seconds / 3600)}h`;
}

// Upgrades
function renderUpgrades() {
    els.upgradesList.innerHTML = '';
    Object.entries(gameState.upgrades).forEach(([key, upg]) => {
        const def = upgradeTypes[key];
        const card = document.createElement('div');
        card.className = `upgrade-card ${gameState.vibes < upg.cost ? 'disabled' : ''}`;
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <strong>${def.icon} ${def.name}</strong>
                <span style="color: var(--accent-purple);">${formatNumber(upg.cost)}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">
                ${def.desc} • Owned: ${upg.count}
            </div>
        `;
        card.addEventListener('click', () => buyUpgrade(key));
        els.upgradesList.appendChild(card);
    });
}

function buyUpgrade(key) {
    const upg = gameState.upgrades[key];
    const discount = gameState.events.active === 'discount' ? 0.75 : 1.0;
    const cost = Math.floor(upg.cost * discount);

    if (gameState.vibes >= cost) {
        gameState.vibes -= cost;
        upg.count++;
        upg.cost = Math.floor(upg.cost * 1.15);

        calculateVPS();
        renderUpgrades();
        updateDisplay();
        checkAchievements();

        if (gameState.settings.sound) soundSystem.playPurchase();

        // Drop fragment chance
        if (Math.random() < 0.1) {
            gameState.materials.fragments++;
            showToast("💎 +1 Fragment");
        }
    }
}

function calculateVPS() {
    let vps = 0;
    Object.values(gameState.upgrades).forEach(u => {
        vps += u.count * u.production;
    });
    gameState.vibesPerSecond = vps * gameState.modifiers.passiveProduction * (1 + gameState.modifiers.petBonus);
}

// Achievements
function renderAchievements() {
    els.achievementsList.innerHTML = '';
    achievements.forEach(ach => {
        const unlocked = gameState.achievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${unlocked ? '' : 'disabled'}`;
        card.innerHTML = `
            <div style="font-size: 1.5rem;">${unlocked ? ach.icon : '🔒'}</div>
            <div>
                <strong>${ach.name}</strong>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">${ach.desc}</div>
            </div>
        `;
        els.achievementsList.appendChild(card);
    });

    const count = gameState.achievements.length;
    els.achievementCount.textContent = `${count}/${achievements.length}`;
}

function checkAchievements() {
    achievements.forEach(ach => {
        if (!gameState.achievements.includes(ach.id) && ach.check()) {
            unlockAchievement(ach);
        }
    });
}

function unlockAchievement(ach) {
    gameState.achievements.push(ach.id);
    showToast(`🏆 ${ach.name} unlocked!`);
    if (gameState.settings.sound) soundSystem.playAchievement();
    renderAchievements();

    // Reward
    gameState.vibes += 100;
    gameState.materials.essence += 5;
}

// Crafting
function renderCrafting() {
    els.craftingList.innerHTML = '';
    craftingRecipes.forEach(recipe => {
        const canCraft = Object.entries(recipe.cost).every(([mat, amt]) => gameState.materials[mat] >= amt);
        const card = document.createElement('div');
        card.className = `charm-card ${canCraft ? '' : 'disabled'}`;
        const costText = Object.entries(recipe.cost).map(([mat, amt]) => `${amt} ${mat}`).join(', ');
        card.innerHTML = `
            <strong>${recipe.name}</strong>
            <div style="font-size: 0.8rem;">Cost: ${costText}</div>
        `;
        card.addEventListener('click', () => {
            if (canCraft) {
                Object.entries(recipe.cost).forEach(([mat, amt]) => gameState.materials[mat] -= amt);
                recipe.effect();
                renderCrafting();
                updateDisplay();
            }
        });
        els.craftingList.appendChild(card);
    });
}

// Prestige
function updatePrestigePreview() {
    const reward = Math.floor(Math.sqrt(gameState.totalVibes / 1000000));
    document.getElementById('prestige-reward').textContent = reward;
    document.getElementById('current-multiplier').textContent = `${(1 + gameState.prestigeLevel * 0.1).toFixed(1)}x`;
}

function doPrestige() {
    if (gameState.totalVibes < 1000000) {
        showToast("❌ Need 1M total vibes!");
        return;
    }

    const reward = Math.floor(Math.sqrt(gameState.totalVibes / 1000000));
    gameState.starDust += reward;
    gameState.prestigeLevel++;

    // Reset
    gameState.vibes = 0;
    gameState.vibesPerSecond = 0;
    gameState.totalVibes = 0;
    Object.keys(gameState.upgrades).forEach(key => {
        gameState.upgrades[key].count = 0;
        gameState.upgrades[key].cost = upgradeTypes[key].baseCost || [10, 100, 1000, 5000, 20000, 100000, 1000000, 50000000][Object.keys(gameState.upgrades).indexOf(key)];
    });

    document.getElementById('prestige-modal').classList.add('hidden');
    showToast(`✨ Ascended! +${reward} Star Dust`);

    renderAll();
}

// Mini-Game (Memory Match)
let miniGame = { cards: [], flipped: [], matches: 0, timer: 60 };

function startMiniGame() {
    miniGame = { cards: [], flipped: [], matches: 0, timer: 60 };
    const board = document.getElementById('minigame-board');
    board.innerHTML = '';

    const icons = ['🌸', '⭐', '💖', '🌈', '✨', '🦋', '🌺', '🎨'];
    const deck = [...icons, ...icons].sort(() => Math.random() - 0.5);

    deck.forEach((icon, i) => {
        const card = document.createElement('div');
        card.className = 'minigame-card';
        card.dataset.icon = icon;
        card.dataset.index = i;
        card.textContent = '?';
        card.addEventListener('click', () => flipCard(card));
        board.appendChild(card);
        miniGame.cards.push(card);
    });

    const interval = setInterval(() => {
        miniGame.timer--;
        document.getElementById('minigame-timer').textContent = miniGame.timer;
        if (miniGame.timer <= 0) {
            clearInterval(interval);
            showToast(`⏰ Time's up! Matches: ${miniGame.matches}`);
            setTimeout(() => document.getElementById('minigame-modal').classList.add('hidden'), 2000);
        }
        if (miniGame.matches === 8) {
            clearInterval(interval);
            showToast("🎉 All matched! +5000 Vibes");
            gameState.vibes += 5000;
            setTimeout(() => document.getElementById('minigame-modal').classList.add('hidden'), 2000);
        }
    }, 1000);
}

function flipCard(card) {
    if (miniGame.flipped.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.icon;
        miniGame.flipped.push(card);

        if (miniGame.flipped.length === 2) {
            const [c1, c2] = miniGame.flipped;
            if (c1.dataset.icon === c2.dataset.icon) {
                c1.classList.add('matched');
                c2.classList.add('matched');
                miniGame.matches++;
                document.getElementById('minigame-score').textContent = miniGame.matches;
                miniGame.flipped = [];
            } else {
                setTimeout(() => {
                    c1.classList.remove('flipped');
                    c2.classList.remove('flipped');
                    c1.textContent = '?';
                    c2.textContent = '?';
                    miniGame.flipped = [];
                }, 1000);
            }
        }
    }
}

// v2.0: Event Calendar Render with Daily Login Rewards
function renderEventCalendar() {
    const container = document.getElementById('events-list');
    container.innerHTML = '';

    // Current Date Info
    const now = new Date();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Calendar Header
    const header = document.createElement('div');
    header.style.cssText = 'margin-bottom: 20px; text-align: center;';
    header.innerHTML = `
        <h3 style="margin-bottom: 10px;">${now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; margin-bottom: 10px; font-weight: bold; font-size: 0.9rem;">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>
    `;
    container.appendChild(header);

    // Calendar Grid
    const calendarGrid = document.createElement('div');
    calendarGrid.style.cssText = 'display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;';

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.style.cssText = 'aspect-ratio: 1; background: rgba(255,255,255,0.1); border-radius: 8px;';
        calendarGrid.appendChild(emptyCell);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.style.cssText = 'aspect-ratio: 1; background: rgba(255,255,255,0.15); border-radius: 8px; padding: 5px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;';

        const isToday = day === currentDate;
        const isPast = day < currentDate;
        const isFuture = day > currentDate;

        if (isToday) {
            dayCell.style.background = 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))';
            dayCell.style.transform = 'scale(1.1)';
            dayCell.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        } else if (isPast) {
            dayCell.style.opacity = '0.6';
        } else if (isFuture) {
            dayCell.style.opacity = '0.4';
        }

        // Check if reward was claimed
        const dayKey = `${currentYear}-${currentMonth}-${day}`;
        const wasClaimed = gameState.dailyReward.claimedDays && gameState.dailyReward.claimedDays.includes(dayKey);

        dayCell.innerHTML = `
            <div style="font-weight: bold; font-size: 0.9rem;">${day}</div>
            ${isToday ? '<div style="font-size: 0.7rem; margin-top: 2px;">⭐</div>' : ''}
            ${wasClaimed ? '<div style="font-size: 0.6rem; margin-top: 2px;">✓</div>' : ''}
        `;

        if (isToday && !wasClaimed) {
            dayCell.addEventListener('click', () => claimDailyRewardForDay(day));
            dayCell.style.cursor = 'pointer';
        }

        calendarGrid.appendChild(dayCell);
    }

    container.appendChild(calendarGrid);

    // Daily Rewards Info
    const rewardsInfo = document.createElement('div');
    rewardsInfo.style.cssText = 'margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 12px;';

    // Check if today's reward was claimed
    const todayKey = `${currentYear}-${currentMonth}-${currentDate}`;
    const todayClaimed = gameState.dailyReward.claimedDays && gameState.dailyReward.claimedDays.includes(todayKey);

    rewardsInfo.innerHTML = `
        <h4 style="margin-bottom: 10px;">Daily Login Rewards</h4>
        <div style="font-size: 0.9rem; margin-bottom: 10px;">
            <strong>Current Streak:</strong> ${gameState.dailyReward.streak || 0} days
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">
            ${!todayClaimed ?
            '<div style="color: var(--accent-gold); font-weight: bold;">Click today\'s date to claim your reward!</div>' :
            'Log in daily to build your streak and earn better rewards!'
        }
        </div>
    `;
    container.appendChild(rewardsInfo);

    // Active Events Section
    const eventsHeader = document.createElement('h3');
    eventsHeader.textContent = "Random Events";
    eventsHeader.style.marginTop = "20px";
    container.appendChild(eventsHeader);

    const events = [
        { name: "Double Materials", desc: "2x drop rate for crafting materials", chance: "10%", duration: "1m" },
        { name: "2x Pet EXP", desc: "Pets level up twice as fast", chance: "10%", duration: "1m" },
        { name: "Upgrade Discount", desc: "25% off all upgrades", chance: "10%", duration: "1m" }
    ];

    events.forEach(evt => {
        const div = document.createElement('div');
        div.className = 'event-card';
        div.style.cssText = 'padding: 10px; margin: 5px 0; background: rgba(255,255,255,0.1); border-radius: 8px;';
        div.innerHTML = `
            <div style="font-weight: bold; color: var(--accent-gold);">${evt.name}</div>
            <div style="font-size: 0.9rem; margin: 5px 0;">${evt.desc}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
                Chance: ${evt.chance} • Duration: ${evt.duration}
            </div>
        `;
        container.appendChild(div);
    });

    // Add history
    if (gameState.events.history && gameState.events.history.length > 0) {
        const historyHeader = document.createElement('h3');
        historyHeader.textContent = "Recent Events";
        historyHeader.style.marginTop = "20px";
        container.appendChild(historyHeader);

        gameState.events.history.slice(-5).reverse().forEach(evtName => {
            const div = document.createElement('div');
            div.className = 'event-card history';
            div.style.cssText = 'padding: 10px; margin: 5px 0; background: rgba(255,255,255,0.05); border-radius: 8px; opacity: 0.7;';
            div.textContent = `Previously Active: ${evtName}`;
            container.appendChild(div);
        });
    }
}

function claimDailyRewardForDay(day) {
    const now = new Date();
    const dayKey = `${now.getFullYear()}-${now.getMonth()}-${day}`;

    if (!gameState.dailyReward.claimedDays) {
        gameState.dailyReward.claimedDays = [];
    }

    if (gameState.dailyReward.claimedDays.includes(dayKey)) {
        showToast("Already claimed today's reward!");
        return;
    }

    // Calculate reward based on streak
    const streak = gameState.dailyReward.streak || 0;
    const baseReward = 1000;
    const reward = baseReward * (1 + streak * 0.1);

    gameState.vibes += Math.floor(reward);
    gameState.dailyReward.claimedDays.push(dayKey);
    gameState.dailyReward.streak = streak + 1;
    gameState.dailyReward.lastClaim = Date.now();

    // Apply daily buff
    const buffTypes = ['production', 'click', 'crit'];
    const buffType = buffTypes[Math.floor(Math.random() * buffTypes.length)];
    const buffValue = 1.1 + (streak * 0.05);

    gameState.dailyBuff = {
        active: true,
        type: buffType,
        value: buffValue,
        endTime: Date.now() + (4 * 60 * 60 * 1000) // 4 hours
    };

    updateModifiers();
    updateDisplay();
    saveGame();

    showToast(`🎁 Daily Reward Claimed! +${Math.floor(reward)} Vibes & ${buffType} buff!`);
    renderEventCalendar(); // Refresh calendar
}

// v2.0: Stats Render - Comprehensive Statistics
function renderStats() {
    const container = document.getElementById('stats-grid');
    container.innerHTML = '';
    container.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;';

    // Calculate playtime
    const playtimeMs = Date.now() - gameState.startTime;
    const playtimeHours = Math.floor(playtimeMs / (1000 * 60 * 60));
    const playtimeMinutes = Math.floor((playtimeMs % (1000 * 60 * 60)) / (1000 * 60));
    const playtime = `${playtimeHours}h ${playtimeMinutes}m`;

    // Calculate clicks per second
    const clicksPerSecond = gameState.clickCount > 0 && playtimeMs > 0
        ? (gameState.clickCount / (playtimeMs / 1000)).toFixed(2)
        : '0.00';

    // Calculate vibes per click average
    const avgVibesPerClick = gameState.clickCount > 0
        ? formatNumber(gameState.totalVibes / gameState.clickCount)
        : '0';

    // Calculate total upgrades owned
    const totalUpgrades = Object.values(gameState.upgrades).reduce((sum, u) => sum + u.count, 0);

    // Calculate materials collected
    const totalMaterials = gameState.materials.essence + gameState.materials.fragments + gameState.materials.crystals;

    // Current season info
    const season = seasons[gameState.season.current];

    const stats = [
        { label: "Total Vibes Earned", value: formatNumber(gameState.totalVibes), icon: "✨" },
        { label: "Current Vibes", value: formatNumber(gameState.vibes), icon: "💖" },
        { label: "Vibes Per Second", value: formatNumber(gameState.vibesPerSecond), icon: "⚡" },
        { label: "Total Clicks", value: formatNumber(gameState.clickCount), icon: "👆" },
        { label: "Clicks Per Second", value: clicksPerSecond, icon: "🔥" },
        { label: "Avg Vibes Per Click", value: avgVibesPerClick, icon: "📊" },
        { label: "Prestige Level", value: gameState.prestigeLevel, icon: "⭐" },
        { label: "Star Dust", value: formatNumber(gameState.starDust), icon: "✨" },
        { label: "Achievements", value: `${gameState.achievements.length}/${achievements.length}`, icon: "🏆" },
        { label: "Pet Level", value: gameState.pet.level, icon: "🐾" },
        { label: "Pet Stage", value: petStages[gameState.pet.stage].name, icon: petStages[gameState.pet.stage].icon },
        { label: "Pet Fed Count", value: formatNumber(gameState.pet.fedCount), icon: "🍽️" },
        { label: "Total Upgrades Owned", value: formatNumber(totalUpgrades), icon: "📈" },
        { label: "Materials Collected", value: formatNumber(totalMaterials), icon: "💎" },
        { label: "Current Season", value: `${season.icon} ${season.name}`, icon: season.icon },
        { label: "Daily Streak", value: `${gameState.dailyReward.streak || 0} days`, icon: "📅" },
        { label: "Playtime", value: playtime, icon: "⏱️" },
        { label: "Max Combo Reached", value: `${gameState.combo.maxMultiplier || gameState.combo.multiplier.toFixed(1)}x`, icon: "⚡" }
    ];

    stats.forEach(stat => {
        const div = document.createElement('div');
        div.style.cssText = 'padding: 15px; background: rgba(255,255,255,0.1); border-radius: 12px; text-align: center;';
        div.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 5px;">${stat.icon}</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">${stat.label}</div>
            <div style="font-size: 1.3rem; font-weight: bold; color: var(--accent-gold);">${stat.value}</div>
        `;
        container.appendChild(div);
    });

    // Track max combo
    if (!gameState.combo.maxMultiplier || gameState.combo.multiplier > gameState.combo.maxMultiplier) {
        gameState.combo.maxMultiplier = gameState.combo.multiplier;
    }
}

// v2.0: Pet Play System
function playWithPet() {
    const now = Date.now();
    if (gameState.pet.lastPlayed && now - gameState.pet.lastPlayed < 60000) {
        const remaining = Math.ceil((60000 - (now - gameState.pet.lastPlayed)) / 1000);
        showToast(`⏳ Pet is tired! Wait ${remaining}s`);
        return;
    }

    gameState.pet.lastPlayed = now;
    const expGain = 25 * (gameState.events.active === 'exp_boost' ? 2 : 1);
    gameState.pet.exp += expGain;
    checkPetLevelUp();

    // Visuals
    const avatar = document.getElementById('pet-avatar');
    avatar.style.transform = "scale(1.5) rotate(20deg)";
    setTimeout(() => avatar.style.transform = "scale(1) rotate(0deg)", 500);

    showToast(`🎾 Played with pet! +${expGain} EXP`);
    updateDisplay();
    saveGame();
}

// Display Updates
function updateDisplay() {
    els.vibes.textContent = formatNumber(gameState.vibes);
    els.vps.textContent = formatNumber(gameState.vibesPerSecond);
    els.starDust.textContent = formatNumber(gameState.starDust);
    els.prestigeLevel.textContent = gameState.prestigeLevel;
    els.comboValue.textContent = `${gameState.combo.multiplier.toFixed(1)}x`;

    const comboPct = ((gameState.combo.multiplier - 1) / 9) * 100;
    els.comboBar.style.width = `${comboPct}%`;
}

function renderAll() {
    renderUpgrades();
    renderAchievements();
    renderPet();
    renderCrafting();
    if (skillManager) skillManager.renderSkills();
    if (inventoryManager) inventoryManager.renderInventory();
    updateDisplay();
}

// Game Loop
function startGameLoop() {
    setInterval(() => {
        if (gameState.vibesPerSecond > 0) {
            const amount = gameState.vibesPerSecond / 10;
            gameState.vibes += amount;
            gameState.totalVibes += amount;
            updateDisplay();
        }

        // Combo decay
        if (Date.now() - gameState.combo.lastClickTime > 1000 * gameState.modifiers.comboDecay) {
            gameState.combo.multiplier = Math.max(1.0, gameState.combo.multiplier - 0.05);
            updateDisplay();
        }
    }, 100);

    if (gameState.settings.autosave) {
        setInterval(saveGame, 5000);
    }
}

// Utilities
function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return Math.floor(num).toString();
}

function getTotalUpgrades() {
    return Object.values(gameState.upgrades).reduce((sum, u) => sum + u.count, 0);
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Save/Load
function saveGame() {
    const data = {
        gameState,
        skills: skillManager ? skillManager.unlockedSkills : [],
        inventory: inventoryManager ? { inventory: inventoryManager.inventory, equipped: inventoryManager.equipped } : { inventory: [], equipped: [] }
    };
    localStorage.setItem('etherealVibeSave', JSON.stringify(data));
}

function loadGame() {
    const saved = localStorage.getItem('etherealVibeSave');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            Object.assign(gameState, data.gameState);
            if (skillManager && data.skills) skillManager.unlockedSkills = data.skills;
            if (inventoryManager && data.inventory) {
                inventoryManager.inventory = data.inventory.inventory || [];
                inventoryManager.equipped = data.inventory.equipped || [];
            }
        } catch (e) {
            console.error('Load failed', e);
        }
    }
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
