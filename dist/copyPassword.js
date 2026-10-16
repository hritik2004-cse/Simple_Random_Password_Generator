// DOM variables
const copyMsg1 = document.getElementById("copyMsg1");
const copyMsg2 = document.getElementById("copyMsg2");
const errorMsg = document.getElementById("error");
const passDiv = document.querySelectorAll(".password-div");
// function to copy password
async function copyText(textValue) {
    try {
        if (textValue) {
            await navigator.clipboard.writeText(textValue);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            errorMsg.textContent = "Unable to copy password";
        }
    }
}
passDiv.forEach((div) => {
    div.addEventListener("click", () => {
        if (div.dataset.password === "1") {
            copyText(div.childNodes[1]?.textContent);
            copyMsg1.textContent = "copied!";
            copyMsg2.textContent = "click to copy";
        }
        else if (div.dataset.password === "2") {
            copyText(div.childNodes[1]?.textContent);
            copyMsg2.textContent = "copied!";
            copyMsg1.textContent = "click to copy";
        }
    });
});
export {};
//# sourceMappingURL=copyPassword.js.map