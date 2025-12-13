let tradeCount = 0;
const maxTrades = 20;

function addEnchantment(tradeIndex) {
    const outputeItemEnchantmentContainer = document.getElementById(`enchantmentContainer${tradeIndex}`);
    const enchantmentDiv = document.createElement("div");
    const enchantmentIndex = outputeItemEnchantmentContainer.childElementCount + 1;
    enchantmentDiv.id = `enchantment${tradeIndex}_${enchantmentIndex}`;
    enchantmentDiv.innerHTML = `
        <label for="outputItemEnchantment${tradeIndex}_${enchantmentIndex}">Enchantement :</label>
        <select id="outputItemEnchantment${tradeIndex}_${enchantmentIndex}">
            <option value="">Aucun</option>
            <option value="aqua_affinity">Aqua Affinity</option>
            <option value="bane_of_arthropods">Bane of Arthropods</option>
            <option value="binding_curse">Binding Curse</option>
            <option value="blast_protection">Blast Protection</option>
            <option value="breach">Breach</option>
            <option value="channeling">Channeling</option>
            <option value="density">Density</option>
            <option value="depth_strider">Depth Strider</option>
            <option value="efficiency">Efficiency</option>
            <option value="feather_falling">Feather Falling</option>
            <option value="fire_aspect">Fire Aspect</option>
            <option value="fire_protection">Fire Protection</option>
            <option value="flame">Flame</option>
            <option value="fortune">Fortune</option>
            <option value="frost_walker">Frost Walker</option>
            <option value="impaling">Impaling</option>
            <option value="infinity">Infinity</option>
            <option value="knockback">Knockback</option>
            <option value="looting">Looting</option>
            <option value="loyalty">Loyalty</option>
            <option value="luck_of_the_sea">Luck of the Sea</option>
            <option value="lure">Lure</option>
            <option value="mending">Mending</option>
            <option value="multishot">Multishot</option>
            <option value="piercing">Piercing</option>
            <option value="power">Power</option>
            <option value="projectile_protection">Projectile Protection</option>
            <option value="protection">Protection</option>
            <option value="punch">Punch</option>
            <option value="quick_charge">Quick Charge</option>
            <option value="respiration">Respiration</option>
            <option value="riptide">Riptide</option>
            <option value="sharpness">Sharpness</option>
            <option value="silk_touch">Silk Touch</option>
            <option value="smite">Smite</option>
            <option value="soul_speed">Soul Speed</option>
            <option value="sweeping_edge">Sweeping Edge</option>
            <option value="swift_sneak">Swift Sneak</option>
            <option value="thorns">Thorns</option>
            <option value="unbreaking">Unbreaking</option>
            <option value="vanishing_curse">Vanishing Curse</option>
            <option value="wind_burst">Wind burst</option>
        </select>
        <label for="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}">Niveau d'enchantement :</label>
        <input type="number" id="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}" min="1" max="255">
        <button class="delete-button" onclick="removeEnchantment(${tradeIndex}, ${enchantmentIndex})">Supprimer cet enchantement</button><br><hr class="littlehr">
    `;
    outputeItemEnchantmentContainer.appendChild(enchantmentDiv);
}

function removeEnchantment(tradeIndex, enchantmentIndex) {
    const enchantmentDiv = document.getElementById(`enchantment${tradeIndex}_${enchantmentIndex}`);
    enchantmentDiv.remove();
}

function addPotionEffects(tradeIndex,type) {
    effectlist = `
        <option value="">Aucun</option>
        <option value="absorption">Absorption</option>
        <option value="bad_omen">Bad Omen</option>
        <option value="blindness">Blindness</option>
        <option value="conduit_power">Conduit Power</option>
        <option value="darkness">Darkness</option>
        <option value="dolphin_grace">Dolphin Grace</option>
        <option value="fire_resistance">Fire Resistance</option>
        <option value="glowing">Glowing</option>
        <option value="haste">Haste</option>
        <option value="health_boost">Health Boost</option>
        <option value="hero_of_the_village">Hero of the Village</option>
        <option value="hunger">Hunger</option>
        <option value="infested">Infested</option>
        <option value="instant_damage">Instant Damage</option>
        <option value="instant_health">Instant Health</option>
        <option value="invisibility">Invisibility</option>
        <option value="jump_boost">Jump Boost</option>
        <option value="levitation">Levitation</option>
        <option value="luck">Luck</option>
        <option value="mining_fatigue">Mining Fatigue</option>
        <option value="nausea">Nausea</option>
        <option value="night_vision">Night Vision</option>
        <option value="oozing">Oozing</option>
        <option value="poison">Poison</option>
        <option value="raid_omen">Raid Omen</option>
        <option value="regeneration">Regeneration</option>
        <option value="resistance">Resistance</option>
        <option value="saturation">Saturation</option>
        <option value="slow_falling">Slow Falling</option>
        <option value="slowness">Slowness</option>
        <option value="speed">Speed</option>
        <option value="strength">Strength</option>
        <option value="trial_omen">Trial Omen</option>
        <option value="unluck">Unluck</option>
        <option value="water_breathing">Water Breathing</option>
        <option value="weakness">Weakness</option>
        <option value="weaving">Weaving</option>
        <option value="wind_charged">Wind Charged</option>
        <option value="wither">Wither</option>
    `

    if (type === "effectDeathProtection") {
        const deathProtectionEffectsContainer = document.getElementById(`deathProtectionEffectsContainer${tradeIndex}`);
        const effectDeathProtectionDiv = document.createElement("div");
        const effectIndex = deathProtectionEffectsContainer.childElementCount + 1;
        effectDeathProtectionDiv.id = `effectDeathProtection${tradeIndex}_${effectIndex}`;
        effectDeathProtectionDiv.innerHTML = `
            <hr class="littlehr"><label for="effectDeathProtectionName${tradeIndex}_${effectIndex}">Effet :</label>
            <select id="effectDeathProtectionName${tradeIndex}_${effectIndex}">
                ${effectlist}
            </select>
            <label for="effectDeathProtectionAmplifier${tradeIndex}_${effectIndex}">Niveau d'effet :</label>
            <input type="number" id="effectDeathProtectionAmplifier${tradeIndex}_${effectIndex}" min="0" max="255">
            <label for="effectDeathProtectionDuration${tradeIndex}_${effectIndex}">Durée d'effet (en secondes):</label>
            <input type="number" id="effectDeathProtectionDuration${tradeIndex}_${effectIndex}" min="0">
            <button class="delete-button" onclick="removePotionEffects(${tradeIndex}, ${effectIndex}, 'effectDeathProtection')">Supprimer cet effet</button><br><br>
        `;
        deathProtectionEffectsContainer.appendChild(effectDeathProtectionDiv);
    } else {
        const effectsContainer = document.getElementById(`effectsContainer${tradeIndex}`);
        const effectDiv = document.createElement("div");
        const effectIndex = effectsContainer.childElementCount + 1;
        effectDiv.id = `effect${tradeIndex}_${effectIndex}`;
        effectDiv.innerHTML = `
            <hr class="littlehr"><label for="effect${tradeIndex}_${effectIndex}">Effet :</label>
            <select id="effect${tradeIndex}_${effectIndex}">
                ${effectlist}
            </select>
            <label for="effectLevel${tradeIndex}_${effectIndex}">Niveau d'effet :</label>
            <input type="number" id="effectLevel${tradeIndex}_${effectIndex}" min="0" max="255">
            <label for="effectDuration${tradeIndex}_${effectIndex}">Durée d'effet (en secondes):</label>
            <input type="number" id="effectDuration${tradeIndex}_${effectIndex}" min="0">
            <button class="delete-button" onclick="removePotionEffects(${tradeIndex}, ${effectIndex}, 'effect')">Supprimer cet effet</button><br><br>
        `;
        effectsContainer.appendChild(effectDiv);
    }
}

function removePotionEffects(tradeIndex, potionIndex, type) {
    if (type === "effectDeathProtection") {
        const potionDiv = document.getElementById(`effectDeathProtection${tradeIndex}_${potionIndex}`);
        potionDiv.remove();
    } else {
        const potionDiv = document.getElementById(`effect${tradeIndex}_${potionIndex}`);
        potionDiv.remove();
    }
}

function addAttributeModifier(tradeIndex) {
    const attributeModifiersContainer = document.getElementById(`attributeModifiersContainer${tradeIndex}`);
    const attributeModifierDiv = document.createElement("div");
    const attributeModifierIndex = attributeModifiersContainer.childElementCount + 1;

    // Générez des UUID uniques pour l'attribut modificateur
    const uuid1 = generateUniqueUUID();
    const uuid2 = generateUniqueUUID();
    const uuid3 = generateUniqueUUID();
    const uuid4 = generateUniqueUUID();

    attributeModifierDiv.id = `attributeModifier${tradeIndex}_${attributeModifierIndex}`; // Ajoutez un ID à l'élément
    attributeModifierDiv.innerHTML = `
        <label for="outputAttributeEffect${tradeIndex}_${attributeModifierIndex}">Attribut :</label>
        <select id="outputAttributeEffect${tradeIndex}_${attributeModifierIndex}">
            <option value="armor">Armor</option>
            <option value="armor_toughness">Armor Toughness</option>
            <option value="attack_damage">Attack Damage</option>
            <option value="attack_knockback">Attack Knockback</option>
            <option value="attack_speed">Attack Speed</option>
            <option value="block_break_speed">Block Break Speed</option>
            <option value="block_interaction_range">Block Interaction Range</option>
            <option value="burning_time">Burning Time</option>
            <option value="entity_interaction_range">Entity Interaction Range</option>
            <option value="explosion_knockback_resistance">Explosion Knockback Resistance</option>
            <option value="fall_damage_multiplier">Fall Damage Multiplier</option>
            <option value="follow_range">Follow Range</option>
            <option value="gravity">Gravity</option>
            <option value="jump_strength">Jump Strength</option>
            <option value="knockback_resistance">Knockback Resistance</option>
            <option value="luck">Luck</option>
            <option value="max_absorption">Max Absorption</option>
            <option value="max_health">Max Health</option>
            <option value="mining_efficiency">Mining Efficiency</option>
            <option value="movement_efficiency">Movement Efficiency</option>
            <option value="movement_speed">Movement Speed</option>
            <option value="oxygen_bonus">Oxygen Bonus</option>
            <option value="safe_fall_distance">Safe Fall Distance</option>
            <option value="scale">Scale</option>
            <option value="sneaking_speed">Sneaking Speed</option>
            <option value="submerged_mining_speed">Submerged Mining Speed</option>
            <option value="sweeping_damage_ratio">Sweeping Damage Ratio</option>
            <option value="step_height">Step Height</option>
            <option value="tempt_range">Tempt Range</option>
            <option value="water_movement_efficiency">Water Movement Effciency</option>
        </select>
        
        <label for="outputAttributeEffectId${tradeIndex}_${attributeModifierIndex}">ID/Nom de l'attribut :</label>
        <input type="text" id="outputAttributeEffectId${tradeIndex}_${attributeModifierIndex}">
        
        <label for="outputAttributeEffectSlot${tradeIndex}_${attributeModifierIndex}">Emplacement :</label>
        <select id="outputAttributeEffectSlot${tradeIndex}_${attributeModifierIndex}">
            <option value="any">Any</option>
            <option value="hand">Hand</option>
            <option value="mainhand">Mainhand</option>
            <option value="offhand">Offhand</option>
            <option value="armor">Armor</option>
            <option value="head">Head</option>
            <option value="chest">Chest</option>
            <option value="legs">Legs</option>
            <option value="feet">Feet</option>
        </select>
        
        <label for="outputAttributeEffectAmount${tradeIndex}_${attributeModifierIndex}">Montant :</label>
        <select id="outputAttributeEffectAmount${tradeIndex}_${attributeModifierIndex}">
            <option value="add_value">Add Value</option>
            <option value="add_multiplied_base">Add Multiplied Base</option>
            <option value="add_multiplied_total">Add Multiplied Total</option>
        </select>
        <input type="number" id="outputAttributeEffectAmountNumber${tradeCount}_${attributeModifierIndex}" value="1"><br>
        
        <button class="delete-button" onclick="removeAttributeModifier(${tradeIndex}, ${attributeModifierIndex})">Supprimer cet attribut modificateur</button><br><hr class="littlehr">
    `;

    attributeModifiersContainer.appendChild(attributeModifierDiv);
}


function removeAttributeModifier(tradeIndex, attributeModifierIndex) {
    const attributeModifierDiv = document.getElementById(`attributeModifier${tradeIndex}_${attributeModifierIndex}`);
    attributeModifierDiv.remove();
}

function addTrade() {
    if (tradeCount < maxTrades) {
        tradeCount++;
        const tradesContainer = document.getElementById("tradesContainer");
        const tradeDiv = document.createElement("div");
        tradeDiv.className = "trade-container";
        tradeDiv.id = `trade${tradeCount}`;
        tradeDiv.innerHTML = `
            <h3>Échange ${tradeCount}</h3>

            <div class="item-container">
                <label for="maxUses${tradeCount}">Max Uses :</label>
                <input type="number" id="maxUses${tradeCount}" min="1" max="9999999" value="9999999"><br>

                <label for="rewardExp${tradeCount}">Don't reward XP :</label>
                <input type="checkbox" id="rewardExp${tradeCount}" checked><br>
            </div>

            <div class="item-container">
                <label for="inputItem${tradeCount}">Item d'Entrée 1 :</label>
                <input type="text" id="inputItem${tradeCount}" placeholder="ex : diamond_sword"><br>

                <label for="inputItemAmount${tradeCount}">Quantité Item d'Entrée 1 :</label>
                <input type="number" id="inputItemAmount${tradeCount}" value="1"><br>
            </div>
            <div class="item-container">
                <label for="inputItem2${tradeCount}">Item d'Entrée 2 :</label>
                <input type="text" id="inputItem2${tradeCount}" placeholder="ex : diamond_sword"><br>

                <label for="inputItemAmount2${tradeCount}">Quantité Item d'Entrée 2 :</label>
                <input type="number" id="inputItemAmount2${tradeCount}" value="1"><br>
            </div>
            <div class="item-container">
                <label for="outputItem${tradeCount}">Item de Sortie :</label>
                <input type="text" id="outputItem${tradeCount}" placeholder="ex : diamond_sword"><br>

                <label for="outputItemAmount${tradeCount}">Quantité Item de Sortie :</label>
                <input type="number" id="outputItemAmount${tradeCount}" value="1"><br>

                <label for="outputMaxStackSize${tradeCount}">Max Stack Size :</label>
                <input type="number" id="outputMaxStackSize${tradeCount}" placeholder="7"><br>
                
                <label for="outputItemName${tradeCount}" class="output-item-container">Display Name:</label>
                <div class="output-item-color-container">
                <input type="text" id="outputItemName${tradeCount}" placeholder="Nom de l'item"><br>
                <input type="color" id="outputItemNameColor${tradeCount}" class="name-color" value="#ffffff"><br>
                </div>

                <label for="outputItemLore${tradeCount}" class="output-item-container">Display Lore:</label>
                <div class="lore-color-container">
                <input type="text" id="outputItemLore${tradeCount}" placeholder="Lore de l'item"><br>
                <input type="color" id="outputItemLoreColor${tradeCount}" class="lore-color" value="#808080"><br>
                </div><hr>

                <label for="outputItemCustomModelData${tradeCount}">Custom Model Data :</label>
                <input type="text" id="outputItemCustomModelData${tradeCount}" placeholder="0,8"><br><hr>

                <label for="outputItemUnbreakable${tradeCount}">Unbreakable :</label>
                    <select id="outputItemUnbreakable${tradeCount}">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select><br>

                <label for="outputDamage${tradeCount}">Damage:</label>
                <input type="number" id="outputDamage${tradeCount}" min="0" placeholder="10"><br>

                <label for="outputItemRarity${tradeCount}">Rarity :</label>
                    <select id="outputItemRarity${tradeCount}">
                        <option value="unset">Unset</option>
                        <option value="common">Common</option>
                        <option value="uncommon">Uncommon</option>
                        <option value="rare">Rare</option>
                        <option value="epic">epic</option>
                    </select><br>

                <label for="outputItemFireResitant${tradeCount}">Fire Resistant :</label>
                    <select id="outputItemFireResitant${tradeCount}">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select><hr><br>
                
                <label for="outputItemConsumable${tradeCount}">Consumable :</label>
                    <select id="outputItemConsumable${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemConsumable', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemConsumableSection${tradeCount}" style="display: none;">
                    <label for="outputItemConsumableSeconds${tradeCount}">Consumable Seconds :</label>
                        <input type="text" id="outputItemConsumableSeconds${tradeCount}" placeholder="0">

                    <label for="outputItemConsumableAnimation${tradeCount}">Consumable Animation :</label>
                        <select id="outputItemConsumableAnimation${tradeCount}">
                            <option value="unset">Unset</option>
                            <option value="none">None</option>
                            <option value="eat">Eat</option>
                            <option value="drink">Drink</option>
                            <option value="block">Block</option>
                            <option value="bow">Bow</option>
                            <option value="spear">Spear</option>
                            <option value="crossbow">Crossbow</option>
                            <option value="spyglass">Spyglass</option>
                            <option value="toot_horn">Toot Horn</option>
                            <option value="brush">Brush</option>
                        </select>

                    <label for="outputItemConsumableSoundEvent${tradeCount}">Consumable Sound Event :</label>
                        <input type="text" id="outputItemConsumableSoundEvent${tradeCount}" placeholder="ambiant.cave">

                    <label for="outputItemConsumableHasConsumeParticle${tradeCount}">Consumable Has Consume Particle : </label>
                        <select id="outputItemConsumableHasConsumeParticle${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select><br>

                    <label for="outputItemConsumableClearAllEffects${tradeCount}">On Consume Effects - Clear All Effects : </label>
                        <select id="outputItemConsumableClearAllEffects${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>

                    <label for="outputItemConsumableTeleportRandomly${tradeCount}">On Consume Effects - Teleport Randomly : </label>
                        <input type="text" id="outputItemConsumableTeleportRandomly${tradeCount}" placeholder="5.5">

                    <label for="outputItemConsumablePlaySound${tradeCount}">On Consume Effects - Play Sound :</label>
                        <input type="text" id="outputItemConsumablePlaySound${tradeCount}" placeholder="ambiant.cave">
                </div>
                <hr><br>

                <label for="outputItemEquipable${tradeCount}">Equipable :</label>
                    <select id="outputItemEquipable${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemEquipable', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemEquipableSection${tradeCount}" style="display: none;">
                    <label for="outputItemEquipableSlot${tradeCount}">Equipable Slot :</label>
                        <select id="outputItemEquipableSlot${tradeCount}">
                            <option value="unset">Unset</option>
                            <option value="feet">Feet</option>
                            <option value="legs">Legs</option>
                            <option value="chest">Chest</option>
                            <option value="head">Head</option>
                            <option value="body">Body</option>
                            <option value="mainhand">Main Hand</option>
                            <option value="offhand">Off Hand</option>
                        </select>
                    <label for="outputItemEquipableEquipSound${tradeCount}">Equipable Equip Sound :</label>
                        <input type="text" id="outputItemEquipableEquipSound${tradeCount}" placeholder="ambiant.cave">
                    <label for="outputItemEquipableSwappable${tradeCount}">Equipable Swappable :</label>
                        <select id="outputItemEquipableSwappable${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                    <label for="outputItemEquipableDamageOnHurt${tradeCount}">Equipable Damage On Hurt :</label>
                        <select id="outputItemEquipableDamageOnHurt${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                    <label for="outputItemEquipableGlider${tradeCount}">Equipable Glider:</label>
                        <select id="outputItemEquipableGlider${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                </div><hr><br>

                <label for="outputItemDeathProtection${tradeCount}">Death Protection :</label>
                    <select id="outputItemDeathProtection${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemDeathProtection', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemDeathProtectionSection${tradeCount}" style="display: none;">
                    <label for="outputItemDeathProtectionClearAllEffects${tradeCount}">Death Protection Clear All Effects :</label>
                        <select id="outputItemDeathProtectionClearAllEffects${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                    <div class="enchantment-container" id="deathProtectionEffectsContainer${tradeCount}">
                    <!-- Potion Effects will be added here -->
                    </div>
                    <button onclick="addPotionEffects(${tradeCount}, 'effectDeathProtection')">Ajouter un effet de potion</button><br><br>
                    <label for="outputItemDeathShowEffectParticle${tradeCount}">Death Protection Show Effect Particle :</label>
                        <select id="outputItemDeathShowEffectParticle${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                    <label for="outputItemDeathProtectionTeleportRandomly${tradeCount}">Death Protection Teleport Randomly :</label>
                        <input type="text" id="outputItemDeathProtectionTeleportRandomly${tradeCount}" placeholder="5.5">
                    <label for="outputItemDeathProtectionPlaySound${tradeCount}">Death Protection Play Sound :</label>
                        <input type="text" id="outputItemDeathProtectionPlaySound${tradeCount}" placeholder="ambiant.cave">
                </div><hr><br>
                    

                <label for="outputItemFood${tradeCount}">Food :</label>
                    <select id="outputItemFood${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemFood', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemFoodSection${tradeCount}" style="display: none;">
                    <label for="outputItemFoodNutrition${tradeCount}">Food Nutrition :</label>
                        <input type="text" id="outputItemFoodNutrition${tradeCount}" placeholder="5">
                    <label for="outputItemFoodSaturation${tradeCount}">Food Saturation :</label>
                        <input type="text" id="outputItemFoodSaturation${tradeCount}" placeholder="5">
                    <label for="outputItemFoodCanAlwaysEat${tradeCount}">Food Can Always Eat:</label>
                        <select id="outputItemFoodCanAlwaysEat${tradeCount}">
                            <option value="0">Non</option>
                            <option value="1">Oui</option>
                        </select>
                </div><hr><br>

                <label for="outputItemUseCoolDown${tradeCount}">Use CoolDown :</label>
                    <select id="outputItemUseCoolDown${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemUseCoolDown', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemUseCoolDownSection${tradeCount}" style="display: none;">
                    <label for="outputItemUseCoolDownSeconds${tradeCount}">Use CoolDown Seconds :</label>
                        <input type="text" id="outputItemUseCoolDownSeconds${tradeCount}" placeholder="5">
                    <label for="outputItemUseCooldownGroup${tradeCount}">Food Cooldown Group :</label>
                        <input type="text" id="outputItemUseCooldownGroup${tradeCount}" placeholder="supergroup">
                </div><hr><br>
                
                
                <label for="outputItemJukeboxPlayable${tradeCount}">Jukebox Playable :</label>
                    <select id="outputItemJukeboxPlayable${tradeCount}" onchange="toggleSection(${tradeCount}, 'outputItemJukeboxPlayable', this.value)">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                <div id="outputItemJukeboxPlayableSection${tradeCount}" style="display: none;">
                    <label for="outputItemJukeboxPlayableSong${tradeCount}">Jukebox Playable Song :</label>
                        <input type="text" id="outputItemJukeboxPlayableSong${tradeCount}"placeholder="minecraft:precipice">
                </div><hr><br>

                <label for="outputItemCanDestroy${tradeCount}" class="output-item-container">Can Destroy :</label>
                <input type="text" id="outputItemCanDestroy${tradeCount}" placeholder="ex : stone,dirt"><br>

                <label for="outputItemCanPlaceOn${tradeCount}" class="output-item-container">Can Place On :</label>
                <input type="text" id="outputItemCanPlaceOn${tradeCount}" placeholder="ex : grass_block,stone"><br><hr>

                <div class="enchantment-container" id="enchantmentContainer${tradeCount}">
                <!-- Enchantments will be added here -->
                </div>
                <button onclick="addEnchantment(${tradeCount})">Ajouter un enchantement</button><br><br><hr>

                <div class="enchantment-container" id="attributeModifiersContainer${tradeCount}">
                <!-- Enchantments will be added here -->
                </div>
                <button onclick="addAttributeModifier(${tradeCount})">Ajouter un Attribute Modifier</button><br><br><hr>

                <label for="enchantmentGlintOveride${tradeCount}">Enchantment Glint Override :</label>
                    <select id="enchantmentGlintOveride${tradeCount}">
                        <option value="2">Unset</option>
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select><br><hr>

                <label for="outputHideToolTyp"${tradeCount}">Hide Tool Tip :</label>
                    <select id="outputHideToolTip${tradeCount}">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select><br><hr>

                <label for="outputItemJson${tradeCount}">Autre JSON :</label>
                <input type="text" id="outputItemJson${tradeCount}" placeholder="ex : pages:[{text:Test}'],title:Test,author:Jerem2206"><br><hr>

                <button class="delete-button" onclick="removeTrade(${tradeCount})">Supprimer cet Échange</button><br><br>
            </div>
        `;
        tradesContainer.appendChild(tradeDiv);
    }
}

function removeTrade(tradeIndex) {
    const tradeDiv = document.getElementById(`trade${tradeIndex}`);
    tradeDiv.remove();
    tradeCount--;
}

function generateCommand() {
    const villagerName = document.getElementById("villagerName").value;
    const biome = document.getElementById("biome").value.toLowerCase();
    const profession = document.getElementById("profession").value.toLowerCase();
    const level = document.getElementById("level").value;
    const spawnType = document.getElementById("spawnType").value;
    const spawnX = document.getElementById("spawnX").value;
    const spawnY = document.getElementById("spawnY").value;
    const spawnZ = document.getElementById("spawnZ").value;
    const vilagerRotaHorizontale = document.getElementById("rotationY").value;
    const vilagerRotaVerticale = document.getElementById("rotationX").value;

    let command = `/summon minecraft:villager ${spawnType === 'relative' ? `~${spawnX} ~${spawnY} ~${spawnZ}` : `${spawnX} ${spawnY} ${spawnZ}`} {VillagerData:{profession:"${profession}",level:${level},type:"${biome}"},Invulnerable:${document.getElementById("invulnerable").checked ? "1" : "0"}b,PersistenceRequired:${document.getElementById("persistent").checked ? "1" : "0"}b,Silent:${document.getElementById("silent").checked ? "1" : "0"}b,NoAI:${document.getElementById("noAI").checked ? "1" : "0"}b,CustomNameVisible:${document.getElementById("customnamevisible").checked ? "1" : "0"}b,Glowing:${document.getElementById("glowing").checked ? "1" : "0"}b,Rotation:[${vilagerRotaHorizontale}f,${vilagerRotaVerticale}f],CustomName:'{"text":"${villagerName}"}',Offers:{Recipes:[`;

    for (let i = 1; i <= tradeCount; i++) {
        command += "{";

        const rewardExp = document.getElementById(`rewardExp${i}`).checked;
        if (rewardExp) {
            command += `rewardExp:0b,`;
        } else {
            command += `rewardExp:1b,`;
        }

        const maxUses = document.getElementById(`maxUses${i}`).value;
        if (maxUses) {
            command += `maxUses:${maxUses},`;
        } else {
            command += `maxUses:9999999,`;
        }

        const inputItem = document.getElementById(`inputItem${i}`).value;
        const inputItemAmount = document.getElementById(`inputItemAmount${i}`).value;
        if (inputItem) {
            command += `buy:{id:"${inputItem}",count:${inputItemAmount}},`;
        }

        const inputItem2 = document.getElementById(`inputItem2${i}`).value;
        const inputItemAmount2 = document.getElementById(`inputItemAmount2${i}`).value;
        if (inputItem2) {
            command += `buyB:{id:"${inputItem2}",count:${inputItemAmount2}},`;
        }

        const outputItem = document.getElementById(`outputItem${i}`).value;
        const outputItemAmount = document.getElementById(`outputItemAmount${i}`).value;
        const outputItemName = document.getElementById(`outputItemName${i}`).value;
        const outputItemLore = document.getElementById(`outputItemLore${i}`).value;
        const outputItemNameColor = document.getElementById(`outputItemNameColor${i}`).value;
        const outputItemLoreColor = document.getElementById(`outputItemLoreColor${i}`).value;
        const outputItemCustomModelData = document.getElementById(`outputItemCustomModelData${i}`).value;
        const outputItemUnbreakable = document.getElementById(`outputItemUnbreakable${i}`).value;
        const outputItemCanDestroy = document.getElementById(`outputItemCanDestroy${i}`).value;
        const outputItemCanPlaceOn = document.getElementById(`outputItemCanPlaceOn${i}`).value;
        const outputeItemEnchantmentContainer = document.querySelectorAll(`#enchantmentContainer${i} select`);
        if (outputItem || outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable !== "0" || outputItemCanDestroy || outputItemCanPlaceOn) {
            command += `sell:{`;

            if (outputItem) {
                command += `id:"${outputItem}",count:${outputItemAmount},components:{`;
            }

            if (outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable !== "0" || outputItemCanDestroy || outputItemCanPlaceOn || rewardExp) {
                
                if (outputItemName || outputItemLore) {
                    if (outputItemName) {
                        command += `"minecraft:custom_name":'{`;
                        command += `"text":"${outputItemName}","color":"${outputItemNameColor}"}',`;
                    }
                    if (outputItemLore) {
                        command += `"minecraft:lore":['{`;
                        command += `"text":"${outputItemLore}","color":"${outputItemLoreColor}"}'],`;
                        
                    }
                }

                const outpoutItemEnchantmentLevels = document.querySelectorAll(`#enchantmentContainer${i} input`);
                if (outputeItemEnchantmentContainer.length > 0) {
                    if (outputItem == "enchanted_book") {
                        command += `"minecraft:stored_enchantments":`;
                        command += `{levels:{`;
                        outputeItemEnchantmentContainer.forEach((outputItemEnchantmentSelect, index) => {
                            const enchantment = outputItemEnchantmentSelect.value;
                            const level = outpoutItemEnchantmentLevels[index].value;

                            if (enchantment) {
                                command += `"${enchantment}":${level},`;
                            }
                        });
                        if (outputeItemEnchantmentContainer.length > 0) {
                            command = command.slice(0, -1);
                        }
    
                        command += `}},`;

                    } else {
                        command += `"minecraft:enchantments":{`;

                        outputeItemEnchantmentContainer.forEach((outputItemEnchantmentSelect, index) => {
                            const enchantment = outputItemEnchantmentSelect.value;
                            const level = outpoutItemEnchantmentLevels[index].value;
    
                            if (enchantment) {
                                command += `levels:{"${enchantment}":${level}},`;
                            }
                        });
    
                        if (outputeItemEnchantmentContainer.length > 0) {
                            command = command.slice(0, -1);
                        }
    
                        command += `},`;
                    }
                    
                }

                const attributeModifiersContainer = document.querySelectorAll(`#attributeModifiersContainer${i} div`);
                const attributeModifiers = [];

                attributeModifiersContainer.forEach((attributeModifierDiv, index) => {
                    const attributeName = document.getElementById(`outputAttributeEffect${i}_${index + 1}`).value;
                    const attributeNameId = document.getElementById(`outputAttributeEffectId${i}_${index + 1}`).value;
                    const attributeSlot = document.getElementById(`outputAttributeEffectSlot${i}_${index + 1}`).value;
                    const attributeAmount = document.getElementById(`outputAttributeEffectAmount${i}_${index + 1}`).value;
                    const attributeAmountNumber = document.getElementById(`outputAttributeEffectAmountNumber${i}_${index + 1}`).value;

                    if (attributeName) {
                        const uuid1 = generateUniqueUUID();
                        const uuid2 = generateUniqueUUID();
                        const uuid3 = generateUniqueUUID();
                        const uuid4 = generateUniqueUUID();

                        const attributeModifier = {
                            AttributeName: `generic.${attributeName}`,
                            Id: attributeNameId,
                            Slot: attributeSlot,
                            Amount: attributeAmountNumber,
                            Operation: attributeAmount,
                            UUID: `[I;${uuid1},${uuid2},${uuid3},${uuid4}]`,
                        };

                        attributeModifiers.push(attributeModifier);
                    }
                });

                if (attributeModifiers.length > 0) {
                    command += `"minecraft:attribute_modifiers":[{`;

                    attributeModifiers.forEach((attributeModifier) => {
                        command += `type:"${attributeModifier.AttributeName}",`;

                        if (attributeModifier.Id != "") {
                            command += `id:"${attributeModifier.Id}",`
                        } else {
                            command += `id:"${attributeModifier.AttributeName}",`
                        }
                        command += `slot:"${attributeModifier.Slot}",amount:${attributeModifier.Amount},operation:"${attributeModifier.Operation}",uuid:${attributeModifier.UUID},`;
                    });

                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale

                    command += "}],";
                }

                if (outputItemCustomModelData) {
                    command += `"minecraft:custom_model_data":{flags:[${outputItemCustomModelData}]},`;
                }

                if (outputItemUnbreakable != 0) {
                    command += `"minecraft:unbreakable":{},`;
                }

                const outputItemDamage = document.getElementById(`outputDamage${i}`).value;
                if (outputItemDamage) {
                    command += `"minecraft:damage":${outputItemDamage},`;
                }

                const outputItemRarity = document.getElementById(`outputItemRarity${i}`).value;
                if (outputItemRarity != `unset`) {
                    command += `"minecraft:rarity":"${outputItemRarity}",`
                }

                const outputItemFireResitant = document.getElementById(`outputItemFireResitant${i}`).value;
                if (outputItemFireResitant != 0) {
                    command += `"minecraft:fire_resistant":{},`;
                }

                const outputItemConsumable = document.getElementById(`outputItemConsumable${i}`).value;
                const outputItemConsumableSeconds = document.getElementById(`outputItemConsumableSeconds${i}`).value;
                const outputItemConsumableAnimation = document.getElementById(`outputItemConsumableAnimation${i}`).value;
                const outputItemConsumableSoundEvent = document.getElementById(`outputItemConsumableSoundEvent${i}`).value;
                const outputItemConsumableHasConsumeParticle = document.getElementById(`outputItemConsumableHasConsumeParticle${i}`).value;
                const outputItemConsumableClearAllEffects = document.getElementById(`outputItemConsumableClearAllEffects${i}`).value;
                const outputItemConsumableTeleportRandomly = document.getElementById(`outputItemConsumableTeleportRandomly${i}`).value;
                const outputItemConsumablePlaySound = document.getElementById(`outputItemConsumablePlaySound${i}`).value;
                if (outputItemConsumable != 0) {
                    command += `"minecraft:consumable":{`;
                    if (outputItemConsumableSeconds) {
                        command += `consume_seconds:${outputItemConsumableSeconds},`;
                    }
                    if (outputItemConsumableAnimation != `unset`) {
                        command += `animation:"${outputItemConsumableAnimation}",`;
                    }
                    if (outputItemConsumableSoundEvent) {
                        command += `sound:"${outputItemConsumableSoundEvent}",`;
                    }
                    if (outputItemConsumableHasConsumeParticle != 0) {
                        command += `has_consume_particle:true,`;
                    }
                    if (outputItemConsumableClearAllEffects != 0 || outputItemConsumableTeleportRandomly || outputItemConsumablePlaySound) {
                        command += `on_consume_effects:[`;
                        if (outputItemConsumableClearAllEffects != 0) {
                            command += `{type:"minecraft:clear_all_effects"},`;
                        }
                        if (outputItemConsumableTeleportRandomly) {
                            command += `{type:"minecraft:teleport_randomly",diameter:${outputItemConsumableTeleportRandomly}},`;
                        }
                        if (outputItemConsumablePlaySound) {
                            command += `{type:"minecraft:play_sound",sound:"${outputItemConsumablePlaySound}"},`;
                        }
                        command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                        command += `],`;
                    }
                    command += `},`;
                }

                const outputItemEquipable = document.getElementById(`outputItemEquipable${i}`).value;
                const outputItemEquipableSlot = document.getElementById(`outputItemEquipableSlot${i}`).value;
                const outputItemEquipableEquipSound = document.getElementById(`outputItemEquipableEquipSound${i}`).value;
                const outputItemEquipableSwappable = document.getElementById(`outputItemEquipableSwappable${i}`).value;
                const outputItemEquipableDamageOnHurt = document.getElementById(`outputItemEquipableDamageOnHurt${i}`).value;
                if (outputItemEquipable != 0) {
                    command += `"minecraft:equippable":{`;
                    if (outputItemEquipableSlot != `unset`) {
                        command += `slot:"${outputItemEquipableSlot}",`;
                    }
                    if (outputItemEquipableEquipSound) {
                        command += `equip_sound:"${outputItemEquipableEquipSound}",`;
                    }
                    if (outputItemEquipableSwappable != 0) {
                        command += `swappable:true,`;
                    }
                    if (outputItemEquipableDamageOnHurt != 0) {
                        command += `damage_on_hurt:true,`;
                    }
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `},`;
                }
                
                const outputItemEquipableGlider = document.getElementById(`outputItemEquipableGlider${i}`).value;
                if (outputItemEquipableGlider != 0) {
                    command += `"minecraft:glider":{},`;
                }

                const outputItemDeathProtection = document.getElementById(`outputItemDeathProtection${i}`).value;
                const outputItemDeathProtectionClearAllEffects = document.getElementById(`outputItemDeathProtectionClearAllEffects${i}`).value;
                const outputItemDeathProtectionPlaySound = document.getElementById(`outputItemDeathProtectionPlaySound${i}`).value;
                const outputItemDeathProtectionTeleportRandomly = document.getElementById(`outputItemDeathProtectionTeleportRandomly${i}`).value;
                const outputItemDeathShowEffectParticle = document.getElementById(`outputItemDeathShowEffectParticle${i}`).value;
                const deathProtectionEffectsContainer = document.querySelectorAll(`#deathProtectionEffectsContainer${i} select`);
                const deathProtectionEffects = [];
                deathProtectionEffectsContainer.forEach((effectDeathProtectionDiv, index) => {
                    const effectName = document.getElementById(`effectDeathProtectionName${i}_${index + 1}`).value;
                    const effectAmplifier = document.getElementById(`effectDeathProtectionAmplifier${i}_${index + 1}`).value;
                    const effectDuration = document.getElementById(`effectDeathProtectionDuration${i}_${index + 1}`).value;

                    if (effectName && effectAmplifier && effectDuration) {
                        const effect = {
                            EffectName: effectName,
                            Amplifier: effectAmplifier,
                            Duration: Math.floor(effectDuration * 20), // Convertit les secondes en ticks
                        };

                        deathProtectionEffects.push(effect);
                    }
                });

                if (outputItemDeathProtection != 0) {
                    command += `"minecraft:death_protection":{`;
                    if (outputItemDeathProtectionClearAllEffects || outputItemDeathProtectionPlaySound || outputItemDeathProtectionTeleportRandomly || deathProtectionEffects.length > 0) {
                        command += `death_effects:[`;
                        if (outputItemDeathProtectionClearAllEffects == 1) {
                            command += `{type:"minecraft:clear_all_effects"},`;
                        }
                        if (outputItemDeathProtectionPlaySound) {
                            command += `{type:"minecraft:play_sound",sound:"${outputItemDeathProtectionPlaySound}"},`;
                        }
                        if (outputItemDeathProtectionTeleportRandomly) {
                            command += `{type:"minecraft:teleport_randomly",diameter:${outputItemDeathProtectionTeleportRandomly}},`;
                        }
                        if (deathProtectionEffects.length > 0) {
                            command+= `{type:"minecraft:apply_effects",effects:[`
                            deathProtectionEffects.forEach((effect) => {
                                command += `{id:"${effect.EffectName}",amplifier:${effect.Amplifier},duration:${effect.Duration},show_particles:`;
                                if (outputItemDeathShowEffectParticle) {
                                    command += `1b},`;
                                } else {
                                    command += `0b},`;
                                }
                            });
                            command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                            command += `]},`;
                        }
                        command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                        command += `]`;
                    }
                    command += `},`;
                }
                
                const outputItemFood = document.getElementById(`outputItemFood${i}`).value;
                const outputItemFoodNutrition = document.getElementById(`outputItemFoodNutrition${i}`).value;
                const outputItemFoodSaturation = document.getElementById(`outputItemFoodSaturation${i}`).value;
                const outputItemFoodCanAlwaysEat = document.getElementById(`outputItemFoodCanAlwaysEat${i}`).value;
                if (outputItemFood != 0) {
                    command += `"minecraft:food":{`;
                    if (outputItemFoodNutrition) {
                        command += `nutrition:${outputItemFoodNutrition},`;
                    }
                    if (outputItemFoodSaturation) {
                        command += `saturation:${outputItemFoodSaturation},`;
                    }
                    if (outputItemFoodCanAlwaysEat != 0) {
                        command += `can_always_eat:true,`;
                    }
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `},`;
                }

                const outputItemUseCoolDown = document.getElementById(`outputItemUseCoolDown${i}`).value;
                const outputItemUseCoolDownSeconds = document.getElementById(`outputItemUseCoolDownSeconds${i}`).value;
                const outputItemUseCooldownGroup = document.getElementById(`outputItemUseCooldownGroup${i}`).value;
                if (outputItemUseCoolDown != 0) {
                    command += `"minecraft:use_cooldown":{`;
                    if (outputItemUseCoolDownSeconds) {
                        command += `seconds:${outputItemUseCoolDownSeconds},`;
                    }
                    if (outputItemUseCooldownGroup) {
                        command += `cooldown_group:"${outputItemUseCooldownGroup}",`;
                    }
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `},`;
                }

                const outputItemJukeboxPlayable = document.getElementById(`outputItemJukeboxPlayable${i}`).value;
                const outputItemJukeboxPlayableSong = document.getElementById(`outputItemJukeboxPlayableSong${i}`).value;
                if (outputItemJukeboxPlayable != 0) {
                    command += `"minecraft:jukebox_playable":{`;
                    if (outputItemJukeboxPlayableSong) {
                        command += `song:"${outputItemJukeboxPlayableSong}",`;
                    }
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `},`;
                }

                const outputItemJson = document.getElementById(`outputItemJson${i}`).value;
                if (outputItemJson) {
                    command += `${outputItemJson},`;
                }
                    
                if (outputItemCanDestroy) {
                    command += `"minecraft:can_break":{predicates:[`;
                    const blocks = outputItemCanDestroy.split(",");
                    blocks.forEach((block) => {
                        command += `{blocks:"${block}"},`;
                    });
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `]},`;
                }
                
                if (outputItemCanPlaceOn) {
                     command += `"minecraft:can_place_on":{predicates:[`;
                
                    const blocks = outputItemCanPlaceOn.split(",");
                    blocks.forEach((block) => {
                        command += `{blocks:"${block}"},`;
                    });
                    command = command.replace(/,\s*$/, ''); // Supprimez la virgule finale
                    command += `]},`;
                }

                const enchantmentGlintOveride = document.getElementById(`enchantmentGlintOveride${i}`).value;
                if (enchantmentGlintOveride != 2) {
                    command += `minecraft:enchantment_glint_override":`;
                    if (enchantmentGlintOveride == 1) {
                        command += `true,`;
                    } else if (enchantmentGlintOveride == 0) {
                        command += `false,`;
                    }
                }
                
                const outputHideToolTip = document.getElementById(`outputHideToolTip${i}`).value;
                if (outputHideToolTip != 0) {
                    command += `"minecraft:hide_tooltip":{},`;
                }

                const outputMaxStackSize = document.getElementById(`outputMaxStackSize${i}`).value;
                if (outputMaxStackSize) {
                    command += `"minecraft:max_stack_size":${outputMaxStackSize},`;
                }

            }
            command = command.replace(/,\s*$/, ''); 
            command += "},";
        }
        command = command.replace(/,\s*$/, '');
        command += "}},";
    }
    command = command.replace(/,\s*$/, '');
    command += "]}}";

    document.getElementById("commandResult").value = command;
}

function toggleSection(tradeCount, sectionType, value) {
    const section = document.getElementById(sectionType + "Section" + tradeCount);
    if (section) {
        section.style.display = (value === "1") ? "block" : "none";
    }
}

function generateUniqueUUID() {
    return Math.floor(Math.random() * 1000000000 + 1000000000); // Génère un nombre unique entre 1000000000 et 1999999999
}

function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}
