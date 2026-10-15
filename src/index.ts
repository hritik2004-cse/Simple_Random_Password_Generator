const characters: readonly string[] = [
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

/* 
next targets :-
- Ability to set password length.
- add copy on click
- toggle for numbers and symbols on/off 
*/

// HTML DOM elements
const infoBtn = document.getElementById("info") as HTMLButtonElement;
const pass1Copy = document.getElementById("pass1copy") as HTMLElement;
const pass2Copy = document.getElementById("pass2copy") as HTMLElement;
const pass1 = document.getElementById("pass1") as HTMLParagraphElement;
const pass2 = document.getElementById("pass2") as HTMLParagraphElement;
const errorMsg = document.getElementById("error") as HTMLParagraphElement;
const infoBtnDesc = document.getElementById("info-desc") as HTMLUListElement;
const passMainDiv = document.getElementById("pass-main-div") as HTMLDivElement;
const passLengthEl = document.getElementById("passLength") as HTMLInputElement;
const innerContainer = document.querySelector(
  ".inner-container",
) as HTMLDivElement;
const generatePassBtn = document.getElementById(
  "generatePassBtn",
) as HTMLButtonElement;

let passLength: number = 0;
let hasNumber: boolean = false;
let hasSymbol: boolean = false;
let isInfoDescOpen: boolean = false;

// function to generate random password
function generateRandomPassword(length: number): string {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const passChar = characters[randomIndex];
    if (passChar) {
      password += passChar;
    }
  }
  return password;
}

passLengthEl.addEventListener("input", () => {
  passLength = Number(passLengthEl.value);
});

// event listner for infoBtn to display infoBtnDesc
infoBtn.addEventListener("click", () => {
  if (isInfoDescOpen === false) {
    infoBtnDesc.style.display = "inline";
    isInfoDescOpen = true;
  } else {
    infoBtnDesc.style.display = "none";
    isInfoDescOpen = false;
  }
});

generatePassBtn.addEventListener("click", () => {
  if (!Number.isNaN(passLength)) {
    if (passLength === 0) {
      errorMsg.textContent = "Please enter a number to generate password.";
      errorMsg.style.display = "block";
    } else if (passLength >= 6 && passLength <= 20) {
      const firstPass = generateRandomPassword(passLength);
      const secondPass = generateRandomPassword(passLength);

      passMainDiv.style.display = "block";
      pass1.textContent = firstPass;
      pass2.textContent = secondPass;

      if (passLength <= 12) {
        innerContainer.style.flexDirection = "row";
      } else {
        innerContainer.style.flexDirection = "column";
      }

      errorMsg.style.display = "none";
      pass1Copy.classList.add("fa-copy", "fa-regular");
      pass1Copy.classList.remove("fa-check", "fa-solid");
      pass2Copy.classList.add("fa-copy", "fa-regular");
      pass2Copy.classList.remove("fa-check", "fa-solid");
    } else {
      errorMsg.textContent = "Password length must be between 6 and 20.";
      errorMsg.style.display = "block";
    }
  } else {
    errorMsg.textContent = "Please enter a valid Number.";
    errorMsg.style.display = "block";
  }
});

pass1Copy.addEventListener("click", async () => {
  try {
    if (pass1.textContent) {
      await navigator.clipboard.writeText(pass1.textContent);
      pass1Copy.classList.remove("fa-copy", "fa-regular");
      pass1Copy.classList.add("fa-check", "fa-solid");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Unable to copy password", error);
      alert("Unable to copy password");
    }
  }
});

pass2Copy.addEventListener("click", async () => {
  try {
    if (pass2.textContent) {
      await navigator.clipboard.writeText(pass2.textContent);
      pass2Copy.classList.remove("fa-copy", "fa-regular");
      pass2Copy.classList.add("fa-check", "fa-solid");
    }
  } catch (error) {
    console.error("Unable to copy password", error);
    alert("Unable to copy password");
  }
});

