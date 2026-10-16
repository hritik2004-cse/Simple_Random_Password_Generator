import isMobile from "./checkMobile.js";
import generateRandomPassword from "./generateRandomPassword.js";
let passLength = 6;
// HTML DOM elements
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const copyMsg1 = document.getElementById("copyMsg1");
const copyMsg2 = document.getElementById("copyMsg2");
const errorMsg = document.getElementById("error");
const passMainDiv = document.getElementById("pass-main-div");
const passLengthEl = document.getElementById("passLength");
const innerContainer = document.querySelector(".inner-container");
const generatePassBtn = document.getElementById("generatePassBtn");
passLengthEl.addEventListener("input", () => {
    passLength = Number(passLengthEl.value);
});
generatePassBtn.addEventListener("click", () => {
    if (!Number.isNaN(passLength)) {
        if (passLength === 0) {
            errorMsg.textContent = "Please enter a number to generate password.";
            errorMsg.style.display = "block";
        }
        else if (passLength >= 6 && passLength <= 20) {
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
        }
        else {
            errorMsg.textContent = "Password length must be between 6 and 20.";
            errorMsg.style.display = "block";
        }
    }
    else {
        errorMsg.textContent = "Please enter a valid Number.";
        errorMsg.style.display = "block";
    }
});
//# sourceMappingURL=index.js.map