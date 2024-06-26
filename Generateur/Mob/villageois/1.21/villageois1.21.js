let tradeCount = 0;
const maxTrades = 27;

function addEnchantment(tradeIndex) {
    const outputeItemEnchantmentContainer = document.getElementById(`enchantmentContainer${tradeIndex}`);
    const enchantmentDiv = document.createElement("div");
    const enchantmentIndex = outputeItemEnchantmentContainer.childElementCount + 1;
    enchantmentDiv.id = `enchantment${tradeIndex}_${enchantmentIndex}`;
    enchantmentDiv.innerHTML = `
        <label for="outputItemEnchantment${tradeIndex}_${enchantmentIndex}">Enchantement :</label>
        <select id="outputItemEnchantment${tradeIndex}_${enchantmentIndex}">
            <option value="">Aucun</option>
            <option value="aquatic_affinity">Aquatic Affinity</option>
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
            <option value="sweeping">Sweeping</option>
            <option value="swift_sneek">Swift Sneak</option>
            <option value="thorns">Thorns</option>
            <option value="unbreaking">Unbreaking</option>
            <option value="vanishing_curse">Vanishing Curse</option>
            <option value="wind_burst">Wind burst</option>
        </select>
        <label for="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}">Niveau d'enchantement :</label>
        <input type="number" id="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}" min="1" max="255">
        <button class="delete-button" onclick="removeEnchantment(${tradeIndex}, ${enchantmentIndex})">Supprimer cet enchantement</button><br><hr>
    `;
    outputeItemEnchantmentContainer.appendChild(enchantmentDiv);
}

function removeEnchantment(tradeIndex, enchantmentIndex) {
    const enchantmentDiv = document.getElementById(`enchantment${tradeIndex}_${enchantmentIndex}`);
    enchantmentDiv.remove();
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
            <option value="sneaking_speed">Sneaking Speedd</option>
            <option value="submerged_mining_speed">Submerged Mining Speed</option>
            <option value="sweeping_damage_ratio">Sweeping Damage Ratio</option>
            <option value="step_height">Step Height</option>
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
        
        <button class="delete-button" onclick="removeAttributeModifier(${tradeIndex}, ${attributeModifierIndex})">Supprimer cet attribut modificateur</button><br><hr>
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
                <input type="text" id="outputItemCustomModelData${tradeCount}" placeholder="0"><br><hr>

                <label for="outputItemUnbreakable${tradeCount}">Unbreakable :</label>
                    <select id="outputItemUnbreakable${tradeCount}">
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select><hr><br>

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
        const inputItem = document.getElementById(`inputItem${i}`).value;
        const inputItemAmount = document.getElementById(`inputItemAmount${i}`).value;
        const inputItem2 = document.getElementById(`inputItem2${i}`).value;
        const inputItemAmount2 = document.getElementById(`inputItemAmount2${i}`).value;
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
        const rewardExp = document.getElementById(`rewardExp${i}`).checked;
        const maxUses = document.getElementById(`maxUses${i}`).value;
        const outputeItemEnchantmentContainer = document.querySelectorAll(`#enchantmentContainer${i} select`);
        const outpoutItemEnchantmentLevels = document.querySelectorAll(`#enchantmentContainer${i} input`);
        const outputItemJson = document.getElementById(`outputItemJson${i}`).value;

        command += "{";

        if (rewardExp) {
            command += `rewardExp:0b,`;
        } else {
            command += `rewardExp:1b,`;
        }

        if (maxUses) {
            command += `maxUses:${maxUses},`;
        } else {
            command += `maxUses:9999999,`;
        }

        if (inputItem) {
            command += `buy:{id:"${inputItem}",count:${inputItemAmount}},`;
        }

        if (inputItem2) {
            command += `buyB:{id:"${inputItem2}",count:${inputItemAmount2}},`;
        }

        if (outputItem || outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable !== "0" || outputItemCanDestroy || outputItemCanPlaceOn) {
            command += `sell:{`;

            if (outputItem) {
                command += `id:"${outputItem}",count:${outputItemAmount},components:{`;
            }

            if (outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable !== "0" || outputItemCanDestroy || outputItemCanPlaceOn || rewardExp) {
                command += `"minecraft:custom_name":'{`;

                if (outputItemName) {
                    command += `"text":"${outputItemName}","color":"${outputItemNameColor}"`;

                    if (outputItemLore) {
                        command += `}',"minecraft:lore":['{`
                        command += `"text":"${outputItemLore}","color":"${outputItemLoreColor}"}'],`;
                        
                    } else {
                        command += `}',`;
                    }
                } else {
                    command += `}',`;
                }

                if (outputeItemEnchantmentContainer.length > 0) {
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
                    command += `"minecraft:custom_model_data":${outputItemCustomModelData},`;
                }

                if (outputItemUnbreakable != 0) {
                    command += `"minecraft:unbreakable":{},`;
                }

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

function generateUniqueUUID() {
    return Math.floor(Math.random() * 1000000000 + 1000000000); // Génère un nombre unique entre 1000000000 et 1999999999
}

function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}
