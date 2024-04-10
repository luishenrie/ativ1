function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}
function combinacao(n, k) {
  if (k > n || k < 0 || n < 0) {
    return "Entrada inválida";
  }
  return fatorial(n) / (fatorial(n - k) * fatorial(k));
}
function calculateCombinations() {
  const n = document.getElementById("n").value;
  const k = document.getElementById("k").value;
  const result = combinacao(n, k);
  document.getElementById("result").textContent = `Combinação: ${result}`;
}