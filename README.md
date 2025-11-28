# Ethereal Vibes - Ultimate Edition

A modern, feature-rich idle clicker game with a beautiful neumorphic design, featuring pets, seasons, daily rewards, achievements, and an extensive upgrade system.

## Overview

Ethereal Vibes is an incremental idle clicker game where players generate "Vibes" by clicking a heart button. The game features multiple progression systems including upgrades, pet companions, skill trees, inventory management, achievements, daily login rewards, seasonal bonuses, and a prestige system. Built with vanilla JavaScript, CSS, and HTML, featuring a beautiful glassmorphic UI design with animated backgrounds.

## Features

### Core Mechanics
- **Heart Clicking**: Click the central heart to generate Vibes
- **Combo System**: Rapid clicking builds combo multipliers (up to 10x)
- **Critical Hits**: Random chance for 2x click value
- **Frenzy Mode**: Random golden heart spawns, activating 10x multiplier for 10 seconds
- **Passive Income**: Upgrades generate Vibes automatically per second
- **Offline Progress**: Earn vibes while away (capped at 24 hours)

### Game Systems

#### 1. Upgrades System
Purchase upgrades that generate passive Vibes per second. The game features 35+ upgrade tiers, from humble beginnings to cosmic entities:

**Early Game:**
- **Friendly Neighbor** (10 vibes) - +1 vibe/sec
- **Cute Dog** (100 vibes) - +5 vibes/sec
- **Motivational Speaker** (1,000 vibes) - +50 vibes/sec
- **Yoga Instructor** (5,000 vibes) - +200 vibes/sec
- **Life Coach** (20,000 vibes) - +1,000 vibes/sec
- **Meditation Guru** (100,000 vibes) - +5,000 vibes/sec
- **Angel Investor** (1,000,000 vibes) - +25,000 vibes/sec

**Mid Game:**
- **Zen Master** (10M vibes) - +75K vibes/sec
- **Universe Vibe** (50M vibes) - +100K vibes/sec
- **Cosmic Harmony** (250M vibes) - +500K vibes/sec
- **Infinity Essence** (1B vibes) - +2.5M vibes/sec

**Late Game:**
- **Spiritual Guide** through **Infinity Itself** - Scaling from millions to sextillions of vibes per second

Upgrade costs increase by 15% with each purchase.

#### 2. Pet Companion System
Raise and evolve your pet companion! The game features 6 different pet types, each with their own progression:

**Available Pets:**
- 🐦 Bird
- 🐉 Dragon
- 🦄 Unicorn
- 🐱 Cat
- 🐺 Wolf
- 🌌 Cosmic

**Pet Evolution Stages:**
- **Egg** (Level 1) - Starting stage, no bonus
- **Baby** (Level 5+) - +5% bonus
- **Teen** (Level 15+) - +15% bonus
- **Adult** (Level 30+) - +30% bonus
- **Legendary** (Level 50+) - +50% bonus

**Pet Actions:**
- **Feed**: Spend vibes (100 + level × 10) to give your pet 50 EXP
- **Play**: Free action with 60-second cooldown, gives 25 EXP
- **Auto-EXP**: Pet gains EXP from your clicks automatically

Each pet type maintains its own level, EXP, and stage progression independently.

#### 3. Constellations (Skill Tree)
Spend Star Dust (earned from prestiging) to unlock permanent skills in skill paths. Skills provide permanent bonuses to your gameplay.

**Skill Paths:**
- **Solar Path**: Focuses on active clicking bonuses
- **Lunar Path**: Focuses on passive production bonuses

Skills unlock permanent multipliers and bonuses that persist across prestiges.

#### 4. Charms (Inventory System)
Collect and equip charms that provide passive bonuses:
- **Common Charms**: Basic bonuses like crit chance or click value
- **Rare Charms**: Better bonuses for passive production
- **Legendary Charms**: Prestige bonuses and powerful multipliers

Equip up to 3 charms simultaneously for maximum benefit.

#### 5. Achievements
Unlock achievements by reaching milestones:
- **First Step**: Click the heart for the first time
- **Century**: Click 100 times
- **Thousand Clicks**: Click 1,000 times
- **Investor**: Buy your first upgrade
- **Collector**: Own 10 upgrades total
- **Millionaire**: Earn 1 million total vibes
- **Combo Master**: Reach 5x combo multiplier
- **Frenzy!**: Activate frenzy mode
- **Ascended**: Prestige for the first time
- **Charmed**: Find your first charm
- **Pet Master**: Max pet level
- **Craftsman**: Craft an item
- **Daily Dedication**: Log in 7 days straight
- **Milestone Master**: Complete 10 milestones
- **Automation**: Buy auto-clicker

#### 6. Daily Login Rewards
Log in daily to claim rewards and build your streak:

**Reward System:**
- Click today's date on the calendar to claim your daily reward
- Rewards scale with your streak (longer streaks = better rewards)
- Each day grants:
  - Vibes, Essence, Fragments, or Star Dust
  - A 4-hour buff (production, click value, or crit chance)
- Streak resets if you miss more than 1 day

**Calendar View:**
- Real-time calendar showing current month
- Today's date is highlighted and clickable
- Past days show checkmarks if claimed
- Future days are dimmed

#### 7. Seasonal System
The game automatically detects the current season based on the real-world date:

**Seasons:**
- **Spring** (Mar-May): +20% Click Value
- **Summer** (Jun-Aug): +30% Passive Production
- **Autumn** (Sep-Nov): +10% Crit Chance
- **Winter** (Dec-Feb): 50% slower Combo Decay

Season bonuses apply automatically and change with the calendar.

#### 8. Random Events
Random events can activate during gameplay:

**Event Types:**
- **Double Materials**: 2x drop rate for crafting materials
- **2x Pet EXP**: Pets level up twice as fast
- **Upgrade Discount**: 25% off all upgrades

Events last for 1 minute and have a 10% chance to activate every 2 minutes.

#### 9. Crafting System
Collect materials from clicking and use them to craft items:

**Materials:**
- **Essence**: Common material from clicks
- **Fragments**: Rare material from upgrades
- **Crystals**: Legendary material from achievements

**Crafting Recipes:**
- **Essence Boost**: Instant 1 hour of production
- **Lucky Charm**: Craft a charm item
- **StarDust Gem**: Gain Star Dust

#### 10. Prestige System
After earning 1 million total vibes, players can "Ascend" to reset progress and gain Star Dust:

- **Star Dust Formula**: `√(totalVibes / 1,000,000)`
- Star Dust is used to unlock skills in the Constellations
- Prestige resets all upgrades and vibes but keeps:
  - Star Dust
  - Unlocked skills
  - Inventory
  - Achievements
  - Pet progress

#### 11. Statistics Panel
Comprehensive statistics tracking:

**Tracked Stats:**
- Total Vibes Earned
- Current Vibes
- Vibes Per Second
- Total Clicks
- Clicks Per Second
- Average Vibes Per Click
- Prestige Level
- Star Dust
- Achievements Progress
- Pet Level & Stage
- Pet Fed Count
- Total Upgrades Owned
- Materials Collected
- Current Season
- Daily Streak
- Playtime
- Max Combo Reached

### Visual Features
- **Glassmorphic Design**: Modern glass-like UI with blur effects
- **Animated Background**: Floating particles and gradient orbs
- **Floating Text**: Positive affirmations and numbers float up on click
- **Combo Bar**: Visual progress bar showing current combo multiplier
- **Golden Heart**: Special event that spawns randomly (0.5% chance)
- **Smooth Animations**: Heartbeat animation, hover effects, and transitions
- **Responsive Design**: Works on desktop and mobile devices

### Audio System
Web Audio API generates procedural sounds:
- Click sounds (bubble pop effect)
- Purchase confirmation
- Achievement unlock
- Combo build-up
- Critical hit sound
- Pet interactions

## Technical Architecture

### File Structure
```
├── index.html          # Main HTML structure
├── styles.css          # Glassmorphic design system and styling
├── game.js             # Core game logic and state management
├── skills.js           # Skill tree system (Constellations)
├── inventory.js        # Charm inventory and equipment system
└── sounds.js           # Web Audio API sound system
```

### Key Components

#### Game State (`game.js`)
- Manages all game data (vibes, upgrades, achievements, pets, etc.)
- Handles click mechanics, combo system, and frenzy mode
- Calculates passive income and updates display
- Saves/loads progress from localStorage
- Real-time season detection
- Daily reward tracking
- Event system management

#### Skill Manager (`skills.js`)
- Manages skill tree unlocks and prerequisites
- Applies skill bonuses to game modifiers
- Renders skill tree UI

#### Inventory Manager (`inventory.js`)
- Handles charm drops and collection
- Manages equipment slots (3 slots)
- Applies charm bonuses to modifiers
- Renders inventory and equipment UI

#### Sound System (`sounds.js`)
- Procedural audio generation using Web Audio API
- Different sounds for clicks, purchases, achievements, combos, and crits
- Master volume control

### Design System

#### Glassmorphic Palette
- Background: Soft gradient with animated particles
- Text: Dark gray (#4a5568) for primary, lighter for secondary
- Accent Colors:
  - Pink: #ffb4b4
  - Purple: #c4b5fd
  - Blue: #93c5fd
  - Green: #a7f3d0
  - Gold: #fcd34d

#### Typography
- Headings: Nunito (800 weight)
- Body: Quicksand (400-700 weight)

#### Glassmorphic Effects
- Backdrop blur filters
- Semi-transparent backgrounds
- Soft shadows and highlights
- Smooth transitions

## How to Play

### Getting Started
1. **Click the Heart**: Start by clicking the heart button to generate Vibes
2. **Build Combos**: Click rapidly to increase your combo multiplier
3. **Buy Upgrades**: Spend Vibes on upgrades for passive income
4. **Raise Your Pet**: Feed and play with your pet to level it up
5. **Claim Daily Rewards**: Log in daily and click today's date on the calendar
6. **Unlock Skills**: Prestige to gain Star Dust and unlock skills
7. **Collect Charms**: Find and equip charms for permanent bonuses
8. **Achieve Goals**: Complete achievements for milestones

### Tips for Success
- **Early Game**: Focus on upgrades to build passive income quickly
- **Maintain Combos**: Click consistently to keep your combo multiplier high
- **Watch for Events**: Golden hearts activate Frenzy Mode for massive gains
- **Daily Logins**: Don't miss daily rewards - they provide valuable buffs
- **Pet Care**: Regularly feed and play with your pet for bonus multipliers
- **Prestige Timing**: Prestige when you've earned enough total vibes for meaningful Star Dust
- **Season Awareness**: Take advantage of seasonal bonuses
- **Charm Strategy**: Equip charms that complement your playstyle (active clicking vs. passive)

## Game Mechanics Details

### Combo System
- Combo multiplier starts at 1.0x
- Increases by 0.1x per click within decay window
- Maximum combo: 10.0x
- Decay time: 1 second (can be modified by skills/seasons)
- Combo resets if too much time passes between clicks

### Critical Hits
- Base crit chance: 0% (can be increased by skills/charms/seasons)
- Critical hits: 2x click value
- Visual indicator: Gold color and "!" suffix

### Frenzy Mode
- Golden heart spawns with 0.5% chance per click
- Click golden heart to activate
- 10x multiplier for 10 seconds
- Visual theme change (golden colors)
- Cannot spawn during active frenzy

### Passive Income
- Updates 10 times per second for smooth progression
- Formula: `(upgrade production × count) × passive multiplier × (1 + pet bonus)`
- Passive multiplier can be increased by skills, charms, and daily buffs

### Pet System
- Each pet type has independent progression
- EXP gained from:
  - Feeding: 50 EXP (costs vibes)
  - Playing: 25 EXP (free, 60s cooldown)
  - Clicks: Automatic EXP from manual clicks
- Leveling increases pet bonus multiplier
- Evolution happens at specific level thresholds

### Prestige Calculation
- Star Dust = `floor(√(totalVibes / 1,000,000))`
- Minimum 1 million total vibes required
- Resets: vibes, upgrades, upgrade costs
- Keeps: Star Dust, unlocked skills, inventory, achievements, pet progress

### Daily Rewards
- Reward scales with streak: `baseReward × (1 + streak × 0.1)`
- Buffs last 4 hours
- Streak resets if you miss more than 1 day
- Calendar shows claimable days

## Browser Compatibility

- Modern browsers with ES6+ support
- Web Audio API support for sounds
- localStorage for save data
- CSS Grid and Flexbox for layout
- Backdrop filter support for glassmorphic effects

## Save System

Game progress is automatically saved to localStorage:
- Auto-saves every 5 seconds
- Saves on all major actions (click, purchase, unlock, etc.)
- Save key: `etherealVibeSave`
- Includes: game state, skills, inventory, equipped items, pet progress

## Controls

- **Click**: Generate vibes
- **Tab Buttons**: Switch between different panels (Achievements, Pet, Crafting, Upgrades, Skills, Inventory)
- **Modal Buttons**: Access Events Calendar, Statistics, Settings
- **Pet Actions**: Feed and Play buttons in Pet tab
- **Daily Rewards**: Click today's date on the calendar

## Settings

Accessible via the Settings button (⚙️):
- **Sound Effects**: Toggle audio on/off
- **Particles**: Toggle animated background particles
- **Auto-Save**: Enable/disable automatic saving
- **Export Save**: Download your save file
- **Import Save**: Load a previously exported save
- **Hard Reset**: Clear all progress (irreversible)

## Development Notes

- Pure vanilla JavaScript (no frameworks)
- Modular architecture with separate managers
- Responsive design (mobile-friendly)
- Performance optimized (60fps animations)
- Clean, maintainable code structure
- Real-time date/season detection
- Comprehensive error handling

## Future Enhancements

Potential additions:
- More pet types and customization
- Additional skill tree paths
- More charm varieties and rarities
- Enhanced offline progress calculation
- Statistics export
- Leaderboards
- More achievements
- Prestige upgrades that persist across resets
- Mini-games for bonus rewards
- Social features

## License

This project is created for educational and demonstration purposes.

## Credits

- **Design**: Glassmorphic UI with neumorphic elements
- **Fonts**: Google Fonts (Nunito, Quicksand)
- **Icons**: Unicode emojis
- **Audio**: Procedural Web Audio API generation

---

**Enjoy spreading good vibes! ✨**

