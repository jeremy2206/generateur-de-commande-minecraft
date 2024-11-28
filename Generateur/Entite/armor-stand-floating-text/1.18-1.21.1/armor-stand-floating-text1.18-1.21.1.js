function generateCommand(){
    const spawnType = document.getElementById("spawnType").value;
    const spawnX = document.getElementById("spawnX").value;
    const spawnY = document.getElementById("spawnY").value;
    const spawnZ = document.getElementById("spawnZ").value;
    const CustomName = document.getElementById("CustomName").value;
    const CustomNameColor = document.getElementById("CustomNameColor").value;

    let command = `/summon armor_stand ${spawnType === 'relative' ? `~${spawnX} ~${spawnY} ~${spawnZ}` : `${spawnX} ${spawnY} ${spawnZ}`} {Invisible:1b,Invulnerable:1b,NoGravity:1b,Marker:1b,CustomName:'{\"text\":\"${CustomName}\",\"color\":\"${CustomNameColor}\"}',CustomNameVisible:1b}`;

    const commandResult = document.getElementById("commandResult");
    commandResult.value = command;
}

function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}

function copyCommandBonus() {
    const commandResult = document.getElementById("commandBonus");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}
