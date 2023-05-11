const input = document.querySelector("input");
const button = document.querySelector(".btn");
const copyBtn = document.querySelector(".copyBtn");
button.addEventListener("click", () => {
  input.value = generatePassword(10);
});
function generatePassword(length) {
  let charText =
    "QWERTYUIOPLKJHGFDSAZXXCVBNMCqwertyuioplkjhgfdsazxcvbnmm@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * charText.length + 1);
    password += charText.charAt(char);
  }
  return password;
}

function CopyText() {
  let textC = input.select();
  navigator.clipboard.writeText(input.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + input.value;

  input.value = "";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

copyBtn.addEventListener("click", CopyText);
copyBtn.addEventListener("mouseout", outFunc);
