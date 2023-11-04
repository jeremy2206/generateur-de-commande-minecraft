// script.js
let tradeCount = 0;
const maxTrades = 10;

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
            <option value="blast_protection">Blast Protection</option>
            <option value="channeling">Channeling</option>
            <option value="binding_curse">Curse of Binding</option>
            <option value="vanishing_curse">Curse of Vanishing</option>
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
            <option value="mending">Mending</option>
            <option value="multishot">Multishot</option>
            <option value="piercing">Piercing</option>
            <option value="power">Power</option>
            <option value="projectile_protection">Projectile Protection</option>
            <option value="protection">Protection</option>
            <option value="quick_charge">Quick Charge</option>
            <option value="respiration">Respiration</option>
            <option value="riptide">Riptide</option>
            <option value="sharpness">Sharpness</option>
            <option value="silk_touch">Silk Touch</option>
            <option value="smite">Smite</option>
            <option value="soul_speed">Soul Speed</option>
            <option value="sweeping">Sweeping Edge</option>
            <option value="thorns">Thorns</option>
            <option value="unbreaking">Unbreaking</option>
        </select>
        <label for="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}">Niveau d'enchantement :</label>
        <input type="number" id="outputItemEnchantmentLevel${tradeIndex}_${enchantmentIndex}" min="1" max="255">
        <button onclick="removeEnchantment(${tradeIndex}, ${enchantmentIndex})">Supprimer cet enchantement</button>
    `;
    outputeItemEnchantmentContainer.appendChild(enchantmentDiv);
}

function removeEnchantment(tradeIndex, enchantmentIndex) {
    const enchantmentDiv = document.getElementById(`enchantment${tradeIndex}_${enchantmentIndex}`);
    enchantmentDiv.remove();
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
                
                <label for="outputItemName${tradeCount}" class="output-item-container">Nom de l'Item de Sortie :</label>
                <div class="output-item-color-container">
                <input type="text" id="outputItemName${tradeCount}" placeholder="Nom de l'item"><br>
                <input type="color" id="outputItemNameColor${tradeCount}" class="name-color" value="#ffffff"><br>
                </div>

                <label for="outputItemLore${tradeCount}" class="output-item-container">Lore de l'Item de Sortie :</label>
                <div class="lore-color-container">
                <input type="text" id="outputItemLore${tradeCount}" placeholder="Lore de l'item"><br>
                <input type="color" id="outputItemLoreColor${tradeCount}" class="lore-color" value="#808080"><br>
                </div><hr>

                <label for="outputItemCustomModelData${tradeCount}">Custom Model Data :</label>
                <input type="text" id="outputItemCustomModelData${tradeCount}" placeholder="0"><br><hr>

                <label for="outputItemUnbreakable${tradeCount}" class="unbreakable-container">Unbreakable :</label>
                <input type="checkbox" id="outputItemUnbreakable${tradeCount}" class="unbreakable-checkbox"><br><hr>

                <label for="outputItemCanDestroy${tradeCount}" class="output-item-container">Can Destroy :</label>
                <input type="text" id="outputItemCanDestroy${tradeCount}" placeholder="ex : stone,dirt"><br>

                <label for="outputItemCanPlaceOn${tradeCount}" class="output-item-container">Can Place On :</label>
                <input type="text" id="outputItemCanPlaceOn${tradeCount}" placeholder="ex : grass_block,stone"><br><hr>

                <div class="enchantment-container" id="enchantmentContainer${tradeCount}">
                <!-- Enchantments will be added here -->
                </div>
                <button onclick="addEnchantment(${tradeCount})">Ajouter un enchantement</button>
                <button onclick="removeTrade(${tradeCount})">Supprimer cet Échange</button><br><br>
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
    const biome = document.getElementById("biome").value.toLowerCase(); // Convertir en minuscules
    const profession = document.getElementById("profession").value.toLowerCase(); // Convertir en minuscules
    const level = document.getElementById("level").value;
    const spawnType = document.getElementById("spawnType").value;
    const spawnX = document.getElementById("spawnX").value;
    const spawnY = document.getElementById("spawnY").value;
    const spawnZ = document.getElementById("spawnZ").value;

    let command = `/summon minecraft:villager ${spawnType === 'relative' ? `~${spawnX} ~${spawnY} ~${spawnZ}` : `${spawnX} ${spawnY} ${spawnZ}`} {VillagerData:{profession:"${profession}",level:${level},type:"${biome}"},Invulnerable:${document.getElementById("invulnerable").checked ? "1" : "0"}b,PersistenceRequired:${document.getElementById("persistent").checked ? "1" : "0"}b,Silent:${document.getElementById("silent").checked ? "1" : "0"}b,NoAI:${document.getElementById("noAI").checked ? "1" : "0"}b,CustomName:'{"text":"${villagerName}"}'`;

    command += `,Offers:{Recipes:[`;

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
        const outputItemUnbreakable = document.getElementById(`outputItemUnbreakable${i}`).checked;
        const outputItemCanDestroy = document.getElementById(`outputItemCanDestroy${i}`).value;
        const outputItemCanPlaceOn = document.getElementById(`outputItemCanPlaceOn${i}`).value;
        const outputeItemEnchantmentContainer = document.querySelectorAll(`#enchantmentContainer${i} select`);
        const outpoutItemEnchantmentLevels = document.querySelectorAll(`#enchantmentContainer${i} input`);

        command += "{";

        if (inputItem) {
            command += `buy:{id:"${inputItem}",Count:${inputItemAmount}},`;
        }

        if (inputItem2) {
            command += `buyB:{id:"${inputItem2}",Count:${inputItemAmount2}},`;
        }

        if (outputItem || outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable || outputItemCanDestroy || outputItemCanPlaceOn) {
            command += `sell:{`;

            if (outputItem) {
                command += `id:"${outputItem}",Count:${outputItemAmount},`;
            }

            if (outputItemName || outputItemLore || outputeItemEnchantmentContainer.length > 0 || outputItemCustomModelData !== "0" || outputItemUnbreakable || outputItemCanDestroy || outputItemCanPlaceOn) {
                command += `tag:{`;

                if (outputItemName) {
                    command += `display:{Name:'{"text":"${outputItemName}","color":"${outputItemNameColor}"}'`;

                    if (outputItemLore) {
                        command += `,`
                        command += `Lore:['{"text":"${outputItemLore}","color":"${outputItemLoreColor}"}']},`;
                    } else {
                        command += `},`;
                    }
                }

                if (outputeItemEnchantmentContainer.length > 0) {
                    command += `Enchantments:[`;

                    outputeItemEnchantmentContainer.forEach((outputItemEnchantmentSelect, index) => {
                        const enchantment = outputItemEnchantmentSelect.value;
                        const level = outpoutItemEnchantmentLevels[index].value;

                        if (enchantment) {
                            command += `{id:"minecraft:${enchantment}",lvl:${level}b},`;
                        }
                    });

                    if (outputeItemEnchantmentContainer.length > 0) {
                        command = command.slice(0, -1);
                    }

                    command += `],`;
                }

                if (outputItemCustomModelData) {
                    command += `CustomModelData:${outputItemCustomModelData},`;
                }

                if (outputItemUnbreakable) {
                    command += `Unbreakable:1b,`;
                }

                if (outputItemCanDestroy) {
                    command += `CanDestroy:[${outputItemCanDestroy}],`;
                }

                if (outputItemCanPlaceOn) {
                    command += `CanPlaceOn:[${outputItemCanPlaceOn}],`;
                }

                command += `}`;
            }

            command += "},";
        }

        command = command.replace(/,\s*$/, '');

        command += "},";
    }

    command = command.replace(/,\s*$/, '');

    command += "]}}";

    document.getElementById("commandResult").value = command;
}


function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}