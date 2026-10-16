// global variables
let passCharArr = [];
let hasNumber = false;
let hasSymbol = false;
// DOM variables
const includeSymbol = document.getElementById("includeSymbol");
const includeNumber = document.getElementById("includeNumber");
// password characters arrays
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
];
const numbers = [
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
];
const symbols = [
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
// check if password include symbols
includeSymbol.addEventListener("click", (e) => {
    if (includeSymbol.checked === true) {
        hasSymbol = true;
    }
    else if (includeSymbol.checked === false) {
        hasSymbol = false;
    }
    console.log(e);
});
// check if password include numbers
includeNumber.addEventListener("click", () => {
    if (includeNumber.checked === true) {
        hasNumber = true;
    }
    else if (includeNumber.checked === false) {
        hasNumber = false;
    }
});
// function to generate random password
function generateRandomPassword(length) {
    let password = "";
    if (hasNumber === false && hasSymbol === false) {
        passCharArr = [...characters];
    }
    else if (hasNumber === true && hasSymbol === false) {
        passCharArr = [...characters, ...numbers];
    }
    else if (hasNumber === false && hasSymbol === true) {
        passCharArr = [...characters, ...symbols];
    }
    else if (hasNumber === true && hasSymbol === true) {
        passCharArr = [...characters, ...numbers, ...symbols];
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * passCharArr.length);
        const passChar = passCharArr[randomIndex];
        if (passChar) {
            password += passChar;
        }
    }
    return password;
}
export default generateRandomPassword;
//# sourceMappingURL=generateRandomPassword.js.map