let isMobile: boolean = false;

document.addEventListener("DOMContentLoaded", (e) => {
  if (document.scrollingElement?.clientWidth) {
    if (document.scrollingElement?.clientWidth < 768) {
      isMobile = true;      
    } else {
      isMobile = false;
    }
  }
});

export default isMobile;
