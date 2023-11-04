function generateCommand() {
    const xCoord = document.getElementById("xCoord").value;
    const yCoord = document.getElementById("yCoord").value;
    const zCoord = document.getElementById("zCoord").value;
    const age = document.getElementById("age").value;
    const exactTeleport = document.getElementById("exactTeleport").value;
    const exitX = document.getElementById("exitX").value;
    const exitY = document.getElementById("exitY").value;
    const exitZ = document.getElementById("exitZ").value;
    const coordType = document.getElementById("coordType").checked ? "~" : "";

    function formatCoord(coord) {
        if (coord !== "") {
            return coord.startsWith("~") ? `${coordType}${coord}` : coordType + parseInt(coord);
        } else {
            return coordType + "0";
        }
    }

    const xCoordFormatted = formatCoord(xCoord);
    const yCoordFormatted = formatCoord(yCoord);
    const zCoordFormatted = formatCoord(zCoord);

    let command = `/setblock ${xCoordFormatted} ${yCoordFormatted} ${zCoordFormatted} minecraft:end_gateway replace {`;

    if (age) {
        command += `Age:${age}, `;
    }

    command += `ExactTeleport:${exactTeleport}, ExitPortal:{X:${exitX}, Y:${exitY}, Z:${exitZ}}}`;

    const commandResult = document.getElementById("commandResult");
    commandResult.value = command;
}



function copyCommand() {
    const commandResult = document.getElementById("commandResult");
    commandResult.select();
    document.execCommand("copy");
    alert("Commande copiée !");
}
