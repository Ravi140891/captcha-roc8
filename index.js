const captchaContainer = document.getElementById("captcha-container");
const captchaCodeContainer = document.getElementById("captcha-code");

function generateCaptcha() {
  const captchaCode = Math.floor(Math.random() * 9000) + 1000;

  captchaCodeContainer.textContent = captchaCode.toString();
}

window.onload = generateCaptcha;

const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", generateCaptcha);

const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const captchaCode = captchaCodeContainer.textContent;

  const captchaInput = document.getElementById("captcha-input");
  const userInput = parseInt(captchaInput.value);

  if (userInput == captchaCode) {
    document.querySelector("form").submit();
  } else {
    alert("Invalid CAPTCHA code. Please try again.");
    generateCaptcha();
    captchaInput.value = "";
  }
});
