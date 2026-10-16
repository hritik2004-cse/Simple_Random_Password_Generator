import isMobile from "./checkMobile.js";
import generateRandomPassword from "./generateRandomPassword.js";

let passLength: number = 6;

// HTML DOM elements
const pass1 = document.getElementById("pass1") as HTMLParagraphElement;
const pass2 = document.getElementById("pass2") as HTMLParagraphElement;
const copyMsg1 = document.getElementById("copyMsg1") as HTMLSpanElement;
const copyMsg2 = document.getElementById("copyMsg2") as HTMLSpanElement;
const errorMsg = document.getElementById("error") as HTMLParagraphElement;
const passMainDiv = document.getElementById("pass-main-div") as HTMLDivElement;
const passLengthEl = document.getElementById("passLength") as HTMLInputElement;
const innerContainer = document.querySelector(
  ".inner-container",
) as HTMLDivElement;
const generatePassBtn = document.getElementById(
  "generatePassBtn",
) as HTMLButtonElement;

passLengthEl.addEventListener("input", () => {
  passLength = Number(passLengthEl.value);
});

generatePassBtn.addEventListener("click", () => {
  if (!Number.isNaN(passLength)) {
    if (passLength === 0) {
      errorMsg.textContent = "Please enter a number to generate password.";
      errorMsg.style.display = "block";
    } else if (passLength >= 6 && passLength <= 20) {
      errorMsg.style.display = "none";
      copyMsg1.textContent = "click to copy";
      copyMsg2.textContent = "click to copy";

      const firstPass = generateRandomPassword(passLength);
      const secondPass = generateRandomPassword(passLength);

      passMainDiv.style.display = "block";
      pass1.textContent = firstPass;
      pass2.textContent = secondPass;

      isMobile
        ? passLength <= 12
          ? (innerContainer.style.flexDirection = "row")
          : (innerContainer.style.flexDirection = "column")
        : passLength <= 15
          ? (innerContainer.style.flexDirection = "row")
          : (innerContainer.style.flexDirection = "column");
    } else {
      errorMsg.textContent = "Password length must be between 6 and 20.";
      errorMsg.style.display = "block";
    }
  } else {
    errorMsg.textContent = "Please enter a valid Number.";
    errorMsg.style.display = "block";
  }
});
