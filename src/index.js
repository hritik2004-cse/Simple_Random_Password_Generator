"use strict";
const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "~",
    ":",
    ";",
    "<",
    ">",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "=",
    "_",
    "-",
    "/",
    ".",
    ",",
    "?",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
];
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const pass1Copy = document.getElementById("pass1copy");
const pass2Copy = document.getElementById("pass2copy");
const passMainDiv = document.getElementById("pass-main-div");
const generatePassBtn = document.getElementById("generatePassBtn");
function generateRandomPassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const passChar = characters[randomIndex];
        if (passChar) {
            password += passChar;
        }
    }
    return password;
}
generatePassBtn.addEventListener("click", () => {
    const firstPass = generateRandomPassword();
    const secondPass = generateRandomPassword();
    passMainDiv.style.display = "block";
    pass1.textContent = firstPass;
    pass2.textContent = secondPass;
    pass1Copy.classList.add("fa-copy", "fa-regular");
    pass1Copy.classList.remove("fa-check", "fa-solid");
    pass2Copy.classList.add("fa-copy", "fa-regular");
    pass2Copy.classList.remove("fa-check", "fa-solid");
});
pass1Copy.addEventListener("click", async () => {
    try {
        if (pass1.textContent) {
            await navigator.clipboard.writeText(pass1.textContent);
            pass1Copy.classList.remove("fa-copy", "fa-regular");
            pass1Copy.classList.add("fa-check", "fa-solid");
        }
    }
    catch (error) {
        console.error("Unable to copy password", error);
        alert("Unable to copy password");
    }
});
pass2Copy.addEventListener("click", async () => {
    try {
        if (pass2.textContent) {
            await navigator.clipboard.writeText(pass2.textContent);
            pass2Copy.classList.remove("fa-copy", "fa-regular");
            pass2Copy.classList.add("fa-check", "fa-solid");
        }
    }
    catch (error) {
        console.error("Unable to copy password", error);
        alert("Unable to copy password");
    }
});
