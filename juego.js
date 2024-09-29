let playerCard;
let systemCard;
let cheatActivated = false; // Variable para saber si el truco está activado

document.getElementById("secretZone").addEventListener("touchstart", activateCheat); // Tocar la zona secreta activa el truco
document.getElementById("pickPlayer1Card").addEventListener("click", (event) => handlePlayerClick('player1'));
document.getElementById("pickPlayer2Card").addEventListener("click", (event) => handlePlayerClick('player2'));
document.getElementById("resetButton").addEventListener("click", resetGame);

function activateCheat() {
    cheatActivated = true; // Activamos el truco cuando se toca la zona secreta
}

function handlePlayerClick(player) {
    if (player === 'player1') {
        playerCard = Math.floor(Math.random() * 13) + 1;
        document.getElementById("playerCard").innerText = "Jugador 1 eligió la carta: " + playerCard;
        document.getElementById("player1-status").innerText = "Carta elegida";
        document.getElementById("pickPlayer1Card").disabled = true;
        document.getElementById("pickPlayer2Card").disabled = false;

        // Si el truco está activado, el Jugador 1 gana
        if (cheatActivated) {
            playerCard = 13; // Aseguramos que gane con la mejor carta
        }
    } else if (player === 'player2') {
        systemCard = Math.floor(Math.random() * 13) + 1;
        document.getElementById("systemCard").innerText = "Jugador 2 eligió la carta: " + systemCard;
        document.getElementById("player2-status").innerText = "Carta elegida";
        document.getElementById("pickPlayer2Card").disabled = true;

        // Si el truco está activado, el Jugador 2 gana
        if (cheatActivated) {
            systemCard = 13; // Aseguramos que gane con la mejor carta
        }

        // Mostrar el resultado
        showResult();
    }
}

function showResult() {
    let resultText = "";

    if (systemCard > playerCard) {
        resultText = "Jugador 2 ha ganado con la carta " + systemCard + " contra " + playerCard;
    } else if (systemCard < playerCard) {
        resultText = "Jugador 1 ha ganado con la carta " + playerCard + " contra " + systemCard;
    } else {
        resultText = "¡Es un empate! Ambos jugadores eligieron " + playerCard;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("resetButton").style.display = "block"; // Mostrar el botón de reinicio
}

function resetGame() {
    cheatActivated = false; // Resetear el truco
    document.getElementById("playerCard").innerText = "";
    document.getElementById("systemCard").innerText = "";
    document.getElementById("result").innerText = "";

    document.getElementById("player1-status").innerText = "Esperando tu elección...";
    document.getElementById("player2-status").innerText = "Esperando tu elección...";

    document.getElementById("pickPlayer1Card").disabled = false;
    document.getElementById("pickPlayer2Card").disabled = true;
    document.getElementById("resetButton").style.display = "none";
}
