function generateCommand() {
    const spawnType = document.getElementById("spawnType").value;
    const spawnX = document.getElementById("spawnX").value;
    const spawnY = document.getElementById("spawnY").value;
    const spawnZ = document.getElementById("spawnZ").value;
    const age = document.getElementById("age").value;
    const exactTeleport = document.getElementById("exactTeleport").value;
    const exitX = document.getElementById("exitX").value;
    const exitY = document.getElementById("exitY").value;
    const exitZ = document.getElementById("exitZ").value;

    let command = `/setblock ${spawnType === 'relative' ? `~${spawnX} ~${spawnY} ~${spawnZ}` : `${spawnX} ${spawnY} ${spawnZ}`} minecraft:end_gateway{`;

    if (age) {
        command += `Age:${age}, `;
    }

    command += `ExactTeleport:${exactTeleport}, ExitPortal:{X:${exitX}, Y:${exitY}, Z:${exitZ}}}`;
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
