// nanbar
const toggleBtn = document.querySelector(".toggle-btn"); //Varibale NavBar Mobile
const spanToggle = toggleBtn.querySelectorAll("span");
const menu = document.querySelector(".menu");

for (let i = 0; i < spanToggle.length; i++) {
  toggleBtn.addEventListener("click", () => {
    spanToggle[i].classList.toggle("active");
    menu.classList.toggle("active"); //ajout de la class active qui permet de faire apparaitre le menu mobile et l'animation sur le toggle
  });
}
document.addEventListener("wheel", (e) => {
  if (window.innerWidth > 800) {
    //si la fenetre est plus grande que 800px
    if (e.deltaY > 0) {
      // si je scroll vers le bas
      menu.style.transform = "translateY(-25vh)"; //le menu se cache
    } else {
      menu.style.transform = "translateY(0)"; //sinon il réapparait
    }
  } else if (scrollY >= window.innerHeight) {
    // si le scroll est sup ou egal a l hauteur de la fenetre
    toggleBtn.style.background = "black";
  } else {
    toggleBtn.style.background = "none";
  }
});
window.addEventListener("scroll", () => {
  if (window.innerWidth > 800) {
    //si la largeur de la fenêtre est sup à 800
    if (scrollY > window.innerHeight) {
      // et si le scroll sur Y est plus que la hauteur de la fenetre client
      menu.style.background = "black";
    } else {
      menu.style.background = "none"; //je change le style
    }
  }
});
