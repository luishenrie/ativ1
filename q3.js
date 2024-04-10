function invertText() {
  const inputText = document.getElementById("inputText").value;
  const words = inputText.split(" ");
  const reversedWords = words.reverse();
  const outputText = reversedWords.join(" ");
  document.getElementById("outputText").value = outputText;
}
