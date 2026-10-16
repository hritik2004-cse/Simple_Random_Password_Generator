import isMobile from "./checkMobile.js";
let isInfoDescOpen = false;
const infoBtn = document.getElementById("info");
const infoBtnDesc = document.getElementById("info-desc");
const handleInfo = () => {
    if (isInfoDescOpen === false) {
        infoBtnDesc.style.display = "inline";
        isInfoDescOpen = true;
    }
    else {
        infoBtnDesc.style.display = "none";
        isInfoDescOpen = false;
    }
};
if (isMobile) {
    infoBtn.addEventListener("click", handleInfo);
    infoBtn.removeEventListener("mouseover", handleInfo);
    infoBtn.removeEventListener("mouseleave", handleInfo);
    console.log("mobile");
}
else {
    infoBtn.removeEventListener("click", handleInfo);
    infoBtn.addEventListener("mouseover", handleInfo);
    infoBtn.addEventListener("mouseleave", handleInfo);
}
//# sourceMappingURL=info.js.map