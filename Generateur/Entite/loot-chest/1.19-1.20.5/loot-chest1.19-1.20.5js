function generateCommand() {
    const spawnType = document.getElementById("spawnType").value;
    const spawnX = document.getElementById("spawnX").value;
    const spawnY = document.getElementById("spawnY").value;
    const spawnZ = document.getElementById("spawnZ").value;
    const rotation = document.getElementById("rotation").value;
    const structure = document.getElementById("structure").value;

    let command = `/setblock ${spawnType === 'relative' ? `~${spawnX} ~${spawnY} ~${spawnZ}` : `${spawnX} ${spawnY} ${spawnZ}`} minecraft:chest`;

    command += `[facing=${rotation}]{LootTable:"chests/${structure}"}`;
    command += ` replace`

    const commandResult = document.getElementById("commandResult");
    commandResult.value = command;
}



function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}
