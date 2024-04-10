let rolando = false;
const messagem = document.getElementById("message");
function startRolling() {
  if (!rolando) {
    rolando = true;
    roll();
  }
}
function stopRolling() {
  rolando = false;
}
function roll() {
  if (rolando) {
    const firstChar = messagem.value.substring(0, 1);
    messagem.value = messagem.value.substring(1) + firstChar;
    setTimeout(roll, 100);
  }
}