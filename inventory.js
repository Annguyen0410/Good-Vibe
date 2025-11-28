// Inventory Manager - Charm System
class InventoryManager {
    constructor() {
        this.inventory = [];
        this.equipped = [];
        this.maxEquipped = 3;

        this.charmTypes = {
            luckyClover: {
                name: "Lucky Clover",
                rarity: "common",
                icon: "🍀",
                bonus: { critChance: 0.05 },
                dropChance: 0.4
            },
            ancientCoin: {
                name: "Ancient Coin",
                rarity: "common",
                icon: "🪙",
                bonus: { clickValue: 1.1 },
                dropChance: 0.3
            },
            roseQuartz: {
                name: "Rose Quartz",
                rarity: "rare",
                icon: "💎",
                bonus: { passiveProduction: 1.1 },
                dropChance: 0.2
            },
            starFragment: {
                name: "Star Fragment",
                rarity: "rare",
                icon: "⭐",
                bonus: { clickValue: 1.15 },
                dropChance: 0.08
            },
            moonStone: {
                name: "Moon Stone",
                rarity: "epic",
                icon: "🌙",
                bonus: { passiveProduction: 1.25 },
                dropChance: 0.015
            },
            cosmicGem: {
                name: "Cosmic Gem",
                rarity: "legendary",
                icon: "💠",
                bonus: { clickValue: 1.3, passiveProduction: 1.2 },
                dropChance: 0.005
            },
            // v2.0 Charms
            tridentOfPower: {
                name: "Trident of Power",
                rarity: "epic",
                icon: "🔱",
                bonus: { clickValue: 1.2, passiveProduction: 1.1 },
                dropChance: 0.01
            },
            tarotCard: {
                name: "Tarot Card",
                rarity: "rare",
                icon: "🎴",
                bonus: { clickValue: 1.1, passiveProduction: 1.1 },
                dropChance: 0.05
            },
            crownOfKings: {
                name: "Crown of Kings",
                rarity: "legendary",
                icon: "👑",
                bonus: { clickValue: 1.5, passiveProduction: 1.5, critChance: 0.1 },
                dropChance: 0.001
            }
        };
    }

    tryDropCharm() {
        const multiplier = gameState.events.active === 'double_drops' ? 2 : 1;
        const roll = Math.random();

        let cumulative = 0;
        for (const [id, charm] of Object.entries(this.charmTypes)) {
            cumulative += charm.dropChance * multiplier;
            if (roll <= cumulative) {
                this.addCharm(id);
                return;
            }
        }
    }

    addCharm(charmId) {
        const charm = { id: charmId, ...this.charmTypes[charmId] };
        this.inventory.push(charm);

        const rarityColors = {
            common: '#a0aec0',
            rare: '#93c5fd',
            epic: '#c4b5fd',
            legendary: '#fcd34d'
        };

        showToast(`✨ Found ${charm.name}!`);
        this.renderInventory();

        // Achievement check
        if (!gameState.achievements.includes('charmed')) {
            checkAchievements();
        }
    }

    equipCharm(index) {
        if (this.equipped.length >= this.maxEquipped) {
            showToast("❌ All slots full!");
            return;
        }

        const charm = this.inventory.splice(index, 1)[0];
        this.equipped.push(charm);

        updateModifiers();
        this.renderInventory();
        updateDisplay();
        showToast(`✓ Equipped ${charm.name}`);
    }

    unequipCharm(index) {
        const charm = this.equipped.splice(index, 1)[0];
        this.inventory.push(charm);

        updateModifiers();
        this.renderInventory();
        updateDisplay();
        showToast(`Unequipped ${charm.name}`);
    }

    applyModifiers(modifiers) {
        this.equipped.forEach(charm => {
            if (charm.bonus.clickValue) modifiers.clickValue *= charm.bonus.clickValue;
            if (charm.bonus.passiveProduction) modifiers.passiveProduction *= charm.bonus.passiveProduction;
            if (charm.bonus.critChance) modifiers.critChance += charm.bonus.critChance;
        });
    }

    renderInventory() {
        // Equipment Slots
        const slotsContainer = document.getElementById('equipment-slots');
        if (slotsContainer) {
            slotsContainer.innerHTML = '';

            for (let i = 0; i < this.maxEquipped; i++) {
                const slot = document.createElement('div');
                slot.className = 'charm-card';
                slot.style.textAlign = 'center';
                slot.style.padding = '20px';
                slot.style.marginBottom = '8px';

                if (this.equipped[i]) {
                    const charm = this.equipped[i];
                    slot.innerHTML = `
                        <div style="font-size: 2rem;">${charm.icon}</div>
                        <div style="font-size: 0.85rem; margin-top: 5px;">${charm.name}</div>
                    `;
                    slot.addEventListener('click', () => this.unequipCharm(i));
                } else {
                    slot.innerHTML = '<div style="font-size: 2rem; opacity: 0.3;">○</div><div style="font-size: 0.75rem; opacity: 0.5;">Empty</div>';
                }

                slotsContainer.appendChild(slot);
            }
        }

        // Inventory List
        const listContainer = document.getElementById('inventory-list');
        if (listContainer) {
            listContainer.innerHTML = '';

            if (this.inventory.length === 0) {
                listContainer.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 20px;">No charms yet</div>';
                return;
            }

            this.inventory.forEach((charm, index) => {
                const card = document.createElement('div');
                card.className = 'charm-card';

                const rarityColors = {
                    common: '#a0aec0',
                    rare: '#93c5fd',
                    epic: '#c4b5fd',
                    legendary: '#fcd34d'
                };

                card.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="font-size: 1.5rem;">${charm.icon}</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 700;">${charm.name}</div>
                            <div style="font-size: 0.75rem; color: ${rarityColors[charm.rarity]}; text-transform: uppercase;">${charm.rarity}</div>
                        </div>
                    </div>
                `;

                card.addEventListener('click', () => this.equipCharm(index));
                listContainer.appendChild(card);
            });
        }
    }
}

// Initialize inventory manager
const inventoryManager = new InventoryManager();
